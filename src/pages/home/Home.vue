<script setup lang="ts">
import { reactive, ref, watchEffect } from 'vue'
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

watchEffect(async () => {
  state.value = reactive(await stateLoad(useStateOptions()))
})
</script>

<template>
  <PageLayout>
    <HomeLoaded v-if="state" :state="state" />
    <HomeLoading v-else :options="useStateOptions()" />
  </PageLayout>
</template>
