<script setup lang="ts">
import { ref } from 'vue'
import HistoryLoaded from './HistoryLoaded.vue'
import HistoryLoading from './HistoryLoading.vue'
import { State } from './State'

const state = ref<State | undefined>(undefined)
</script>

<template>
  <HistoryLoaded v-if="state" :state="state" />
  <HistoryLoading v-else />
</template>
