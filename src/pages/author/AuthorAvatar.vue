<script setup lang="ts">
import { join } from 'path-browserify'
import { computed } from 'vue'
import Hyperlink from '../../components/utils/Hyperlink.vue'
import { State } from './State'

const props = defineProps<{ state: State }>()

const avatarURL = computed(
  () =>
    new URL(
      join(props.state.config.src || '', props.state.config.avatar),
      props.state.url,
    ),
)
</script>

<template>
  <Hyperlink :href="`/authors/${state.url}`">
    <img :src="avatarURL.href" :alt="state.config.name" />
  </Hyperlink>
</template>
