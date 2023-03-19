<script setup lang="ts">
import { ManualConfig } from '../../pages/manual/ManualConfig'
import { State } from './State'

defineProps<{
  state: State
  config: ManualConfig
}>()
</script>

<template>
  <div>ReadonlylinkManual</div>
</template>
