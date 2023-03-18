<script setup lang="ts">
import { computed } from 'vue'
import { State } from '../../State'

const props = defineProps<{ state: State }>()

const title = computed(() => props.state.document.attributes.title)
const subtitle = computed(() => props.state.document.attributes.subtitle)
</script>

<template>
  <div class="flex flex-col font-sans">
    <h1 class="text-4xl font-bold leading-tight md:text-5xl md:leading-tight">
      {{ title }}
    </h1>

    <h1
      v-if="subtitle"
      class="py-1 text-2xl leading-tight md:text-3xl md:leading-tight"
    >
      {{ subtitle }}
    </h1>
  </div>
</template>
