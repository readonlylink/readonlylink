<script setup lang="ts">
import { Head } from '@vueuse/head'
import AuthorHomepage from './AuthorHomepage.vue'
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

  <AuthorHomepage :state="state" />
</template>
