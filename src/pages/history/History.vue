<script setup lang="ts">
import { onMounted, ref } from 'vue'
import HistoryLoaded from './HistoryLoaded.vue'
import HistoryLoading from './HistoryLoading.vue'
import { State } from './State'
import { stateLoad } from './stateLoad'

const state = ref<State | undefined>(undefined)

const options = {}

onMounted(async () => {
  state.value = await stateLoad(options)
})
</script>

<template>
  <HistoryLoaded v-if="state" :state="state" />
  <HistoryLoading v-else options="options" />
</template>
