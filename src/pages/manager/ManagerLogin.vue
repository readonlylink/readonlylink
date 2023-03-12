<script setup lang="ts">
import { Head } from '@vueuse/head'
import { useRouter } from 'vue-router'
import { formSubmit, useForm } from '../../components/form'
import FormButton from '../../components/form/FormButton.vue'
import FormDivider from '../../components/form/FormDivider.vue'
import FormInput from '../../components/form/FormInput.vue'
import Lang from '../../components/Lang.vue'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import { useGlobalLang } from '../../reactives/useGlobalLang'
import { stringTrimEnd } from '../../utils/stringTrimEnd'

const router = useRouter()

const lang = useGlobalLang()

const form = useForm({
  url: '',
  token: '',
})

function submit(event: Event) {
  formSubmit(form, event, async (values) => {
    const url = stringTrimEnd(values.url, '/')
    window.localStorage.setItem(`token:${url}`, values.token)
    router.push(`/manager/${url}`)
  })
}
</script>

<template>
  <PageLayout>
    <Head>
      <title v-if="lang.isZh()">管理器 | FiDB</title>
      <title v-else>Manager | FiDB</title>
    </Head>

    <div class="flex h-full flex-col items-center justify-center">
      <form class="flex w-full flex-col px-3 md:w-96" @submit.prevent="submit">
        <div class="flex flex-col">
          <div class="flex items-baseline justify-between">
            <div class="text-2xl font-bold">
              <Lang>
                <template #zh> 管理器 </template>
                <template #en> Manager </template>
              </Lang>
            </div>
          </div>
        </div>

        <FormInput :form="form" name="url" type="url" required>
          <template #label>
            <Lang>
              <template #zh>数据库网址</template>
              <template #en>Database URL</template>
            </Lang>
          </template>
        </FormInput>

        <FormInput
          :form="form"
          name="token"
          type="password"
          autocomplete="current-password"
          required
        >
          <template #label>
            <Lang>
              <template #zh>令牌</template>
              <template #en>Token</template>
            </Lang>
          </template>
        </FormInput>

        <FormDivider />

        <FormButton :disabled="form.processing">
          <Lang>
            <template #zh>登录</template>
            <template #en>Sign In</template>
          </Lang>
        </FormButton>
      </form>

      <div class="py-16"></div>
    </div>
  </PageLayout>
</template>
