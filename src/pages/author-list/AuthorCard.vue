<script setup lang="ts">
import { computed } from 'vue'
import Hyperlink from '../../components/utils/Hyperlink.vue'
import { Author } from '../../models/author/Author'

const props = defineProps<{ author: Author }>()

const avatarURL = computed(
  () => new URL(props.author.config.avatar, props.author.url),
)

const homepageURL = computed(
  () => new URL(props.author.config.homepage, props.author.url),
)
</script>

<template>
  <div class="flex items-center space-x-2">
    <Hyperlink :href="`/authors/${author.url}`" class="shrink-0 object-contain">
      <img
        :src="avatarURL.href"
        :alt="author.config.name"
        class="h-[5rem] w-[5rem]"
      />
    </Hyperlink>

    <div class="flex flex-col overflow-x-auto">
      <Hyperlink :href="`/authors/${author.url}`" class="hover:text-stone-400">
        <div
          class="overflow-x-auto overflow-y-hidden whitespace-pre text-2xl font-bold"
        >
          {{ author.config.name }}
        </div>
      </Hyperlink>
      <Hyperlink :href="`/authors/${author.url}`" class="hover:underline">
        <div
          class="overflow-x-auto overflow-y-hidden whitespace-pre font-code text-base"
        >
          {{ author.url }}
        </div>
      </Hyperlink>
      <div
        v-if="author.config.tagline"
        class="overflow-x-auto overflow-y-hidden whitespace-pre font-content text-lg italic"
      >
        {{ author.config.tagline }}
      </div>
    </div>
  </div>
</template>
