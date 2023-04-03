<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import Lang from '../../components/lang/Lang.vue'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import { useDefaultAuthorList } from '../../reactives/useDefaultAuthorList'
import { Author } from '../author/Author'
import { loadAuthor } from '../author/loadAuthor'
import AuthorListLoaded from './AuthorListLoaded.vue'
import AuthorListLoading from './AuthorListLoading.vue'

const list = reactive(useDefaultAuthorList())

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
    <div>
      <div class="flex items-baseline">
        <Lang class="font-logo text-2xl font-bold text-stone-800">
          <template #zh> 作者 </template>
          <template #en> Authors </template>
        </Lang>
      </div>

      <AuthorListLoading v-if="list.length > 0" :list="list" />
      <AuthorListLoaded :authors="authors" />
    </div>
  </PageLayout>
</template>
