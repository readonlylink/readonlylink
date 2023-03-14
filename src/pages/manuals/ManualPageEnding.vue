<script setup lang="ts">
import Hyperlink from '../../components/Hyperlink.vue'
import IconArrowLeft from '../../components/icons/IconArrowLeft.vue'
import IconArrowRight from '../../components/icons/IconArrowRight.vue'
import { State } from './State'
import { stateNextPath } from './stateNextPath'
import { statePrevPath } from './statePrevPath'

defineProps<{ state: State }>()
</script>

<template>
  <div class="flex justify-center space-x-4">
    <div class="w-1/2 border border-gray-300" v-if="statePrevPath(state)">
      <Hyperlink
        :href="`/manuals/${state.url}/-/${statePrevPath(state)}`"
        title="Previous Page"
      >
        <div class="flex h-full p-3 text-gray-700 hover:text-gray-400">
          <div class="flex w-1/5 justify-start py-3">
            <IconArrowLeft class="w-6" />
          </div>

          <div
            class="flex w-4/5 items-center justify-center overflow-x-auto text-xl font-bold"
          >
            <div>
              {{
                state.documents[statePrevPath(state) as string].attributes.title
              }}
            </div>
          </div>
        </div>
      </Hyperlink>
    </div>

    <div class="w-1/2 border border-gray-300" v-if="stateNextPath(state)">
      <Hyperlink
        :href="`/manuals/${state.url}/-/${stateNextPath(state)}`"
        title="Next Page"
      >
        <div class="flex h-full p-3 text-gray-700 hover:text-gray-400">
          <div
            class="flex w-4/5 items-center justify-center overflow-x-auto text-xl font-bold"
          >
            <div>
              {{
                state.documents[stateNextPath(state) as string].attributes.title
              }}
            </div>
          </div>

          <div class="flex w-1/5 justify-end py-3">
            <IconArrowRight class="w-6" />
          </div>
        </div>
      </Hyperlink>
    </div>
  </div>
</template>
