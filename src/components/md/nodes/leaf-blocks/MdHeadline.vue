<script setup lang="ts">
import { formatNode, Nodes } from '@xieyuheng/x-markdown'
import { computed, nextTick, ref, watch } from 'vue'
import { slug } from '../../../../utils/slug'
import MdNode from '../../MdNode.vue'
import { State } from '../../State'

const props = defineProps<{
  state: State
  node: Nodes.Headline
}>()

const headlineElement = ref<Element | null>(null)

const headlineId = computed(() => {
  const text = props.node.children.map(formatNode).join('')
  return slug(text)
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

async function scrollForHash(hash: string) {
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
    class="text-balance -ml-4 flex items-baseline"
    @click.prevent="jumpToHeadline()"
    @mouseover="hovered = true"
    @mouseleave="hovered = false"
    :class="{
      'pb-2 pt-4': node.level === 1,
      'pb-2 pt-3': node.level === 2,
      'pb-2 pt-2': node.level === 3 || node.level === 4 || node.level === 5,
      'pb-2 pt-1': node.level === 6,
    }"
  >
    <div
      class="flex w-4 justify-end pr-0.5 font-bold"
      :class="[
        hovered ? 'text-stone-400' : 'text-white dark:text-black',
        {
          'text-3xl sm:text-4xl': node.level === 1,
          'text-2xl sm:text-3xl': node.level === 2,
          'text-xl sm:text-2xl': node.level === 3,
          'text-xl sm:text-xl': node.level === 4,
          'sm:text-xl': node.level === 5 || node.level === 6,
        },
      ]"
    >
      #
    </div>

    <div>
      <MdNode
        class="inline font-bold"
        :class="{
          'text-3xl sm:text-4xl': node.level === 1,
          'text-2xl sm:text-3xl': node.level === 2,
          'text-xl sm:text-2xl': node.level === 3,
          'text-xl sm:text-xl': node.level === 4,
          'sm:text-xl': node.level === 5 || node.level === 6,
        }"
        v-for="(child, index) in node.children"
        :key="index"
        :state="state"
        :node="child"
      />
    </div>
  </a>
</template>
