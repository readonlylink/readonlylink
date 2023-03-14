<script setup>
import { Nodes } from '@xieyuheng/postmark'
import { MdPageState as State } from '../../md-page-state'
import MdNode from '../../MdNode.vue'

defineProps({ state: State, node: Nodes.OrderedItem })
</script>

<template>
  <li class="ml-5 list-decimal marker:text-xl marker:text-stone-400">
    <div class="py-1.5" v-for="(child, index) in node.children" :key="index">
      <MdNode :state="state" :node="child" />
    </div>
  </li>
</template>
