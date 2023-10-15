<script setup lang="ts">
import { onMounted, reactive } from 'vue'
import MdPage from '../../components/md/MdPage.vue'
import { State } from './State'
import { stateListen } from './stateListen'

const state = reactive<State>({})

stateListen(state)

onMounted(() => {
  window.parent.postMessage({ message: 'mounted' }, '*')
})
</script>

<template>
  <div class="overflow-auto bg-white text-black dark:bg-black dark:text-white">
    <div class="mx-auto max-w-3xl">
      <MdPage v-if="state.document" :document="state.document" />
      <div v-else>Waiting for message...</div>
    </div>
  </div>
</template>
