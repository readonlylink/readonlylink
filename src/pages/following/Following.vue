<script setup lang="ts">
import { reactive, ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { useFollowing } from '../../models/following'
import FollowingLoaded from './FollowingLoaded.vue'
import FollowingLoading from './FollowingLoading.vue'
import { State } from './State'
import { stateLoad } from './stateLoad'

const state = ref<State | undefined>(undefined)

const route = useRoute()

function useStateOptions() {
  const following = useFollowing()
  const list = following.list
  const kind = route.query['kind'] ? String(route.query['kind']) : undefined

  return {
    kind,
    list,
  }
}

watchEffect(async () => {
  state.value = reactive(await stateLoad(useStateOptions()))
})
</script>

<template>
  <FollowingLoaded v-if="state" :state="state" />
  <FollowingLoading v-else :options="useStateOptions()" />
</template>
