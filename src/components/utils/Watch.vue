<script setup lang="ts">
import { watch } from 'vue'

type MaybePromise<T> = Promise<T> | T

const props = defineProps<{
  value: any
  effect: (value: any) => MaybePromise<void>
  immediate?: boolean
  deep?: boolean
}>()

const target = props.value instanceof Function ? props.value : () => props.value

watch(
  target,
  async (value) => {
    await props.effect(value)
  },
  {
    immediate: props.immediate,
    deep: props.deep,
  },
)
</script>

<template></template>
