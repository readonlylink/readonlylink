<script setup lang="ts">
import { Author } from '../authors/Author'
import { State } from './State'

const props = defineProps<{
  state: State
  author: Author
}>()

const avatarURL = new URL(props.author.config.avatar, props.author.url)
</script>

<template>
  <button>
    <div class="flex flex-col items-center">
      <img
        class="shrink-0"
        :src="avatarURL.href"
        :alt="author.config.name"
        width="80"
        height="80"
      />

      <div
        class="w-[110px] overflow-x-auto whitespace-pre break-words py-1 text-center text-sm font-bold"
      >
        {{ author.config.name }}
      </div>
    </div>
  </button>
</template>
