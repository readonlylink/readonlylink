<script setup lang="ts">
import Hyperlink from '../../components/Hyperlink.vue'
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
</script>

<template>
  <div class="flex flex-col py-3">
    <Hyperlink :href="`/authors/${activity.author.url}`">
      <div class="flex space-x-2 py-2">
        <img
          :src="avatarURL.href"
          :alt="activity.author.config.name"
          width="72"
          height="72"
        />

        <div class="flex flex-col">
          <div class="font-bold text-lg">
            {{ activity.author.config.name }}
          </div>
          <div class="text-sm font-mono">
            {{ activity.author.url }}
          </div>
        </div>
      </div>
    </Hyperlink>

    <div>{{ activity.author.config.name }} / {{ activity.path }}</div>
  </div>
</template>
