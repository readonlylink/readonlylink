<script setup lang="ts">
import { computed } from 'vue'
import Hyperlink from '../../components/utils/Hyperlink.vue'
import { State } from './State'

const props = defineProps<{ state: State }>()

const avatarURL = computed(
  () => new URL(props.state.config.avatar, props.state.url),
)
</script>

<template>
  <Hyperlink :href="`/authors/${state.url}`">
    <img :src="avatarURL.href" :alt="state.config.name" />
  </Hyperlink>
</template>
