<script setup lang="ts">
import { Nodes } from '@xieyuheng/x-markdown'
import { onMounted } from 'vue'
import { safeHtml } from '../../../../utils/safeHtml'
import { State } from '../../State'

const props = defineProps<{
  state: State
  node: Nodes.HtmlInline
}>()

const who = 'MdHtmlInline'

onMounted(() => console.log({ who, node: props.node }))
</script>

<template>
  <div v-html="safeHtml(node.text)"></div>
</template>
