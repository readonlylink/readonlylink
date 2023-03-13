<script setup>
import { Nodes } from '@xieyuheng/postmark'
import { MdPageState as State } from '../../md-page-state'
import MdNode from '../../MdNode.vue'

defineProps({ state: State, node: Nodes.Table })
</script>

<template>
  <table class="my-4 w-full">
    <thead>
      <tr>
        <th
          v-for="(children, index) in node.header"
          :key="index"
          class="border-2 border-gray-300 px-2 py-1 font-bold"
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
      <tr v-for="(row, index) in node.rows" :key="index">
        <td
          v-for="(data, index) in row"
          :key="index"
          class="border-2 border-gray-300 px-2 py-1"
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
