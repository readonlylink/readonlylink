<script setup lang="ts">
import { Head } from '@vueuse/head'
import { watch } from 'vue'
import MdPage from '../../components/md/MdPage.vue'
import { useExtensionStore } from '../../composables/extension-store'
import { State } from './State'
import { stateDocument } from './stateDocument'
import { stateReactive } from './stateReactive'
import { stateTitle } from './stateTitle'

const props = defineProps<{ state: State }>()

const state = stateReactive(props.state)

watch(
  () => props.state.url,
  () => {
    window.scrollTo(0, 0)
  },
)
</script>

<template>
  <Head>
    <title v-if="stateTitle(state)">{{ stateTitle(state) }}</title>
  </Head>

  <MdPage
    class="m-6"
    :document="stateDocument(state)"
    :customComponents="useExtensionStore().components"
  />
</template>
