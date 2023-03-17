<script setup lang="ts">
import { Activity } from './Activity'
import { State } from './State'

defineProps<{
  state: State
  activity: Activity
}>()
</script>

<template>
  <div>{{ activity.author.config.name }} / {{ activity.path }}</div>
</template>
