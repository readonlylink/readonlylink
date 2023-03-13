<script setup lang="ts">
import { watch } from 'vue'
import MdPage from '../../components/md/MdPage.vue'
import { useExtensionStore } from '../../composables/extension-store'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import { State } from './State'

const props = defineProps<{ state: State }>()
const extensions = useExtensionStore()

watch(
  () => props.state.link.path,
  () => {
    window.scrollTo(0, 0)
  },
)
</script>

<template>
  <PageLayout>
    <MdPage
      class="m-6"
      :document="state.document"
      :customComponents="extensions.components"
    />
  </PageLayout>
</template>
