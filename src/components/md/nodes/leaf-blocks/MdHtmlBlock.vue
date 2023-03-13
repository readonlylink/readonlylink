<template>
  <div v-html="safeHtml(node.text)"></div>
</template>

<script setup>
import { Nodes } from '@xieyuheng/postmark'
import { safeHtml } from '../../../../ut/safe-html'
import { MdPageState as State } from '../../md-page-state'

defineProps({ state: State, node: Nodes.HtmlBlock })
</script>
