<script setup lang="ts">
import hljs from 'highlight.js/lib/common'
import { computed } from 'vue'
import { safeHtml } from '../../utils/safeHtml'

const props = defineProps<{ text: string }>()

const highlightedHtml = computed(() => {
  const result = hljs.highlightAuto(props.text)
  return result.value
})
</script>

<template>
  <pre><code v-html="safeHtml(highlightedHtml)"></code></pre>
</template>
