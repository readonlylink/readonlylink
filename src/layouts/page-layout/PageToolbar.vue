<script setup lang="ts">
import Hyperlink from '../../components/Hyperlink.vue'
import IconTranslate from '../../components/icons/IconTranslate.vue'
import Lang from '../../components/Lang.vue'
import { useGlobalLang } from '../../reactives/useGlobalLang'
import PageLang from './PageLang.vue'

const lang = useGlobalLang()
</script>

<template>
  <div class="flex">
    <div class="mr-2 flex text-stone-400 hover:text-stone-900">
      <PageLang />

      <IconTranslate class="w-5 p-px" />
    </div>

    <!-- <UserMenu v-if="$page.props.auth.user" :user="$page.props.auth.user" /> -->

    <div class="flex flex-wrap font-sans text-stone-400">
      <Hyperlink class="mr-2 hover:text-stone-900" href="/login">
        <Lang>
          <template #zh> 登录 </template>
          <template #en> LOGIN </template>
        </Lang>
      </Hyperlink>

      <Hyperlink class="hover:text-stone-900" href="/register">
        <Lang>
          <template #zh> 注册 </template>
          <template #en> REGISTER </template>
        </Lang>
      </Hyperlink>
    </div>
  </div>
</template>
