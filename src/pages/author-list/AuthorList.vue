<script setup lang="ts">
import { Head } from '@vueuse/head'
import { onMounted, reactive, ref } from 'vue'
import Lang from '../../components/lang/Lang.vue'
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import { useDefaultAuthorList } from '../../reactives/useDefaultAuthorList'
import { Author } from '../author/Author'
import { loadAuthor } from '../author/loadAuthor'
import AuthorListLoaded from './AuthorListLoaded.vue'
import AuthorListLoading from './AuthorListLoading.vue'

const list = reactive(useDefaultAuthorList())
const lang = useGlobalLang()
const authors = ref<Array<Author>>([])

const who = 'AuthorList'

onMounted(async () => {
  while (true) {
    const url = list.shift()
    if (url === undefined) {
      return
    }

    try {
      authors.value.push(await loadAuthor(url))
    } catch (error) {
      console.error({ who, error })
    }
  }
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

      <AuthorListLoading v-if="list.length > 0" :list="list" />
      <AuthorListLoaded :authors="authors" />
    </div>
  </PageLayout>
</template>
