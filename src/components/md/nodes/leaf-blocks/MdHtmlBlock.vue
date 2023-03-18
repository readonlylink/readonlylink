<script setup lang="ts">
import { Nodes } from '@xieyuheng/postmark'
import { onMounted } from 'vue'
import { safeHtml } from '../../../../utils/safeHtml'
import { MdPageState as State } from '../../MdPageState'

const props = defineProps<{
  state: State
  node: Nodes.HtmlBlock
}>()

const who = 'MdHtmlBlock'

onMounted(() => console.log({ who, node: props.node }))
</script>

<template>
  <div v-html="safeHtml(node.text)"></div>
</template>
