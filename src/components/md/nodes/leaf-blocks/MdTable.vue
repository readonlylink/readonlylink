<script setup lang="ts">
import { Nodes } from '@xieyuheng/x-markdown'
import MdNode from '../../MdNode.vue'
import { State } from '../../State'

defineProps<{
  state: State
  node: Nodes.Table
}>()
</script>

<template>
  <table class="my-4 w-full">
    <thead>
      <tr>
        <th
          v-for="(children, index) in node.head"
          :key="index"
          class="border-2 border-stone-300 px-2 py-1 font-bold"
          :align="node.alignments[index] || 'left'"
        >
          <MdNode
            v-for="(child, index) in children"
            :key="index"
            :state="state"
            :node="child"
          />
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, index) in node.body" :key="index">
        <td
          v-for="(data, index) in row"
          :key="index"
          class="border-2 border-stone-300 px-2 py-1"
          :align="node.alignments[index] || 'left'"
        >
          <MdNode
            v-for="(child, index) in data"
            :key="index"
            :state="state"
            :node="child"
          />
        </td>
      </tr>
    </tbody>
  </table>
</template>
