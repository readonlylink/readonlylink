<script setup lang="ts">
import MdNode from '../../MdNode.vue'
import { State } from '../../State'
import MdDefaultAttributes from './MdDefaultAttributes.vue'
import MdDefaultFootnotes from './MdDefaultFootnotes.vue'
import MdDefaultTitle from './MdDefaultTitle.vue'

const props = defineProps<{ state: State }>()

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
      class="my-4"
      v-if="state.document.attributes.title"
      :state
    />

    <MdDefaultAttributes v-if="showAttributes()" class="mb-4" :state />

    <div
      class="my-2"
      v-for="(child, index) in state.document.children"
      :key="index"
    >
      <MdNode :state :node="child" />
    </div>

    <div
      v-if="state.document.footnotes.length > 0"
      class="ml-3 mt-6 border-t-2 border-black pt-4 dark:border-white"
    >
      <MdDefaultFootnotes :state />
    </div>
  </div>
</template>
