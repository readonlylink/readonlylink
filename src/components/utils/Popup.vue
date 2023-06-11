<script setup lang="ts">
import { onMounted, reactive, ref, watch } from 'vue'

/*

   Always show the toggle, toggle to show the panel.

   - Close on click outside.
   - Close on escape.

*/

type State = {
  open: boolean
}

const state: State = reactive({
  open: false,
})

const toggleElement = ref<HTMLButtonElement | undefined>()
const panelElement = ref<HTMLDivElement | undefined>()

watch(
  () => state.open,
  (value) => {
    if (!value) {
      toggleElement.value?.focus()
    }
  },
)

onMounted(() => {
  document.addEventListener('click', (event) => {
    const target = event.target as HTMLElement

    if (!panelElement.value) return
    if (!toggleElement.value) return

    if (!panelElement.value.contains(target)) {
      // console.log('outside of panel')
      if (!toggleElement.value.contains(target)) {
        // console.log('outside of toggle')
        state.open = false
      }
    }
  })
})
</script>

<template>
  <div
    @keydown.escape.prevent.stop="
      () => {
        state.open = false
        toggleElement?.focus()
      }
    "
  >
    <button ref="toggleElement" @click="state.open = !state.open">
      <slot name="toggle" :popup="state" />
    </button>

    <div ref="panelElement">
      <slot name="panel" :popup="state" />
    </div>
  </div>
</template>
