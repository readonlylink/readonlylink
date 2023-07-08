<script setup lang="ts">
import { onMounted, reactive, ref, watch } from 'vue'

/*

   Always show the button, click the button to toggle the panel.

   - Close on click outside.

   - Close on escape.

*/

const state = reactive({
  open: false,
})

const buttonElement = ref<HTMLButtonElement | undefined>()
const panelElement = ref<HTMLDivElement | undefined>()

watch(
  () => state.open,
  (value) => {
    if (!value) {
      buttonElement.value?.focus()
    }
  },
)

onMounted(() => {
  document.addEventListener('click', (event) => {
    const target = event.target as HTMLElement

    if (!panelElement.value) return
    if (!buttonElement.value) return

    if (!panelElement.value.contains(target)) {
      // console.log('outside of panel')
      if (!buttonElement.value.contains(target)) {
        // console.log('outside of button')
        state.open = false
      }
    }
  })
})
</script>

<template>
  <div @keydown.escape.prevent.stop="state.open = false">
    <button ref="buttonElement" type="button" @click="state.open = !state.open">
      <slot name="button" :popup="state" />
    </button>

    <div ref="panelElement">
      <slot name="panel" :popup="state" />
    </div>
  </div>
</template>
