<script setup lang="ts">
import { watch } from 'vue'
import MdPage from '../../components/md/MdPage.vue'
import { State } from './State'
import { stateDocument } from './stateDocument'

const props = defineProps<{ state: State }>()

watch(
  () => props.state.url,
  () => {
    window.scrollTo(0, 0)
  },
)
</script>

<template>
  <MdPage
    class="m-6"
    :document="stateDocument(state)"
    :customComponents="state.extensions.components"
  />
</template>
