<script setup lang="ts">
import { ArrowPathIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import { State } from './State'
import { Tab } from './Tab'
import { stateTabClose } from './stateTabClose'
import { stateTabCloseAfterConfirming } from './stateTabCloseAfterConfirming'
import { tabIsModified } from './tabIsModified'

defineProps<{
  state: State
  tab: Tab
}>()
</script>

<template>
  <div
    class="flex items-center space-x-3 px-3 py-1"
    :class="{
      'bg-stone-200': tab === state.currentTab,
      'bg-white hover:bg-stone-100': tab !== state.currentTab,
    }"
  >
    <button @click="state.currentTab = tab">
      {{ tab.file.name }}
    </button>

    <button
      :disabled="tab.isSaving"
      @click="
        tabIsModified(tab)
          ? stateTabCloseAfterConfirming(state, tab)
          : stateTabClose(state, tab)
      "
      class="rounded-full hover:bg-stone-300"
      :class="{
        'bg-black': tabIsModified(tab) && !tab.isSaving,
        'animate-spin': tab.isSaving,
      }"
    >
      <ArrowPathIcon v-if="tab.isSaving" class="h-4 w-4" />
      <XMarkIcon v-else class="h-4 w-4" />
    </button>
  </div>
</template>
