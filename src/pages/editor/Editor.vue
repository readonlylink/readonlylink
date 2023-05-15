<script setup lang="ts">
import { onMounted, reactive } from 'vue'
import EditorLoaded from './EditorLoaded.vue'
import { createState } from './createState'
import { stateLoad } from './stateLoad'

const state = reactive(createState())

onMounted(async () => {
  stateLoad(state)
})
</script>

<template>
  <EditorLoaded v-if="state" :state="state" />
</template>
