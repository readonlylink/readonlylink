<script setup lang="ts">
import { onMounted, reactive } from 'vue'
import EditorModeline from './EditorModeline.vue'
import EditorTextarea from './EditorTextarea.vue'
import { State } from './State'
import { Tab } from './Tab'

const props = defineProps<{
  state: State
  currentFile: File
}>()

const tab: Tab = reactive({
  text: '',
})

onMounted(async () => {
  tab.text = await props.currentFile.text()
})
</script>

<template>
  <div class="flex h-full flex-col">
    <EditorTextarea :state="state" :tab="tab" />
    <EditorModeline :state="state" />
  </div>
</template>
