<script setup lang="ts">
import { computed } from 'vue'
import { State } from '../../State'

const props = defineProps<{ state: State }>()

const title = computed(() => props.state.document.attributes.title)
const subtitle = computed(() => props.state.document.attributes.subtitle)
</script>

<template>
  <div class="flex flex-col">
    <h1
      class="text-balance text-4xl font-bold leading-tight sm:text-5xl sm:leading-tight"
    >
      {{ title }}
    </h1>

    <h1
      v-if="subtitle"
      class="text-balance py-1 text-2xl leading-tight sm:text-3xl sm:leading-tight"
    >
      {{ subtitle }}
    </h1>
  </div>
</template>
