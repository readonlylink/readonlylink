<script setup lang="ts">
import { BookmarkIcon, BookmarkSlashIcon } from '@heroicons/vue/24/outline'
import Lang from '../../components/Lang.vue'
import { State } from './State'

defineProps<{ state: State }>()

function isSubscribed() {
  return true
}

async function subscribe() {
  //
}

async function unsubscribe() {
  //
}
</script>

<template>
  <div>
    <button
      v-if="isSubscribed()"
      class="flex items-center font-sans text-xl text-stone-400 hover:text-stone-800"
      @click="subscribe()"
    >
      <Lang>
        <template #zh> 订阅 </template>
        <template #en> SUBSCRIBE </template>
      </Lang>

      <BookmarkIcon class="w-5 w-5" />
    </button>

    <button
      v-else
      class="flex items-center font-sans text-xl text-stone-400 hover:text-stone-800"
      @click="unsubscribe()"
    >
      <Lang>
        <template #zh> 退订 </template>
        <template #en> UNSUBSCRIBE </template>
      </Lang>

      <BookmarkSlashIcon class="w-5 w-5" />
    </button>
  </div>
</template>
