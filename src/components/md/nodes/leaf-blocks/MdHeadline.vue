<script setup>
import { Nodes } from '@xieyuheng/postmark'
import { computed, nextTick, ref, watch } from 'vue'
import * as ut from '../../../../ut'
import { MdPageState as State } from '../../md-page-state'

import MdNode from '../../MdNode.vue'

const props = defineProps({ state: State, node: Nodes.Headline })

const headlineElement = ref(null)

const headlineId = computed(() => {
  const text = props.node.children.map((child) => child.format()).join('')
  return ut.slug(text)
})

const hovered = ref(false)

function jumpToHeadline() {
  location.hash = '#' + headlineId.value
}

watch(
  () => location.hash,
  () => scrollForHash(location.hash),
  { immediate: true },
)

async function scrollForHash(hash) {
  await nextTick()
  await nextTick()
  await nextTick()

  const id = hash.slice(1)
  if (id === headlineId.value) {
    scrollIntoView()
  }
}

function scrollIntoView() {
  if (headlineElement.value) {
    headlineElement.value.scrollIntoView({
      behavior: 'smooth',
    })
  }
}
</script>

<template>
  <a
    ref="headlineElement"
    :href="'#' + headlineId"
    :id="headlineId"
    class="-ml-4 flex items-baseline font-sans"
    @click.prevent="jumpToHeadline()"
    @mouseover="hovered = true"
    @mouseleave="hovered = false"
    :class="{
      'pt-4 pb-2': node.level === 1,
      'pt-3 pb-2': node.level === 2,
      'pt-2 pb-2': node.level === 3 || node.level === 4 || node.level === 5,
      'pt-1 pb-2': node.level === 6,
    }"
  >
    <div
      class="flex w-4 justify-end pr-0.5 font-bold"
      :class="[
        hovered ? 'text-gray-400' : 'text-white',
        {
          'text-3xl md:text-4xl': node.level === 1,
          'text-2xl md:text-3xl': node.level === 2,
          'text-xl md:text-2xl': node.level === 3,
          'text-xl md:text-xl': node.level === 4,
          'md:text-xl': node.level === 5 || node.level === 6,
        },
      ]"
    >
      #
    </div>

    <div>
      <MdNode
        class="inline font-bold"
        :class="{
          'text-3xl md:text-4xl': node.level === 1,
          'text-2xl md:text-3xl': node.level === 2,
          'text-xl md:text-2xl': node.level === 3,
          'text-xl md:text-xl': node.level === 4,
          'md:text-xl': node.level === 5 || node.level === 6,
        }"
        v-for="(child, index) in node.children"
        :key="index"
        :state="state"
        :node="child"
      />
    </div>
  </a>
</template>
