<script setup lang="ts">
import { onMounted, ref } from 'vue'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import { useDefaultAuthorList } from '../../models/author-list'
import HomeLoaded from './HomeLoaded.vue'
import HomeLoading from './HomeLoading.vue'
import { State } from './State'
import { stateLoad } from './stateLoad'

const state = ref<State | undefined>(undefined)

function useStateOptions() {
  const list = useDefaultAuthorList()

  return {
    list,
  }
}

onMounted(async () => {
  state.value = await stateLoad(useStateOptions())
})
</script>

<template>
  <PageLayout>
    <HomeLoaded v-if="state" :state="state" />
    <HomeLoading v-else :options="useStateOptions()" />
  </PageLayout>
</template>
