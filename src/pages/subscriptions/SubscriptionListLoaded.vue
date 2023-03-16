<script setup lang="ts">
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import { State } from './State'
import { stateReactive } from './stateReactive'

const props = defineProps<{ state: State }>()
const state = stateReactive(props.state)
</script>

<template>
  <PageLayout>
    {{ state.list }}
  </PageLayout>
</template>
