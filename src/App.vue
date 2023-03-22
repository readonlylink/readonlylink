<script setup lang="ts">
import { Head } from '@vueuse/head'
import { useGlobalTheme } from './reactives/useGlobalTheme'

const theme = useGlobalTheme()
</script>

<template>
  <Head>
    <meta name="theme-color" :content="theme.color" />
  </Head>

  <RouterView />
</template>
