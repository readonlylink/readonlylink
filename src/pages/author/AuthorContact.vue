<script setup lang="ts">
import { EnvelopeIcon } from '@heroicons/vue/24/outline'
import BilibiliLineIcon from '../../components/icons/BilibiliLineIcon.vue'
import GithubIcon from '../../components/icons/GithubIcon.vue'
import MimorIcon from '../../components/icons/MimorIcon.vue'
import ReadonlyIcon from '../../components/icons/ReadonlyIcon.vue'
import TwitterIcon from '../../components/icons/TwitterIcon.vue'
import { AuthorContact } from './AuthorConfig'
import { State } from './State'

defineProps<{
  state: State
  contact: AuthorContact
}>()
</script>

<template>
  <div class="flex items-center space-x-1.5 text-stone-400 md:space-x-2">
    <a
      v-if="contact.bilibili"
      :href="contact.bilibili"
      :title="contact.bilibili"
      class="hover:text-black"
      target="_blank"
    >
      <BilibiliLineIcon class="h-5 w-5" />
    </a>

    <a
      v-if="contact.github"
      :href="contact.github"
      :title="contact.github"
      class="hover:text-black"
      target="_blank"
    >
      <GithubIcon class="h-5 w-5" />
    </a>

    <a
      v-if="contact.email"
      :href="`mailto:${contact.email}`"
      :title="contact.email"
      class="hover:text-black"
      target="_blank"
    >
      <EnvelopeIcon class="h-5 w-5" />
    </a>

    <a
      v-if="contact.twitter"
      :href="contact.twitter"
      :title="contact.twitter"
      class="hover:text-black"
      target="_blank"
    >
      <TwitterIcon class="h-5 w-5" />
    </a>

    <a
      v-if="contact.mimor"
      :href="contact.mimor"
      :title="contact.mimor"
      class="hover:text-black"
      target="_blank"
    >
      <MimorIcon class="h-5 w-5" />
    </a>

    <a
      v-if="contact.readonlylink"
      :href="contact.readonlylink"
      :title="contact.readonlylink"
      class="hover:text-black"
      target="_blank"
    >
      <ReadonlyIcon class="h-5 w-5" />
    </a>
  </div>
</template>
