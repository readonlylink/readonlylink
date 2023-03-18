<script setup>
import { MdPageState as State } from '../../MdPageState'

import MdNode from '../../MdNode.vue'
import MdDefaultAttributes from './MdDefaultAttributes.vue'
import MdDefaultTitle from './MdDefaultTitle.vue'

const props = defineProps({ state: State })

const names = [
  'venue',
  'author',
  'authors',
  'translator',
  'translators',
  'keywords',
  'year',
  'date',
]

function showAttributes() {
  const keys = Object.keys(props.state.document.attributes)
  return names.some((name) => keys.includes(name))
}
</script>

<template>
  <div class="flex flex-col text-xl">
    <MdDefaultTitle
      class="my-6"
      v-if="state.document.attributes.title"
      :state="state"
    />

    <MdDefaultAttributes
      v-if="showAttributes()"
      class="mb-6"
      :attributes="state.document.attributes"
    />

    <div
      class="my-2 font-serif"
      v-for="(child, index) in state.document.children"
      :key="index"
    >
      <MdNode :state="state" :node="child" />
    </div>
  </div>
</template>
