<script setup lang="ts">
import Lang from '../../components/lang/Lang.vue'
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import Hyperlink from '../../components/utils/Hyperlink.vue'
import { callWithConfirm } from '../../utils/browser/callWithConfirm'
import EditorToolbarLang from './EditorToolbarLang.vue'
import { State } from './State'
import { stateDirectoryOpen } from './stateDirectoryOpen'
import { stateFileCreate } from './stateFileCreate'
import { stateFileOpen } from './stateFileOpen'
import { stateFileRemove } from './stateFileRemove'
import { tabFileRemoveIsSupported } from './tabFileRemoveIsSupported'
import { tabFileSave } from './tabFileSave'
import { tabIsModified } from './tabIsModified'

defineProps<{ state: State }>()

const lang = useGlobalLang()
</script>

<template>
  <div
    class="flex flex-wrap-reverse items-center justify-between bg-stone-200 px-3 py-0.5"
  >
    <div class="flex space-x-4 overflow-x-auto pr-4">
      <button
        class="whitespace-pre hover:underline disabled:text-stone-500 disabled:no-underline"
        @click="stateFileCreate(state)"
      >
        <Lang>
          <template #zh>创建</template>
          <template #en>Create</template>
        </Lang>
      </button>

      <button
        class="whitespace-pre hover:underline disabled:text-stone-500 disabled:no-underline"
        @click="stateFileOpen(state)"
      >
        <Lang>
          <template #zh>打开</template>
          <template #en>Open</template>
        </Lang>
      </button>

      <button
        class="whitespace-pre hover:underline disabled:text-stone-500 disabled:no-underline"
        @click="stateDirectoryOpen(state)"
      >
        <Lang>
          <template #zh>打开文件夹</template>
          <template #en>Open Directory</template>
        </Lang>
      </button>

      <button
        v-if="state.currentTab"
        class="whitespace-pre hover:underline disabled:text-stone-500 disabled:no-underline"
        :disabled="
          state.currentTab.isProcessing || !tabIsModified(state.currentTab)
        "
        @click="state.currentTab && tabFileSave(state.currentTab, state)"
      >
        <Lang>
          <template #zh>保存</template>
          <template #en>Save</template>
        </Lang>
      </button>

      <button
        v-if="state.currentTab && tabFileRemoveIsSupported(state.currentTab)"
        class="whitespace-pre hover:underline disabled:text-stone-500 disabled:no-underline"
        :disabled="!state.currentTab || state.currentTab.isProcessing"
        @click="
          () => {
            if (!state.currentTab) {
              return
            }

            callWithConfirm(() => stateFileRemove(state), {
              message: lang.isZh()
                ? `确认要删除这个文件吗？\n${
                    state.currentTab.relativePath || state.currentTab.file.name
                  }`
                : `Are you sure to remove this file?\n${
                    state.currentTab.relativePath || state.currentTab.file.name
                  }`,
            })
          }
        "
      >
        <Lang>
          <template #zh>删除</template>
          <template #en>Remove</template>
        </Lang>
      </button>
    </div>

    <div class="flex space-x-4">
      <Hyperlink
        class="whitespace-pre hover:underline disabled:text-stone-500 disabled:no-underline"
        href="/"
        target="_blank"
      >
        <Lang>
          <template #zh>主页</template>
          <template #en>Home</template>
        </Lang>
      </Hyperlink>

      <EditorToolbarLang class="z-20" :state="state" />
    </div>
  </div>
</template>
