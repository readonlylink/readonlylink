<script setup lang="ts">
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import PageLang from './PageLang.vue'

const lang = useGlobalLang()
</script>

<template>
  <div class="flex">
    <PageLang class="text-stone-400 hover:text-stone-900" />
  </div>
</template>
