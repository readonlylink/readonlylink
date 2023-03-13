<template>
  <pre><code v-html="safeHtml(highlightedHtml)"></code></pre>
</template>

<script setup>
import hljs from 'highlight.js/lib/common'
import { computed } from 'vue'
import { safeHtml } from '../../ut/safe-html'

const props = defineProps({ lang: String, text: String })

const highlightedHtml = computed(() => {
  const result = hljs.highlightAuto(props.text)
  return result.value
})
</script>
