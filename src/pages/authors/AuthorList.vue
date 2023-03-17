<script setup lang="ts">
import Lang from '../../components/Lang.vue'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import { useDefaultAuthorList } from '../../reactives/useDefaultAuthorList'
import AuthorCard from './AuthorCard.vue'
import { AuthorConfig } from './AuthorConfig'

const list = useDefaultAuthorList()

const authorConfigs: Array<AuthorConfig> = []
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

      <AuthorCard
        v-for="(authorConfig, index) of authorConfigs"
        :key="index"
        :authorConfig="authorConfig"
      />
    </div>
  </PageLayout>
</template>
