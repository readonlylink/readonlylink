<script setup lang="ts">
import { Nodes } from '@xieyuheng/postmark'
import { watch } from 'vue'
import MdPage from '../../components/md/MdPage.vue'
import ManualPageEnding from './ManualPageEnding.vue'
import { State } from './State'

const props = defineProps<{
  state: State
  document: Nodes.Document
}>()

watch(
  () => props.state.path,
  () => {
    window.scrollTo(0, 0)
  },
)
</script>

<template>
  <div class="flex max-w-4xl flex-col px-6 md:px-10 xl:mx-auto">
    <MdPage :key="state.path" :document="document" />
    <ManualPageEnding class="py-6" :state="state" />
  </div>
</template>
