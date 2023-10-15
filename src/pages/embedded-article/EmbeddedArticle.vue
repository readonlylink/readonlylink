<script setup lang="ts">
import { reactive } from 'vue'
import MdPage from '../../components/md/MdPage.vue'
import { State } from './State'
import { stateListen } from './stateListen'

const state = reactive<State>({})

stateListen(state)
</script>

<template>
  <div class="overflow-auto bg-white text-black dark:bg-black dark:text-white">
    <div class="mx-auto max-w-3xl">
      <MdPage v-if="state.document" class="m-6" :document="state.document" />
    </div>
  </div>
</template>
