<script setup lang="ts">
import { onMounted, ref } from 'vue'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import AuthorListLoaded from './AuthorListLoaded.vue'
import AuthorListLoading from './AuthorListLoading.vue'
import { State } from './State'
import { loadState } from './loadState'

const state = ref<undefined | State>(undefined)

onMounted(async () => {
  state.value = await loadState()
})
</script>

<template>
  <PageLayout>
    <AuthorListLoaded v-if="state" :state="state" />
    <AuthorListLoading v-else />
  </PageLayout>
</template>
