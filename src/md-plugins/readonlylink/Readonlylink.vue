<script setup lang="ts">
import { XElement } from '@xieyuheng/x-node'

const props = defineProps<{ element: XElement }>()

const href = props.element.attributes.href
</script>

<template>
  <div>
    {{ element }}
  </div>
</template>
