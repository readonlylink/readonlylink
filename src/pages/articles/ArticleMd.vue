<script setup lang="ts">
import { watch } from 'vue'
import MdPage from '../../components/md/MdPage.vue'
import { useExtensionStore } from '../../composables/extension-store'

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
    :document="state.document"
    :customComponents="extensions.components"
  />
</template>
