<script setup lang="ts">
import {
  DocumentPlusIcon,
  DocumentTextIcon,
  FolderIcon,
} from '@heroicons/vue/24/outline'
import Lang from '../../components/lang/Lang.vue'
import { State } from './State'
import { stateDirectoryOpen } from './stateDirectoryOpen'
import { stateFileCreate } from './stateFileCreate'
import { stateFileOpen } from './stateFileOpen'

defineProps<{ state: State }>()
</script>

<template>
  <div
    class="flex h-full flex-col space-y-4 overflow-auto p-4 md:space-y-6 md:p-8"
  >
    <Lang class="text-2xl text-stone-500 md:text-3xl">
      <template #zh>
        <span>欢迎使用</span>
        <br class="block md:hidden" />
        <span><b>只读编辑器</b></span>
      </template>
      <template #en>
        <span>Welcome to use</span>
        <br class="block md:hidden" />
        <span><b>Readonly Editor</b></span>
      </template>
    </Lang>

    <div class="flex flex-col space-y-4">
      <Lang class="text-2xl font-bold md:text-3xl">
        <template #zh>开始</template>
        <template #en>Start</template>
      </Lang>

      <div class="flex flex-col items-start space-y-2 text-xl md:text-2xl">
        <button
          class="flex space-x-2 whitespace-pre hover:underline disabled:text-stone-500 disabled:no-underline"
          @click="stateFileCreate(state)"
        >
          <DocumentPlusIcon class="h-7 w-7" />
          <Lang>
            <template #zh>创建文件</template>
            <template #en>Create File</template>
          </Lang>
        </button>

        <button
          class="flex space-x-2 whitespace-pre hover:underline disabled:text-stone-500 disabled:no-underline"
          @click="stateFileOpen(state)"
        >
          <DocumentTextIcon class="h-7 w-7" />
          <Lang>
            <template #zh>打开文件</template>
            <template #en>Open File</template>
          </Lang>
        </button>

        <button
          class="flex space-x-2 whitespace-pre hover:underline disabled:text-stone-500 disabled:no-underline"
          @click="stateDirectoryOpen(state)"
        >
          <FolderIcon class="h-7 w-7" />
          <Lang>
            <template #zh>打开文件夹</template>
            <template #en>Open Directory</template>
          </Lang>
        </button>
      </div>
    </div>

    <div class="flex flex-col space-y-4">
      <Lang class="text-2xl font-bold md:text-3xl">
        <template #zh>关于</template>
        <template #en>About</template>
      </Lang>

      <div
        class="flex max-w-md flex-col items-start space-y-2 text-xl md:text-2xl"
      >
        <Lang>
          <!-- prettier-ignore -->
          <template #zh>
            <b>只读编辑器</b>是嵌入在浏览器中的文本编辑器。
            它可以编辑纯文本内容，并且用「只读连接」来渲染所编辑的内容。
            如果浏览器支持读写文件的 Web API，那么这个编辑器就也支持读写本地文件。
            目前支持相关 Web API 的浏览器有 Chrome、Edge 和 Opera 等基于 Chromium 的浏览器。
          </template>
          <template #en>
            <b>Readonly Editor</b> is a text editor embedded in the browser. It
            can edit plain text content, and use <em>Readonly.Link</em> to
            render them. If the browser supports the
            <em>File System Access API</em>, this editor will also support
            editing user's local files. Currently Chromium-based browsers (such
            as Chrome, Edge and Opera) support this API.
          </template>
        </Lang>
      </div>
    </div>
  </div>
</template>
