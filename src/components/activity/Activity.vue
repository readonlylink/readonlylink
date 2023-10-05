<script setup lang="ts">
import { join } from 'path-browserify'
import { computed } from 'vue'
import MdPage from '../../components/md/MdPage.vue'
import Hyperlink from '../../components/utils/Hyperlink.vue'
import { Activity } from '../../models/activity/Activity'
import { authorAvatarURL } from '../../models/author'
import { formatDateTime } from '../../utils/formatDate'

const props = defineProps<{
  activity: Activity
}>()

const activityURL = computed(
  () =>
    new URL(
      join(props.activity.author.config.src || '', props.activity.path),
      props.activity.author.url,
    ),
)
</script>

<template>
  <div class="flex flex-col py-1.5">
    <div class="flex items-center space-x-2 overflow-auto py-2">
      <Hyperlink :href="`/authors/${activity.author.url}`" class="shrink-0">
        <img
          :src="authorAvatarURL(activity.author).href"
          :alt="activity.author.config.name"
          class="h-[4.2rem] w-[4.2rem]"
        />
      </Hyperlink>

      <div class="flex flex-col space-y-1 overflow-auto">
        <Hyperlink
          :href="`/authors/${activity.author.url}`"
          class="shrink-0 overflow-x-auto whitespace-pre text-lg font-bold hover:text-stone-400"
        >
          {{ activity.author.config.name }}
        </Hyperlink>

        <Hyperlink
          :href="`/authors/${activity.author.url}`"
          class="shrink-0 overflow-x-auto whitespace-pre py-0.5 font-mono text-xs hover:underline"
        >
          {{ activity.author.url }}
        </Hyperlink>

        <Hyperlink
          :href="`/articles/${activityURL}`"
          class="shrink-0 overflow-x-auto whitespace-pre py-0.5 font-mono text-xs hover:underline"
        >
          {{ formatDateTime(activity.document.attributes.date) }}
        </Hyperlink>
      </div>
    </div>

    <MdPage :document="activity.document" :url="activityURL" />
  </div>
</template>
