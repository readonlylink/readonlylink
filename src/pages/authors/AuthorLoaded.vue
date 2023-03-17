<script setup lang="ts">
import { Head } from '@vueuse/head'
import MdPage from '../../components/md/MdPage.vue'
import { State } from './State'
import { stateReactive } from './stateReactive'
import { stateTitle } from './stateTitle'

const props = defineProps<{ state: State }>()

const state = stateReactive(props.state)
</script>

<template>
  <div class="mx-auto flex h-screen max-w-3xl flex-col">
    <Head>
      <title>{{ stateTitle(state) }}</title>
    </Head>

    <MdPage
      :key="state.url"
      :document="state.homepage.document"
      :customComponents="state.extensions.components"
    />
  </div>
</template>
