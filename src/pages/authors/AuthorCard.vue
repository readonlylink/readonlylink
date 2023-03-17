<script setup lang="ts">
import Hyperlink from '../../components/Hyperlink.vue'
import { Author } from './Author'

const props = defineProps<{ author: Author }>()

const avatarURL = new URL(props.author.config.avatar, props.author.url)
const homepageURL = new URL(props.author.config.homepage, props.author.url)
</script>

<template>
  <div class="flex items-start space-x-2">
    <Hyperlink :href="`/authors/${author.url}`">
      <img
        class="object-contain"
        :src="avatarURL.href"
        :alt="author.config.name"
        width="95"
        height="95"
      />
    </Hyperlink>

    <div class="flex flex-col">
      <Hyperlink :href="`/authors/${author.url}`" class="hover:text-stone-400">
        <div class="text-xl font-bold">
          {{ author.config.name }}
        </div>
      </Hyperlink>
      <Hyperlink :href="`/authors/${author.url}`" class="hover:underline">
        <div class="font-mono text-base">
          {{ author.url }}
        </div>
      </Hyperlink>
      <div class="font-mono text-base">
        <span>TODO</span>
      </div>
    </div>
  </div>
</template>
