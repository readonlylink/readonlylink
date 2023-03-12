<script setup lang="ts">
import { basename } from 'path-browserify'
import { ref, watch } from 'vue'
import Lang from '../../components/Lang.vue'
import { downloadBlob } from '../../utils/downloadBlob'
import ManagerFileLoading from './ManagerFileLoading.vue'
import { State } from './State'
import { stateFetchFile } from './stateFetchFile'
import { FileMetadata, stateFetchFileMetadata } from './stateFetchFileMetadata'
import { stateStatusOk, stateStatusRunning } from './stateStatus'

const props = defineProps<{
  state: State
  path: string
}>()

const blob = ref<Blob | undefined>(undefined)
const metadata = ref<FileMetadata | undefined>(undefined)
const isFetchingFile = ref(false)

watch(
  () => props.path,
  async (path) => {
    metadata.value = await stateFetchFileMetadata(props.state, path)
  },
  {
    immediate: true,
  },
)

async function download() {
  isFetchingFile.value = true

  stateStatusRunning(props.state, {
    who: 'download',
    message: 'fetching file',
    data: {
      path: props.path,
    },
  })

  blob.value = await stateFetchFile(props.state, props.path)
  if (blob.value) {
    downloadBlob(blob.value, basename(props.path))
    stateStatusOk(props.state, {
      who: 'download',
      message: 'file fetched',
      data: {
        path: props.path,
      },
    })
  }

  isFetchingFile.value = false
}
</script>

<template>
  <div class="flex h-full w-full flex-col overflow-auto border-r border-black">
    <ManagerFileLoading v-if="metadata === undefined" :state="state" />
    <div v-else class="flex h-full items-center justify-center">
      <div
        class="mx-6 flex w-full max-w-lg flex-col items-start space-y-2 overflow-x-auto border border-black p-3"
      >
        <div>
          <div class="font-bold">
            <Lang>
              <template #zh> 文件 </template>
              <template #en> file </template>
            </Lang>
          </div>
          <div>{{ path }}</div>
        </div>

        <div>
          <div class="font-bold">
            <Lang>
              <template #zh> 大小 </template>
              <template #en> size </template>
            </Lang>
          </div>
          <div>{{ metadata.size }} bytes</div>
        </div>

        <div class="w-full border-t border-black py-0.5"></div>

        <button
          class="border border-black px-3 py-2 hover:bg-stone-100 disabled:bg-yellow-100"
          :disabled="isFetchingFile"
          @click="download()"
        >
          <Lang>
            <template #zh> 下载 </template>
            <template #en> Download </template>
          </Lang>
        </button>
      </div>
    </div>
  </div>
</template>
