<script setup lang="ts">
import { PlusSmallIcon } from '@heroicons/vue/24/outline'
import { State } from './State'
import { stateCreateDirectory } from './stateCreateDirectory'
import { stateCreateFile } from './stateCreateFile'

defineProps<{ state: State }>()

async function createPath(state: State) {
  const message = [
    `Starting from root,`,
    'create new path (end a directory with "/"):',
  ].join('\n')

  const path = window.prompt(message)
  if (!path) {
    return
  }

  if (path.endsWith('/')) {
    await stateCreateDirectory(state, path, state.pathEntries)
  } else {
    await stateCreateFile(state, path, state.pathEntries)
  }
}
</script>

<template>
  <div class="flex">
    <button
      class="px-1 hover:ring-1 hover:ring-inset hover:ring-black"
      @click="createPath(state)"
    >
      <PlusSmallIcon class="h-4 w-4" />
    </button>
  </div>
</template>
