<script setup lang="ts">
import 'mimor'
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import { useGlobalTheme } from '../../models/theme'

defineProps<{ src: string }>()

const lang = useGlobalLang()
const theme = useGlobalTheme()
</script>

<template>
  <div class="h-[36rem] w-full sm:w-[36rem]" title="An embedded mimor.">
    <x-mimor
      class="h-full"
      :src="src"
      :lang-tag="lang.tag"
      :theme-name="theme.name"
    />
  </div>
</template>
