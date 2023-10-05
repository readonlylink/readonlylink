<script setup lang="ts">
import { computed } from 'vue'
import Hyperlink from '../../components/utils/Hyperlink.vue'
import { authorAvatarURL } from '../../models/author'
import { State } from './State'

const props = defineProps<{ state: State }>()

const avatarURL = computed(() =>
  authorAvatarURL({
    url: props.state.url,
    config: props.state.config,
  }),
)
</script>

<template>
  <Hyperlink :href="`/authors/${state.url}`">
    <img :src="avatarURL.href" :alt="state.config.name" />
  </Hyperlink>
</template>
