<script setup lang="ts">
import Hyperlink from '../../components/Hyperlink.vue'
import { Author } from './Author'

const props = defineProps<{ author: Author }>()

const avatarURL = new URL(props.author.config.avatar, props.author.url)
const homepageURL = new URL(props.author.config.homepage, props.author.url)
</script>

<template>
  <div class="flex items-start space-x-2">
    <Hyperlink :href="`/authors/${author.url}`" class="shrink-0 object-contain">
      <img
        :src="avatarURL.href"
        :alt="author.config.name"
        width="95"
        height="95"
      />
    </Hyperlink>

    <div class="flex flex-col overflow-x-auto">
      <Hyperlink :href="`/authors/${author.url}`" class="hover:text-stone-400">
        <div class="overflow-x-auto whitespace-pre text-xl font-bold">
          {{ author.config.name }}
        </div>
      </Hyperlink>
      <Hyperlink :href="`/authors/${author.url}`" class="hover:underline">
        <div class="overflow-x-auto whitespace-pre font-mono text-base">
          {{ author.url }}
        </div>
      </Hyperlink>
      <div
        v-if="author.config.tagline"
        class="overflow-x-auto whitespace-pre font-serif text-lg italic"
      >
        {{ author.config.tagline }}
      </div>
    </div>
  </div>
</template>
