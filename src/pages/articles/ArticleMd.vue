<script setup lang="ts">
import { watch } from 'vue'
import MdPage from '../../components/md/MdPage.vue'
import { useExtensionStore } from '../../composables/extension-store'
import { stateDocument } from './stateDocument'

const props = defineProps<{ state: any }>()
const extensions = useExtensionStore()

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
    :customComponents="extensions.components"
  />
</template>
