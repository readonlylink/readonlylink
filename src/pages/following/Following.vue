<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useFollowing } from '../../models/following'
import { State } from './State'
import FollowingLoaded from './FollowingLoaded.vue'
import FollowingLoading from './FollowingLoading.vue'
import { loadState } from './loadState'

const route = useRoute()

const state = ref<State | undefined>(undefined)

function useStateOptions() {
  const following = useFollowing()
  const list = following.list
  const kind = route.query['kind'] ? String(route.query['kind']) : undefined

  return {
    kind,
    list,
  }
}

watch(
  () => route.params.url,
  async () => {
    state.value = await loadState(useStateOptions())
  },
  {
    immediate: true,
  },
)
</script>

<template>
  <FollowingLoaded v-if="state" :state="state" />
  <FollowingLoading v-else :options="useStateOptions()" />
</template>
../../models/following ../../models/following
