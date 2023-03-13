<script setup lang="ts">
import { reactive, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import Lang from '../../components/Lang.vue'
import { stringTrimEnd } from '../../utils/stringTrimEnd'
import ArticleMd from './ArticleMd.vue'
import { State } from './State'

const route = useRoute()

const state = ref<State | undefined>(undefined)

watch(
  () => route.params.url,
  async () => {
    const url = stringTrimEnd(String(route.params.url), '/')
    const response = await fetch(url)
    const text = await response.text()
    state.value = reactive(new State({ url, text }))
  },
  {
    immediate: true,
  },
)
</script>

<template>
  <div class="mx-auto max-w-3xl">
    <div v-if="!state" class="px-4 py-6 font-sans text-xl text-gray-500">
      <Lang class="font-bold">
        <template #zh> 文章加载中⋯⋯ </template>
        <template #en> Loading article ... </template>
      </Lang>
    </div>

    <ArticleMd v-else :state="state" />
  </div>
</template>
