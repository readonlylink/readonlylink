<template>
  <div ref="root" class="relative">
    <div
      @click.prevent="show = !show"
      aria-haspopup="true"
      :aria-expanded="show"
    >
      <slot name="trigger"></slot>
    </div>

    <div
      v-show="show"
      class="absolute z-40"
      :class="{
        'right-0': align === 'right',
        'left-0': align === 'left',
      }"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue"

defineProps({ align: String })

const root = ref(null)
const show = ref(false)

watch(show, () => {
  if (show.value) {
    document.addEventListener("click", clickAway)
  }
})

function clickAway(event) {
  if (!inside(root.value, event.target)) {
    document.removeEventListener("click", clickAway)
    show.value = false
  }
}

function inside(container, target) {
  if (!target) return false
  if (target === container) return true
  return inside(container, target.parentElement)
}
</script>
