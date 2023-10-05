<script setup lang="ts">
import hljs from 'highlight.js/lib/common'
import { computed, onMounted } from 'vue'
import { useGlobalTheme } from '../../models/theme'
import { safeHtml } from '../../utils/safeHtml'

const props = defineProps<{ text: string }>()

const theme = useGlobalTheme()

const highlightedHtml = computed(() => {
  const result = hljs.highlightAuto(props.text)
  return result.value
})

onMounted(async () => {
  if (theme.name === 'dark') {
    await import('highlight.js/styles/github-dark.css')
  } else {
    await import('highlight.js/styles/github.css')
  }
})
</script>

<template>
  <pre v-html="safeHtml(highlightedHtml)"></pre>
</template>
