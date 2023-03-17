<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Lang from '../../components/Lang.vue'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import { useDefaultAuthorList } from '../../reactives/useDefaultAuthorList'
import { Author } from './Author'
import AuthorListLoaded from './AuthorListLoaded.vue'
import AuthorListLoading from './AuthorListLoading.vue'
import { loadAuthor } from './loadAuthor'

const list = useDefaultAuthorList()

const authors = ref<Array<Author> | undefined>(undefined)

onMounted(async () => {
  authors.value = await Promise.all(list.map(loadAuthor))
})
</script>

<template>
  <PageLayout>
    <div>
      <div class="flex items-baseline space-x-4">
        <Lang class="font-logo text-2xl font-semibold text-stone-800">
          <template #zh> 作者 </template>
          <template #en> Authors </template>
        </Lang>
      </div>

      <AuthorListLoaded v-if="authors" :authors="authors" />
      <AuthorListLoading v-else :list="list" />
    </div>
  </PageLayout>
</template>
