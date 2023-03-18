<script setup lang="ts">
import { onMounted, ref } from 'vue'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import { useDefaultAuthorList } from '../../reactives/useDefaultAuthorList'
import HomeLoaded from './HomeLoaded.vue'
import HomeLoading from './HomeLoading.vue'
import { State } from './State'
import { loadState } from './loadState'

const state = ref<State | undefined>(undefined)

function useStateOptions() {
  const list = useDefaultAuthorList()

  return {
    list,
  }
}

onMounted(async () => {
  state.value = await loadState(useStateOptions())
})
</script>

<template>
  <PageLayout>
    <HomeLoaded v-if="state" :state="state" />
    <HomeLoading v-else :options="useStateOptions()" />
  </PageLayout>
</template>
