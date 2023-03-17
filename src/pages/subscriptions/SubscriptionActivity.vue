<script setup lang="ts">
import Hyperlink from '../../components/Hyperlink.vue'
import MdPage from '../../components/md/MdPage.vue'
import { Activity } from './Activity'
import { State } from './State'

const props = defineProps<{
  state: State
  activity: Activity
}>()

const avatarURL = new URL(
  props.activity.author.config.avatar,
  props.activity.author.url,
)

const articleURL = new URL(props.activity.path, props.activity.author.url)
</script>

<template>
  <div class="flex flex-col py-3">
    <div class="flex items-center space-x-2 py-2">
      <Hyperlink :href="`/authors/${activity.author.url}`">
        <img
          class="object-contain"
          :src="avatarURL.href"
          :alt="activity.author.config.name"
          width="72"
          height="72"
        />
      </Hyperlink>

      <div class="flex flex-col space-y-1">
        <Hyperlink
          :href="`/authors/${activity.author.url}`"
          class="hover:text-stone-400"
        >
          <div class="text-lg font-bold">
            {{ activity.author.config.name }}
          </div>
        </Hyperlink>
        <Hyperlink
          :href="`/authors/${activity.author.url}`"
          class="hover:underline"
        >
          <div class="font-mono text-xs">
            {{ activity.author.url }}
          </div>
        </Hyperlink>
        <Hyperlink :href="`/articles/${articleURL}`" class="hover:underline">
          <div class="font-mono text-xs">
            {{ activity.path }}
          </div>
        </Hyperlink>
      </div>
    </div>

    <MdPage
      class="h-full max-h-[490px] overflow-y-auto"
      :document="activity.document"
      :customComponents="state.extensions.components"
    />
  </div>
</template>
