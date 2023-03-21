<script setup lang="ts">
import { Nodes } from '@xieyuheng/postmark'
import MdPage from '../../components/md/MdPage.vue'
import ManualPageEnding from './ManualPageEnding.vue'
import { State } from './State'

defineProps<{
  state: State
  document: Nodes.Document
}>()
</script>

<template>
  <div class="flex max-w-4xl flex-col px-6 md:px-10 xl:mx-auto">
    <MdPage :key="state.path" :document="document" />
    <ManualPageEnding class="py-6" :state="state" />
  </div>
</template>
