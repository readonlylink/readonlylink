<script setup>
import { Nodes } from '@xieyuheng/postmark'
import { safeHtml } from '../../../../utils/safeHtml'
import { MdPageState as State } from '../../md-page-state'

defineProps({ state: State, node: Nodes.HtmlBlock })
</script>

<template>
  <div v-html="safeHtml(node.text)"></div>
</template>
