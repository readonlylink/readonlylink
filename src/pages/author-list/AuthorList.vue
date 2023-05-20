<script setup lang="ts">
import { Head } from '@vueuse/head'
import { onMounted, ref } from 'vue'
import Lang from '../../components/lang/Lang.vue'
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import AuthorListLoaded from './AuthorListLoaded.vue'
import { State } from './State'
import { loadState } from './loadState'

const lang = useGlobalLang()
const state = ref<undefined | State>(undefined)

onMounted(async () => {
  state.value = await loadState()
})
</script>

<template>
  <PageLayout>
    <Head>
      <title v-if="lang.isZh()">作者 | 只读</title>
      <title v-else>Authors | Readonly</title>
    </Head>

    <div>
      <div class="flex items-baseline">
        <Lang class="font-logo text-2xl font-bold">
          <template #zh> 作者 </template>
          <template #en> Authors </template>
        </Lang>
      </div>

      <AuthorListLoaded v-if="state" :state="state" />
    </div>
  </PageLayout>
</template>
