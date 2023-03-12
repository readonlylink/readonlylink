<script setup lang="ts">
import { useGlobalLang } from '../reactives/useGlobalLang'

const lang = useGlobalLang()
</script>

<template>
  <div>
    <slot v-if="lang.isZh()" name="zh"></slot>
    <slot v-if="lang.isEn()" name="en"></slot>
  </div>
</template>
