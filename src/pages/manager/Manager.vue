<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import { stringTrimEnd } from '../../utils/stringTrimEnd'
import { loadState, LoadStateOptions } from './loadState'
import ManagerLayout from './ManagerLayout.vue'
import ManagerLoading from './ManagerLoading.vue'
import ManagerLoadingError from './ManagerLoadingError.vue'
import { State } from './State'

const route = useRoute()
const state = ref<State | null>(null)
const error = ref<Error | null>(null)

const url = stringTrimEnd(String(route.params.url), '/')
const token = window.localStorage.getItem(`token:${url}`) || ''
const options: LoadStateOptions = { url, token }

onMounted(async () => {
  try {
    if (!token) {
      throw new Error(`No token for url: ${url}`)
    }

    state.value = await loadState(options)
  } catch (errorValue) {
    if (errorValue instanceof Error) {
      error.value = errorValue
    }

    throw errorValue
  }
})
</script>

<template>
  <ManagerLayout v-if="state" :state="state" />
  <PageLayout v-else>
    <ManagerLoadingError v-if="error" :error="error" />
    <ManagerLoading v-else :options="options" />
  </PageLayout>
</template>
