<script setup lang="ts">
import { PlayIcon, QuestionMarkCircleIcon } from '@heroicons/vue/24/outline'
import { Head } from '@vueuse/head'
import { formSubmit, useForm } from '../../components/form'
import FormInput from '../../components/form/FormInput.vue'
import Hyperlink from '../../components/Hyperlink.vue'
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
        <title v-if="lang.isZh()">书籍</title>
        <title v-else>Book</title>
      </Head>

      <form
        @submit.prevent="
          (event) => {
            formSubmit(form, event, async ({ url }) => {
              $router.push({ path: `/books/${url}` })
            })
          }
        "
      >
        <FormInput name="url" type="url" :form="form">
          <template #label>
            <div
              class="flex items-end justify-between"
              title="Book | Readonly.Link Manual"
            >
              <Lang class="font-logo text-2xl font-semibold text-stone-800">
                <template #zh> 书籍 </template>
                <template #en> Book </template>
              </Lang>
              <Hyperlink
                href="/manuals/https://readonly.link/docs/manual.json/-/kinds-of-renders/book.md"
              >
                <QuestionMarkCircleIcon class="h-6 w-6 text-stone-800" />
              </Hyperlink>
            </div>
          </template>

          <template #input-end>
            <button class="px-4">
              <PlayIcon class="w-6" />
            </button>
          </template>
        </FormInput>
      </form>

      <div class="py-16"></div>
    </div>
  </PageLayout>
</template>
