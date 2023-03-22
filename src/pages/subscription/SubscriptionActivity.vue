<script setup lang="ts">
import Hyperlink from '../../components/Hyperlink.vue'
import MdPage from '../../components/md/MdPage.vue'
import { formatDateTime } from '../../utils/formatDate'
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
  <div class="flex flex-col py-1.5">
    <div class="flex items-center space-x-2 py-2">
      <Hyperlink :href="`/authors/${activity.author.url}`" class="shrink-0">
        <img
          :src="avatarURL.href"
          :alt="activity.author.config.name"
          class="h-[4.2rem] w-[4.2rem]"
        />
      </Hyperlink>

      <div class="flex flex-col space-y-1 overflow-x-auto overflow-y-hidden">
        <Hyperlink
          :href="`/authors/${activity.author.url}`"
          class="hover:text-stone-400"
        >
          <div
            class="overflow-x-auto overflow-y-hidden whitespace-pre text-lg font-bold"
          >
            {{ activity.author.config.name }}
          </div>
        </Hyperlink>
        <Hyperlink
          :href="`/authors/${activity.author.url}`"
          class="hover:underline"
        >
          <div
            class="overflow-x-auto overflow-y-hidden whitespace-pre font-mono text-xs"
          >
            {{ activity.author.url }}
          </div>
        </Hyperlink>
        <Hyperlink :href="`/articles/${articleURL}`" class="hover:underline">
          <div
            class="overflow-x-auto overflow-y-hidden whitespace-pre font-mono text-xs"
          >
            {{ formatDateTime(activity.document.attributes.date) }}
          </div>
        </Hyperlink>
      </div>
    </div>

    <MdPage
      class="h-full max-h-[490px] overflow-y-auto"
      :document="activity.document"
    />
  </div>
</template>
