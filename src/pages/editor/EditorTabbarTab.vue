<script setup lang="ts">
import { ArrowPathIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import { callWithConfirm } from '../../utils/browser/callWithConfirm'
import { State } from './State'
import { Tab } from './Tab'
import { stateTabClose } from './stateTabClose'
import { tabIsModified } from './tabIsModified'

const lang = useGlobalLang()

defineProps<{
  state: State
  tab: Tab
}>()
</script>

<template>
  <div
    class="flex max-w-min items-center space-x-0.5 overflow-x-auto whitespace-pre py-1 pl-3 pr-1.5"
    :title="tab.node?.relativePath || tab.file.name"
    :class="{
      'bg-stone-200 dark:bg-stone-600': tab === state.currentTab,
      'bg-white hover:bg-stone-100 dark:bg-black hover:dark:bg-stone-800':
        tab !== state.currentTab,
    }"
  >
    <button
      @click="state.currentTab = tab"
      class="scrollbar-h-0 shrink grow basis-0 overflow-x-auto text-start"
      :class="{ 'text-amber-600 dark:text-amber-400': tabIsModified(tab) }"
    >
      {{ tab.file.name }}
    </button>

    <button
      :disabled="tab.isProcessing"
      @click="
        callWithConfirm({
          message: lang.isZh()
            ? `确认要关闭这个标签吗？\n有未保存的修改哦！\n${tab.file.name}`
            : `Are you sure to close this tab?\nThere are unsaved changes!\n${tab.file.name}`,
          when: tabIsModified(tab),
          action: () => stateTabClose(state, tab),
        })
      "
      class="rounded-full hover:bg-stone-300 hover:dark:bg-stone-600"
      :class="{
        'bg-amber-500 text-amber-500 hover:bg-amber-300 dark:bg-amber-300 dark:text-amber-300 hover:dark:bg-amber-600':
          tabIsModified(tab) && !tab.isProcessing,
        'animate-spin': tab.isProcessing,
      }"
    >
      <ArrowPathIcon v-if="tab.isProcessing" class="h-4 w-4" />
      <XMarkIcon v-else class="h-4 w-4" />
    </button>
  </div>
</template>
