<template>
  <div v-html="safeHtml(node.text)"></div>
</template>

<script setup>
import { Nodes } from "@xieyuheng/postmark"
import { MdPageState as State } from "../../md-page-state"
import { safeHtml } from "../../../../ut/safe-html"

defineProps({ state: State, node: Nodes.HtmlBlock })
</script>
