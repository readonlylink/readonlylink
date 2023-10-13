<script setup lang="ts">
import { reactive, ref, watchEffect } from 'vue'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import AuthorListLoaded from './AuthorListLoaded.vue'
import AuthorListLoading from './AuthorListLoading.vue'
import { State } from './State'
import { stateLoad } from './stateLoad'

const state = ref<undefined | State>(undefined)

watchEffect(async () => {
  state.value = reactive(await stateLoad())
})
</script>

<template>
  <PageLayout>
    <AuthorListLoaded v-if="state" :state="state" />
    <AuthorListLoading v-else />
  </PageLayout>
</template>
