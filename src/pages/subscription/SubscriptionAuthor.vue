<script setup lang="ts">
import { Author } from '../author/Author'
import { State } from './State'

const props = defineProps<{
  state: State
  author: Author
}>()

const avatarURL = new URL(props.author.config.avatar, props.author.url)

function isCurrentAuthor() {
  return props.state.currentAuthor?.url === props.author.url
}

function toggle() {
  if (isCurrentAuthor()) {
    props.state.currentAuthor = undefined
  } else {
    props.state.currentAuthor = props.author
  }
}
</script>

<template>
  <button @click="toggle()">
    <div class="flex flex-col items-center">
      <img
        class="h-[5rem] w-[5rem] shrink-0"
        :class="[isCurrentAuthor() && 'ring-4 ring-rose-300']"
        :src="avatarURL.href"
        :alt="author.config.name"
      />

      <div
        class="w-[110px] overflow-x-auto whitespace-pre break-words py-1 text-center text-sm font-bold"
      >
        {{ author.config.name }}
      </div>
    </div>
  </button>
</template>
