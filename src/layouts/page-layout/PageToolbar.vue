<script setup lang="ts">
import { LanguageIcon } from '@heroicons/vue/24/outline'
import { useGlobalLang } from '../../reactives/useGlobalLang'
import PageLang from './PageLang.vue'

const lang = useGlobalLang()
</script>

<template>
  <div class="flex">
    <PageLang class="text-stone-400 hover:text-stone-900" />
  </div>
</template>
