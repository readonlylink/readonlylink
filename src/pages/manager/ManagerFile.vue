<script setup lang="ts">
import { computed } from 'vue'
import ManagerFileDownload from './ManagerFileDownload.vue'
import ManagerFileJson from './ManagerFileJson.vue'
import ManagerFileText from './ManagerFileText.vue'
import { State } from './State'

const props = defineProps<{ state: State }>()

const path = computed(() => props.state.currentPathEntry?.path || '')
</script>

<template>
  <ManagerFileJson v-if="path.endsWith('.json')" :state="state" :path="path" />
  <ManagerFileText
    v-else-if="path.endsWith('.txt') || path.endsWith('.md')"
    :state="state"
    :path="path"
  />
  <ManagerFileDownload v-else :state="state" :path="path" />
</template>
