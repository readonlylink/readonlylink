<script setup lang="ts">
import { onMounted, ref } from 'vue'
import EditorLoaded from './EditorLoaded.vue'
import { State } from './State'
import { loadState } from './loadState'

const state = ref<State | undefined>(undefined)

onMounted(async () => {
  state.value = await loadState({})
})
</script>

<template>
  <EditorLoaded v-if="state" :state="state" />
</template>
