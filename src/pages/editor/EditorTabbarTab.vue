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
    class="flex items-center space-x-3 whitespace-pre px-3 py-1"
    :class="{
      'bg-stone-200': tab === state.currentTab,
      'bg-white hover:bg-stone-100': tab !== state.currentTab,
    }"
  >
    <button @click="state.currentTab = tab">
      {{ tab.file.name }}
    </button>

    <button
      :disabled="tab.isProcessing"
      @click="
        tabIsModified(tab)
          ? stateTabCloseAfterConfirming(state, tab)
          : stateTabClose(state, tab)
      "
      class="rounded-full hover:bg-stone-300"
      :class="{
        'bg-black': tabIsModified(tab) && !tab.isProcessing,
        'animate-spin': tab.isProcessing,
      }"
    >
      <ArrowPathIcon v-if="tab.isProcessing" class="h-4 w-4" />
      <XMarkIcon v-else class="h-4 w-4" />
    </button>
  </div>
</template>
