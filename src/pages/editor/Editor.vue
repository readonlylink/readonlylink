<script setup lang="ts">
import { State } from './State'

defineProps<{ state: State }>()

async function open() {
  const [fileHandle] = await window.showOpenFilePicker()
  const file = await fileHandle.getFile()
  const text = await file.text()
  console.log(text)
}
</script>

<template>
  <div class="px-3 pt-3">
    <button @click="open()">Open</button>
  </div>
</template>
