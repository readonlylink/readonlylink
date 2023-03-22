<script setup lang="ts">
import { Head } from '@vueuse/head'
import AuthorPage from './AuthorPage.vue'
import { State } from './State'
import { stateReactive } from './stateReactive'
import { stateTitle } from './stateTitle'

const props = defineProps<{ state: State }>()

const state = stateReactive(props.state)
</script>

<template>
  <Head>
    <title>{{ stateTitle(state) }}</title>
  </Head>

  <AuthorPage :state="state" />
</template>
