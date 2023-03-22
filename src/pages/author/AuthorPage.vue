<script setup lang="ts">
import { computed } from 'vue'
import Hyperlink from '../../components/Hyperlink.vue'
import MdPage from '../../components/md/MdPage.vue'
import AuthorToolbar from './AuthorToolbar.vue'
import { State } from './State'

const props = defineProps<{ state: State }>()

const avatarURL = computed(
  () => new URL(props.state.config.avatar, props.state.url),
)

const url = computed(() => new URL(props.state.url))
</script>

<template>
  <div class="relative mx-auto flex h-screen max-w-3xl flex-col">
    <Hyperlink
      :href="`/authors/${state.url}`"
      class="block h-[3.5rem] w-[3.5rem] shrink-0 object-contain p-2 md:hidden"
    >
      <img :src="avatarURL.href" :alt="state.config.name" />
    </Hyperlink>

    <Hyperlink
      :href="`/authors/${state.url}`"
      class="absolute top-7 -left-[4.3rem] hidden h-[4.5rem] w-[4.5rem] shrink-0 object-contain md:block"
    >
      <img :src="avatarURL.href" :alt="state.config.name" />
    </Hyperlink>

    <AuthorToolbar class="absolute top-0 right-0 p-2 md:p-3" :state="state" />

    <div class="mx-5 mb-5 md:m-6">
      <MdPage :key="state.url" :document="state.homepage.document" :url="url" />
    </div>
  </div>
</template>
