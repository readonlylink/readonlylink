<script setup lang="ts">
import { onMounted, ref } from 'vue'
import EditorLoaded from './EditorLoaded.vue'
import EditorLoading from './EditorLoading.vue'
import { State } from './State'

const state = ref<State | undefined>(undefined)

onMounted(() => {
  state.value = {}
})
</script>

<template>
  <EditorLoaded v-if="state" :state="state" />
  <EditorLoading v-else />
</template>
