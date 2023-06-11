<script setup lang="ts">
import { onMounted, reactive } from 'vue'

type MaybePromise<T> = Promise<T> | T

const props = defineProps<{
  action: () => MaybePromise<any>
}>()

const state = reactive({
  returnValue: undefined,
})

onMounted(async () => {
  state.returnValue = await props.action()
})
</script>

<template>
  <slot :returnValue="state.returnValue" />
</template>
