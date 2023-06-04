<script setup lang="ts">
import { watch } from 'vue'

type MaybePromise<T> = Promise<T> | T

const props = defineProps<{
  target: any
  action: (target: any) => MaybePromise<void>
  immediate?: boolean
  deep?: boolean
}>()

const target =
  props.target instanceof Function ? props.target : () => props.target

watch(
  target,
  async (target) => {
    await props.action(target)
  },
  {
    immediate: props.immediate,
    deep: props.deep,
  },
)
</script>

<template></template>
