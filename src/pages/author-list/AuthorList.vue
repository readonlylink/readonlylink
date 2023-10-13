<script setup lang="ts">
import { onMounted, ref } from 'vue'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import AuthorListLoaded from './AuthorListLoaded.vue'
import AuthorListLoading from './AuthorListLoading.vue'
import { State } from './State'
import { stateLoad } from './stateLoad'

const state = ref<undefined | State>(undefined)

onMounted(async () => {
  state.value = await stateLoad()
})
</script>

<template>
  <PageLayout>
    <AuthorListLoaded v-if="state" :state="state" />
    <AuthorListLoading v-else />
  </PageLayout>
</template>
