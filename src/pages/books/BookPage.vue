<script setup lang="ts">
import MdPage from '../../components/md/MdPage.vue'
import { State } from './State'
import { stateDocuments } from './stateDocuments'
// import BookPageNavbar from "./BookPageNavbar.vue"

const props = defineProps<{ state: State; path: string }>()

// const title = computed(() =>
//   props.state.paginator
//     ? props.state.paginator.title + ' | ' + props.state.project.config.title
//     : props.state.project.config.title,
// )
//
// watch(
//   () => props.state.project.link.path,
//   () => {
//     window.scrollTo(0, 0)
//   },
// )
</script>

<template>
  <!-- <Head>
       <title>{{ title }}</title>
       </Head> -->

  <div class="flex h-screen flex-col px-6">
    <!-- <BookPageNavbar class="py-6" :state="state" /> -->

    <MdPage
      :document="stateDocuments(state)[path]"
      :customComponents="state.extensions.components"
    />

    <!-- <BookPageNavbar class="py-6" :state="state" /> -->
  </div>
</template>
