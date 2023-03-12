<script setup lang="ts">
import ManagerPathEntryChildren from './ManagerPathEntryChildren.vue'
import ManagerPathEntryControl from './ManagerPathEntryControl.vue'
import { PathEntry, pathEntryBasename } from './PathEntry'
import { State } from './State'
import { stateLoadPathEntryChildren } from './stateLoadPathEntryChildren'

const props = defineProps<{
  state: State
  pathEntry: PathEntry
}>()

function isSelected(): boolean {
  return props.pathEntry.path === props.state.currentPathEntry?.path
}

async function select() {
  if (props.state.currentPathEntry?.path !== props.pathEntry.path) {
    props.state.currentPathEntry = props.pathEntry
  } else if (isSelected() && props.pathEntry.kind === 'Directory') {
    await toggleOpen()
  }
}

async function toggleOpen() {
  if (props.pathEntry.kind !== 'Directory') {
    return
  }

  props.pathEntry.isOpen = !props.pathEntry.isOpen

  if (props.state.currentPathEntry?.kind === 'Directory') {
    props.state.currentPathEntry.isOpen = props.pathEntry.isOpen
  }

  if (props.pathEntry.isOpen) {
    props.pathEntry.isChildrenLoading = true
    await stateLoadPathEntryChildren(props.state, props.pathEntry)
    props.pathEntry.isChildrenLoading = false
  }
}
</script>

<template>
  <div class="flex flex-col">
    <div class="flex justify-between hover:bg-stone-200">
      <button
        class="scrollbar-hide w-full overflow-x-auto whitespace-nowrap px-2 text-left"
        :class="[isSelected() && 'bg-black text-white']"
        @click="select()"
      >
        <span>{{ pathEntryBasename(pathEntry) }}</span>
        <span v-if="pathEntry.kind === 'Directory'">/</span>
      </button>

      <ManagerPathEntryControl
        :state="state"
        :pathEntry="pathEntry"
        :isSelected="isSelected()"
      />
    </div>

    <ManagerPathEntryChildren
      v-if="pathEntry.kind === 'Directory'"
      :state="state"
      :pathEntry="pathEntry"
    />
  </div>
</template>
