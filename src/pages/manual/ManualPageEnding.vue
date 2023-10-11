<script setup lang="ts">
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/vue/24/outline'
import Hyperlink from '../../components/utils/Hyperlink.vue'
import { State } from './State'
import { stateNextPath } from './stateNextPath'
import { statePrevPath } from './statePrevPath'

defineProps<{ state: State }>()
</script>

<template>
  <div class="flex justify-center space-x-4">
    <div class="w-1/2 border border-stone-300" v-if="statePrevPath(state)">
      <Hyperlink
        :href="`/manuals/${state.url}/-/${statePrevPath(state)}`"
        :key="`/manuals/${state.url}/-/${statePrevPath(state)}`"
        title="Previous Page"
      >
        <div
          class="flex h-full p-3 text-black hover:text-stone-400 dark:text-white"
        >
          <div class="flex w-1/5 justify-start py-3">
            <ArrowLeftIcon class="w-6" />
          </div>

          <div
            class="flex w-4/5 items-center overflow-x-auto px-1 text-xl font-bold"
          >
            <div class="w-full text-center">
              {{
                state.documents[statePrevPath(state) as string].attributes.title
              }}
            </div>
          </div>
        </div>
      </Hyperlink>
    </div>

    <div class="w-1/2 border border-stone-300" v-if="stateNextPath(state)">
      <Hyperlink
        :href="`/manuals/${state.url}/-/${stateNextPath(state)}`"
        :key="`/manuals/${state.url}/-/${stateNextPath(state)}`"
        title="Next Page"
      >
        <div
          class="flex h-full p-3 text-black hover:text-stone-400 dark:text-white"
        >
          <div
            class="flex w-4/5 items-center overflow-x-auto px-1 text-center text-xl font-bold"
          >
            <div class="w-full text-center">
              {{
                state.documents[stateNextPath(state) as string].attributes.title
              }}
            </div>
          </div>

          <div class="flex w-1/5 justify-end py-3">
            <ArrowRightIcon class="w-6" />
          </div>
        </div>
      </Hyperlink>
    </div>
  </div>
</template>
