<script setup lang="ts">
import { Head } from '@vueuse/head'
import { useForm } from '../../components/form'
import FormInput from '../../components/form/FormInput.vue'
import Lang from '../../components/Lang.vue'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import { useGlobalLang } from '../../reactives/useGlobalLang'

const form = useForm({
  url: '',
})

const lang = useGlobalLang()
</script>

<template>
  <PageLayout>
    <div class="flex h-full max-w-3xl flex-col justify-center">
      <Head>
        <title v-if="lang.isZh()">文章</title>
        <title v-else>Articles</title>
      </Head>

      <FormInput name="url" :form="form" placeholder="https://...">
        <template #label>
          <Lang class="font-logo text-2xl font-semibold text-stone-800">
            <template #zh> 文章 </template>
            <template #en> Articles </template>
          </Lang>
        </template>
      </FormInput>

      <div class="py-16"></div>
    </div>
  </PageLayout>
</template>
