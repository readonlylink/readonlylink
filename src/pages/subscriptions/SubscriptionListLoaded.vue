<script setup lang="ts">
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import { State } from './State'
import { stateReactive } from './stateReactive'

const props = defineProps<{ state: State }>()
const state = stateReactive(props.state)
</script>

<template>
  <PageLayout>
    <div>{{ state.list }}</div>

    <div v-for="(activity, index) of state.activities" :key="index">
      {{ activity.author.config.name }} / {{ activity.path }}
    </div>
  </PageLayout>
</template>
