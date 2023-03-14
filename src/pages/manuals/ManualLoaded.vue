<script setup lang="ts">
import { watch } from 'vue'
import { useRoute } from 'vue-router'
import { State } from './State'
import { stateReactive } from './stateReactive'

const props = defineProps<{ state: State }>()
const state = stateReactive(props.state)
const route = useRoute()

watch(
  () => route.params.path,
  (value) => {
    state.path = value ? String(value) : undefined
  },
)
</script>

<template>
  <div>
    <div>
      {{ state.config }}
    </div>

    <div>
      {{ state.texts }}
    </div>
  </div>
</template>
