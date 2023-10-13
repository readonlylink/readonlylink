<script setup lang="ts">
import { Head } from '@vueuse/head'
import { watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import FollowingEditor from './FollowingEditor.vue'
import FollowingList from './FollowingList.vue'
import { State } from './State'
import { stateWatch } from './stateReactive'

const props = defineProps<{ state: State }>()

const lang = useGlobalLang()
const route = useRoute()

stateWatch(props.state)

watchEffect(() => {
  if (route.query['kind']) {
    props.state.kind = String(route.query['kind'])
  }
})
</script>

<template>
  <PageLayout>
    <Head>
      <title v-if="lang.isZh()">关注 | 只读</title>
      <title v-else>Following | Readonly</title>
    </Head>

    <FollowingEditor v-if="state.kind === 'Editor'" :state="state" />
    <FollowingList v-else :state="state" />
  </PageLayout>
</template>
