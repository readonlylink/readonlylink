<script setup lang="ts">
import { onMounted, ref } from 'vue'
import HistoryLoaded from './HistoryLoaded.vue'
import HistoryLoading from './HistoryLoading.vue'
import { State } from './State'
import { loadState } from './loadState'

const state = ref<State | undefined>(undefined)

const options = {}

onMounted(async () => {
  state.value = await loadState(options)
})
</script>

<template>
  <HistoryLoaded v-if="state" :state="state" />
  <HistoryLoading v-else options="options" />
</template>
