<script setup lang="ts">
import { computed, watch } from 'vue'
import MdPage from '../../components/md/MdPage.vue'
import { State } from './State'

const props = defineProps<{ state: State }>()

watch(
  () => props.state.url,
  () => {
    window.scrollTo(0, 0)
  },
)

const url = computed(() => new URL(props.state.url))
</script>

<template>
  <MdPage class="m-6" :document="state.document" :url="url" />
</template>
