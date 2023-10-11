<script setup lang="ts">
import { ArrowTopRightOnSquareIcon } from '@heroicons/vue/24/outline'
import { useRoute } from 'vue-router'
import Lang from '../../components/lang/Lang.vue'
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import Hyperlink from '../../components/utils/Hyperlink.vue'
import { useGlobalTheme } from '../../models/theme'
import { callWithConfirm } from '../../utils/browser/callWithConfirm'
import { currentOrigin } from '../../utils/currentOrigin'
import EditorToolbarPreview from './EditorToolbarPreview.vue'
import { State } from './State'
import { stateDirectoryOpen } from './stateDirectoryOpen'
import { stateFileCreate } from './stateFileCreate'
import { stateFileOpen } from './stateFileOpen'
import { stateTabFileRemove } from './stateTabFileRemove'
import { tabFileRemoveIsSupported } from './tabFileRemoveIsSupported'
import { tabFileSave } from './tabFileSave'
import { tabIsModified } from './tabIsModified'

defineProps<{ state: State }>()

const route = useRoute()
const origin = currentOrigin()
const theme = useGlobalTheme()
const lang = useGlobalLang()
</script>

<template>
  <div
    class="flex flex-wrap-reverse items-center justify-between bg-stone-200 px-3 py-0.5 dark:bg-stone-600"
  >
    <div class="flex space-x-4 overflow-x-auto pr-4">
      <button
        v-if="!state.currentWorkspace"
        class="whitespace-pre hover:underline disabled:text-stone-500 disabled:no-underline disabled:dark:text-stone-400"
        @click="stateFileCreate(state)"
      >
        <Lang>
          <template #zh>创建</template>
          <template #en>Create</template>
        </Lang>
      </button>

      <button
        v-if="!state.currentWorkspace"
        class="whitespace-pre hover:underline disabled:text-stone-500 disabled:no-underline disabled:dark:text-stone-400"
        @click="stateFileOpen(state)"
      >
        <Lang>
          <template #zh>打开</template>
          <template #en>Open</template>
        </Lang>
      </button>

      <button
        v-if="!state.currentWorkspace && state.tabs.length === 0"
        class="whitespace-pre hover:underline disabled:text-stone-500 disabled:no-underline disabled:dark:text-stone-400"
        @click="stateDirectoryOpen(state)"
      >
        <Lang>
          <template #zh>打开文件夹</template>
          <template #en>Open Directory</template>
        </Lang>
      </button>

      <button
        v-if="state.currentTab"
        class="whitespace-pre hover:underline disabled:text-stone-500 disabled:no-underline disabled:dark:text-stone-400"
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
        class="whitespace-pre hover:underline disabled:text-stone-500 disabled:no-underline disabled:dark:text-stone-400"
        :disabled="!state.currentTab || state.currentTab.isProcessing"
        @click="
          () => {
            if (!state.currentTab) {
              return
            }

            callWithConfirm({
              message: lang.isZh()
                ? `确认要删除这个文件吗？\n${
                    state.currentTab.node?.relativePath ||
                    state.currentTab.file.name
                  }`
                : `Are you sure to remove this file?\n${
                    state.currentTab.node?.relativePath ||
                    state.currentTab.file.name
                  }`,
              action: () =>
                state.currentTab && stateTabFileRemove(state, state.currentTab),
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
      <EditorToolbarPreview :state="state" />

      <button
        class="flex items-center whitespace-nowrap hover:text-black hover:underline dark:hover:text-white"
        @click="lang.isZh() ? (lang.tag = 'en') : (lang.tag = 'zh')"
      >
        <Lang>
          <template #zh>中文/English</template>
          <template #en>English/中文</template>
        </Lang>
      </button>

      <button
        class="flex items-center whitespace-nowrap hover:underline"
        @click="
          theme.name !== 'dark' ? (theme.name = 'dark') : (theme.name = 'light')
        "
      >
        <Lang>
          <template #zh>
            <span v-if="theme.name === 'dark'">深色/浅色</span>
            <span v-else>浅色/深色</span>
          </template>
          <template #en>
            <span v-if="theme.name === 'dark'">Dark/Light</span>
            <span v-else>Light/Dark</span>
          </template>
        </Lang>
      </button>

      <Hyperlink
        class="flex items-center whitespace-pre hover:underline disabled:text-stone-500 disabled:no-underline disabled:dark:text-stone-400"
        href="/"
        target="_blank"
      >
        <Lang>
          <template #zh>只读链接</template>
          <template #en>Readonly.Link</template>
        </Lang>

        <ArrowTopRightOnSquareIcon class="ml-0.5 h-4 w-4" />
      </Hyperlink>
    </div>
  </div>
</template>
