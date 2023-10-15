<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import EmbeddedArticleLoaded from './EmbeddedArticleLoaded.vue'
import { State } from './State'

const state = ref<State | undefined>(undefined)

const route = useRoute()

watchEffect(async () => {
  //
})
</script>

<template>
  <EmbeddedArticleLoaded v-if="state" :state="state" />
</template>
