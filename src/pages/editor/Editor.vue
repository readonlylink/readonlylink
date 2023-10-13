<script setup lang="ts">
import { onMounted, reactive } from 'vue'
import EditorLoaded from './EditorLoaded.vue'
import { stateCreate } from './stateCreate'
import { stateLoad } from './stateLoad'

const state = reactive(stateCreate())

onMounted(async () => {
  stateLoad(state)
})
</script>

<template>
  <EditorLoaded v-if="state" :state="state" />
</template>
