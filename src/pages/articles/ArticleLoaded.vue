<script setup lang="ts">
import ArticleMd from './ArticleMd.vue'
import { State } from './State'
import { stateReactive } from './stateReactive'

const props = defineProps<{ state: State }>()

const state = stateReactive(props.state)
</script>

<template>
  <ArticleMd :state="state" />
</template>
