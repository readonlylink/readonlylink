<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import EditorLoaded from './EditorLoaded.vue'
import { State } from './State'
import { stateLoad } from './stateLoad'

const state = ref<State | undefined>()

onMounted(async () => {
  state.value = reactive(await stateLoad())
})
</script>

<template>
  <EditorLoaded v-if="state" :state="state" />
</template>
