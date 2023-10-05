<script setup lang="ts">
import { PlayIcon, QuestionMarkCircleIcon } from '@heroicons/vue/24/outline'
import { Head } from '@vueuse/head'
import { useRouter } from 'vue-router'
import { formSubmit, useForm } from '../../components/form'
import FormInput from '../../components/form/FormInput.vue'
import Lang from '../../components/lang/Lang.vue'
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import Hyperlink from '../../components/utils/Hyperlink.vue'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'

const form = useForm({
  url: '',
})

const lang = useGlobalLang()

const origin = window.location.origin

const router = useRouter()

async function submit(event: Event) {
  formSubmit(form, event, async ({ url }) => {
    router.push({ path: `/books/${url}` })
  })
}
</script>

<template>
  <PageLayout>
    <div class="flex h-full max-w-3xl flex-col justify-center">
      <Head>
        <title v-if="lang.isZh()">书籍</title>
        <title v-else>Book</title>
      </Head>

      <form @submit.prevent="submit">
        <FormInput name="url" type="url" :form="form">
          <template #label>
            <div
              class="flex items-end justify-between"
              title="Book | Readonly.Link Manual"
            >
              <Lang class="text-2xl font-bold">
                <template #zh> 书籍 </template>
                <template #en> Book </template>
              </Lang>
              <Hyperlink
                :href="
                  lang.isZh()
                    ? `/manuals/${origin}/contents/manual/zh.json/-/kinds-of-contents/book.md`
                    : `/manuals/${origin}/contents/manual/en.json/-/kinds-of-contents/book.md`
                "
              >
                <QuestionMarkCircleIcon class="h-6 w-6" />
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
