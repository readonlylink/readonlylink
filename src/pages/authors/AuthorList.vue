<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Lang from '../../components/Lang.vue'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import { useDefaultAuthorList } from '../../reactives/useDefaultAuthorList'
import { AuthorConfig } from './AuthorConfig'
import AuthorListLoaded from './AuthorListLoaded.vue'
import AuthorListLoading from './AuthorListLoading.vue'
import { loadAuthorConfig } from './State'

const list = useDefaultAuthorList()

const authorConfigs = ref<Array<AuthorConfig> | undefined>(undefined)

onMounted(async () => {
  authorConfigs.value = await Promise.all(list.map(loadAuthorConfig))
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

      <AuthorListLoaded v-if="authorConfigs" :authorConfigs="authorConfigs" />
      <AuthorListLoading v-else :list="list" />
    </div>
  </PageLayout>
</template>
