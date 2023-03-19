<script setup lang="ts">
import ReadonlylinkArticle from './ReadonlylinkArticle.vue'
import ReadonlylinkAuthor from './ReadonlylinkAuthor.vue'
import ReadonlylinkBook from './ReadonlylinkBook.vue'
import ReadonlylinkManual from './ReadonlylinkManual.vue'
import ReadonlylinkUnknown from './ReadonlylinkUnknown.vue'
import { State } from './State'
import { stateReactive } from './stateReactive'

const props = defineProps<{ state: State }>()

const state = stateReactive(props.state)
</script>

<template>
  <!-- prettier-ignore -->
  <div>
    <ReadonlylinkArticle v-if="state.config.kind === 'Article'" :state="state" />
    <ReadonlylinkBook v-else-if="state.config.kind === 'Book'" :state="state" />
    <ReadonlylinkManual v-else-if="state.config.kind === 'Manual'" :state="state" />
    <ReadonlylinkAuthor v-else-if="state.config.kind === 'Author'" :state="state" />
    <ReadonlylinkUnknown v-else :state="state" />
  </div>
</template>
