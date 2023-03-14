<script setup lang="ts">
import { Nodes } from '@xieyuheng/postmark'
import { watch } from 'vue'
import MdPage from '../../components/md/MdPage.vue'
import BookPageNavbar from './BookPageNavbar.vue'
import { State } from './State'

const props = defineProps<{ state: State; document: Nodes.Document }>()

// const title = computed(() =>
//   props.state.paginator
//     ? props.state.paginator.title + ' | ' + props.state.project.config.title
//     : props.state.project.config.title,
// )

watch(
  () => props.state.path,
  () => {
    window.scrollTo(0, 0)
  },
)
</script>

<template>
  <!-- <Head>
       <title>{{ title }}</title>
       </Head> -->

  <div class="flex h-screen flex-col px-6">
    <BookPageNavbar class="py-6" :state="state" />

    <MdPage
      :document="document"
      :customComponents="state.extensions.components"
    />

    <BookPageNavbar class="py-6" :state="state" />
  </div>
</template>
