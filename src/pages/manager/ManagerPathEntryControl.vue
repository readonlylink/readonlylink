<script setup lang="ts">
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/vue/24/outline'
import { join } from 'path-browserify'
import { stringTrimEnd } from '../../utils/stringTrimEnd'
import { PathEntry } from './PathEntry'
import { State } from './State'
import { stateCreateDirectory } from './stateCreateDirectory'
import { stateCreateFile } from './stateCreateFile'
import { stateDeletePathEntry } from './stateDeletePathEntry'

const props = defineProps<{
  state: State
  pathEntry: PathEntry
  isSelected: boolean
}>()

async function createPath(state: State) {
  const message = [
    `Starting from: ${props.pathEntry.path},`,
    'create new path (end a directory with "/"):',
  ].join('\n')

  const path = window.prompt(message)
  if (!path) {
    return
  }

  if (props.pathEntry.kind !== 'Directory') {
    return
  }

  if (path.endsWith('/')) {
    await stateCreateDirectory(
      state,
      stringTrimEnd(join(props.pathEntry.path, path), '/'),
      props.pathEntry.children,
    )
  } else {
    await stateCreateFile(
      state,
      join(props.pathEntry.path, path),
      props.pathEntry.children,
    )
  }
}

async function deletePath(state: State) {
  const message = `[deletePath] path: ${props.pathEntry.path}`
  if (!window.confirm(message)) {
    return
  }

  await stateDeletePathEntry(state, props.pathEntry)
}
</script>

<template>
  <div class="flex">
    <button
      v-if="pathEntry.kind === 'Directory'"
      class="px-1 hover:ring-1 hover:ring-inset hover:ring-black"
      :class="[
        isSelected
          ? 'bg-black text-white hover:ring-white'
          : 'hover:ring-black',
      ]"
      @click="createPath(state)"
    >
      <PlusSmallIcon class="h-4 w-4" />
    </button>

    <button
      class="px-1 hover:ring-1 hover:ring-inset"
      :class="[
        isSelected
          ? 'bg-black text-white hover:ring-white'
          : 'hover:ring-black',
      ]"
      @click="deletePath(state)"
    >
      <MinusSmallIcon class="h-4 w-4" />
    </button>
  </div>
</template>
