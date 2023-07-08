<script setup lang="ts">
import { createFocusTrap, FocusTrap } from 'focus-trap'
import { nextTick, onMounted, ref, watch } from 'vue'

const props = defineProps<{ open: boolean }>()

const containerElement = ref<HTMLDivElement | undefined>()

const focusTrap = ref<FocusTrap | undefined>()

onMounted(() => {
  if (containerElement.value) {
    focusTrap.value = createFocusTrap(containerElement.value)
  }
})

watch(
  () => props.open,
  async (value) => {
    if (!focusTrap.value) return

    if (value) {
      await nextTick()
      focusTrap.value.activate()
    } else {
      await nextTick()
      focusTrap.value.deactivate()
    }
  },
  { immediate: true },
)
</script>

<template>
  <div ref="containerElement">
    <slot></slot>
  </div>
</template>
