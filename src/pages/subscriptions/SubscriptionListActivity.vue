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
</script>

<template>
  <div class="flex flex-col py-3">
    <Hyperlink :href="`/authors/${activity.author.url}`">
      <div class="flex space-x-2 py-2">
        <img
          class="object-contain"
          :src="avatarURL.href"
          :alt="activity.author.config.name"
          width="72"
          height="72"
        />

        <div class="flex flex-col overflow-x-auto">
          <div class="font-bold text-lg overflow-x-auto whitespace-pre">
            {{ activity.author.config.name }}
          </div>
          <div class="text-xs font-mono overflow-x-auto whitespace-pre">
            {{ activity.author.url }}
          </div>
          <div class="text-xs font-mono overflow-x-auto whitespace-pre">
            {{ activity.path }}
          </div>
        </div>
      </div>
    </Hyperlink>

    <MdPage
      class="h-full max-h-[490px] overflow-y-auto"
      :document="activity.document"
      :customComponents="state.extensions.components"
    />
  </div>
</template>
