<script setup lang="ts">
import MdNode from '../../MdNode.vue'
import { State } from '../../State'

const props = defineProps<{ state: State }>()
</script>

<template>
  <div class="flex flex-col space-y-3">
    <div
      v-for="footnote of state.document.footnotes"
      :id="`-footnote-${footnote.id}`"
      :key="footnote.id"
      class="flex flex-col sm:flex-row"
    >
      <a
        class="pb-0.5 pr-2 text-blue-600 hover:underline sm:pb-0"
        :href="`#-footnote-ref-${footnote.id}`"
      >
        [^{{ footnote.name }}]
      </a>

      <div class="pl-4 sm:pl-0">
        <MdNode
          v-for="(node, index) in footnote.nodes"
          :key="index"
          :state="state"
          :node="node"
        />
      </div>
    </div>
  </div>
</template>
