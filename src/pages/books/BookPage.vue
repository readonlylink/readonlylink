<script setup lang="ts">
import { Nodes } from '@xieyuheng/postmark'
import { watch } from 'vue'
import MdPage from '../../components/md/MdPage.vue'
import BookPageNavbar from './BookPageNavbar.vue'
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
  <div class="flex h-screen flex-col px-6">
    <BookPageNavbar class="py-6" :state="state" />

    <MdPage
      :key="state.path"
      :document="document"
      :customComponents="state.extensions.components"
    />

    <BookPageNavbar class="py-6" :state="state" />
  </div>
</template>
