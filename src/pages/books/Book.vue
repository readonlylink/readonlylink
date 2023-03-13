<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import Lang from '../../components/Lang.vue'
import BookLoaded from './BookLoaded.vue'
import { loadState, State } from './State'

const route = useRoute()

const state = ref<State | undefined>(undefined)

watch(
  () => route.params.url,
  async () => {
    state.value = await loadState({
      url: String(route.params.url),
      path: String(route.params.path),
    })
  },
  { immediate: true },
)

watch(
  () => route.params.path,
  async () => {},
)
</script>

<template>
  <div class="mx-auto max-w-3xl">
    <div v-if="!state" class="px-4 py-6 font-sans text-xl text-gray-500">
      <Lang class="font-bold">
        <template #zh> 书籍加载中⋯⋯ </template>
        <template #en> Loading book ... </template>
      </Lang>
    </div>

    <BookLoaded v-else :state="state" />
  </div>
</template>
