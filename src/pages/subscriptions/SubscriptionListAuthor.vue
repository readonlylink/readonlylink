<script setup lang="ts">
import Hyperlink from '../../components/Hyperlink.vue'
import { Author, State } from './State'

const props = defineProps<{
  state: State
  author: Author
}>()

const avatarURL = new URL(props.author.config.avatar, props.author.url)
</script>

<template>
  <Hyperlink :href="`/authors/${author.url}`">
    <div class="flex flex-col items-center">
      <img
        :src="avatarURL.href"
        :alt="author.config.name"
        width="80"
        height="80"
      />

      <div style="width: 110px" class="break-words text-center text-sm">
        {{ author.config.name }}
      </div>
    </div>
  </Hyperlink>
</template>
