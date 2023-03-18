<script setup lang="ts">
import { XElement } from '@xieyuheng/x-node'

const props = defineProps<{ element: XElement }>()

function useStateOptions() {
  const url = props.element.attributes.href

  return { url }
}
</script>

<template>
  <div>
    {{ useStateOptions() }}
  </div>
</template>
