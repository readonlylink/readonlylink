<script setup lang="ts">
import { reactive, ref, watchEffect } from 'vue'
import ReadonlylinkLoaded from './ReadonlylinkLoaded.vue'
import ReadonlylinkLoading from './ReadonlylinkLoading.vue'
import { State } from './State'
import { stateLoad } from './stateLoad'

const props = defineProps<{
  url: string
}>()

const state = ref<State | undefined>(undefined)

watchEffect(async () => {
  state.value = reactive(await stateLoad(props))
})
</script>

<template>
  <div
    class="mb-1.5 border border-black px-3 py-2.5 dark:border-white sm:max-w-[40rem]"
  >
    <ReadonlylinkLoaded v-if="state" :state="state" />
    <ReadonlylinkLoading v-else :options="props" />
  </div>
</template>
