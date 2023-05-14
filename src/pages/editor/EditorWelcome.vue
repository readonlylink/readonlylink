<script setup lang="ts">
import Lang from '../../components/lang/Lang.vue'
import EditorWelcomeStart from './EditorWelcomeStart.vue'
import { State } from './State'
import { stateOpenFileHandle } from './stateFileOpen'

defineProps<{ state: State }>()
</script>

<template>
  <div class="flex h-full w-full justify-between overflow-auto">
    <div
      class="flex h-full shrink grow basis-0 flex-col space-y-4 overflow-auto p-4 md:space-y-6 md:p-8"
    >
      <Lang class="text-2xl text-stone-500 md:text-3xl">
        <template #zh>
          <span>欢迎使用</span>
          <br class="block md:hidden" />
          <span><b>只读编辑器</b></span>
        </template>
        <template #en>
          <span> Welcome to use </span>
          <br class="block md:hidden" />
          <span><b> Readonly Editor </b></span>
        </template>
      </Lang>

      <EditorWelcomeStart :state="state" />

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
              <b>Readonly Editor</b> is a text editor embedded in the browser.
              It can edit plain text content, and use <em>Readonly.Link</em> to
              render them. If the browser supports the
              <em>File System Access API</em>, this editor will also support
              editing user's local files. Currently Chromium-based browsers
              (such as Chrome, Edge and Opera) support this API.
            </template>
          </Lang>
        </div>
      </div>
    </div>

    <div
      class="flex h-full shrink grow basis-0 flex-col space-y-4 overflow-auto p-4 md:space-y-6 md:p-8"
    >
      <div
        v-for="(fileHandle, index) of state.recentlyOpened.fileHandles"
        :key="index"
      >
        <button @click="stateOpenFileHandle(state, fileHandle)">
          {{ fileHandle.name }}
        </button>
      </div>
    </div>
  </div>
</template>
