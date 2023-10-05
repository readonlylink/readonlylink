<script setup lang="ts">
import { Head } from '@vueuse/head'
import { watch } from 'vue'
import { useRoute } from 'vue-router'
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import { State } from './State'
import FollowingEditor from './FollowingEditor.vue'
import FollowingList from './FollowingList.vue'
import { stateReactive } from './stateReactive'

const props = defineProps<{ state: State }>()

const state = stateReactive(props.state)
const lang = useGlobalLang()
const route = useRoute()

watch(
  () => route.query['kind'],
  (value) => {
    const kind = value ? String(value) : undefined
    state.kind = kind
  },
  {
    immediate: true,
  },
)
</script>

<template>
  <PageLayout>
    <Head>
      <title v-if="lang.isZh()">订阅 | 只读</title>
      <title v-else>Following | Readonly</title>
    </Head>

    <FollowingEditor v-if="state.kind === 'Editor'" :state="state" />
    <FollowingList v-else :state="state" />
  </PageLayout>
</template>
