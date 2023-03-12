<template>
  <pre><code v-html="safeHtml(highlightedHtml)"></code></pre>
</template>

<script setup>
import { computed } from "vue"
import hljs from "highlight.js/lib/common"
import { safeHtml } from "../../ut/safe-html"

const props = defineProps({ lang: String, text: String })

const highlightedHtml = computed(() => {
  const result = hljs.highlightAuto(props.text)
  return result.value
})
</script>
