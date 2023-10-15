<script setup lang="ts">
import MdPage from '../../components/md/MdPage.vue'
import { State } from './State'

const props = defineProps<{ state: State }>()
</script>

<template>
  <MdPage v-if="state.document" class="m-6" :document="state.document" />
</template>
