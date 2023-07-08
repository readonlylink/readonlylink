<script setup lang="ts">
import { onMounted, reactive, ref, watch } from 'vue'
import { isVisible } from '../../utils/browser/isVisible'
import { onVisible } from '../../utils/browser/onVisible'

/*

   List of entries, load more when scroll to the bottom.

*/

const props = defineProps<{
  entries: Array<any>
  chunkSize: number
  eagerLoadAll?: boolean
}>()

const bottomElement = ref<HTMLElement | undefined>(undefined)

const shownEntries: Array<any> = reactive([])

function showMoreEntries() {
  shownEntries.push(
    ...props.entries.slice(
      shownEntries.length,
      shownEntries.length + props.chunkSize,
    ),
  )
}

function showAllEntries() {
  while (shownEntries.pop()) {}

  while (shownEntries.length < props.entries.length) {
    showMoreEntries()
  }
}

function showNewEntries(newEntries: Array<any>) {
  while (shownEntries.pop()) {}

  shownEntries.push(...newEntries)
}

onMounted(() => {
  if (bottomElement.value) {
    onVisible(bottomElement.value, () => showMoreEntries())

    if (isVisible(bottomElement.value)) {
      showMoreEntries()
    }
  }
})

watch(
  () => props.eagerLoadAll,
  (value) => {
    if (value) {
      console.log({
        who: 'ListLazyScroll',
        changedProp: 'eagerLoadAll',
        message: 'showAllEntries',
      })

      showAllEntries()
    }
  },
  { immediate: true },
)

// No deep watch here, need to pass new array
// to make the following effect.

watch(
  () => props.entries,
  () => {
    if (props.eagerLoadAll) {
      console.log({
        who: 'ListLazyScroll',
        changedProp: 'entries',
        message: 'eagerLoadAll is true, showAllEntries',
      })

      showAllEntries()
    } else {
      console.log({
        who: 'ListLazyScroll',
        changedProp: 'entries',
        message: 'update shownEntries, keep the length',
      })

      showNewEntries(props.entries.slice(0, shownEntries.length))
    }
  },
)
</script>

<template>
  <ul>
    <li v-for="(entry, index) of shownEntries" :key="index">
      <slot name="entry" :entry="entry" />
    </li>

    <li ref="bottomElement">
      <slot name="bottom" :isFinished="entries.length === shownEntries.length">
        <div class="py-px"></div>
      </slot>
    </li>
  </ul>
</template>
