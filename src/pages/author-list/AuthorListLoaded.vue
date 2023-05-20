<script setup lang="ts">
import { Head } from '@vueuse/head'
import { reactive } from 'vue'
import Lang from '../../components/lang/Lang.vue'
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import { asyncRun } from '../../utils/asyncRun'
import AuthorCard from './AuthorCard.vue'
import { State } from './State'
import { stateRefresh } from './stateRefresh'

const props = defineProps<{ state: State }>()

const state = reactive(props.state)
const lang = useGlobalLang()

asyncRun(async () => {
  await stateRefresh(state)
})
</script>

<template>
  <div>
    <Head>
      <title v-if="lang.isZh()">作者 | 只读</title>
      <title v-else>Authors | Readonly</title>
    </Head>

    <div class="flex items-baseline">
      <Lang class="font-logo text-2xl font-bold">
        <template #zh> 作者 </template>
        <template #en> Authors </template>
      </Lang>
    </div>

    <div class="flex flex-col space-y-3 py-2">
      <AuthorCard
        v-for="(author, index) of state.authors"
        :key="index"
        :author="author"
      />
    </div>
  </div>
</template>
