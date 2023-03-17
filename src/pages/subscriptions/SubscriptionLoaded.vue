<script setup lang="ts">
import { watch } from 'vue'
import { useRoute } from 'vue-router'
import { PencilSquareIcon } from '@heroicons/vue/24/outline'
import Hyperlink from '../../components/Hyperlink.vue'
import PageLayout from '../../layouts/page-layout/PageLayout.vue'
import { State } from './State'
import { stateReactive } from './stateReactive'
import SubscriptionAuthor from './SubscriptionAuthor.vue'
import SubscriptionActivity from './SubscriptionActivity.vue'

const props = defineProps<{ state: State }>()
const state = stateReactive(props.state)

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
    <div>
      <div class="relative">
        <div class="absolute z-10 right-0 top-0">
          <Hyperlink href="/subscriptions?kind=Editor">
            <button
              class="border border-black opacity-90 bg-white rounded-full p-2"
            >
              <PencilSquareIcon class="w-5 h-5" />
            </button>
          </Hyperlink>
        </div>

        <div class="flex space-x-3 py-4 overflow-x-auto pr-10">
          <SubscriptionAuthor
            v-for="(author, index) of state.authors"
            :key="index"
            :state="state"
            :author="author"
          />
        </div>
      </div>

      <div class="border-b border-black"></div>

      <div class="flex flex-col divide-y divide-black">
        <SubscriptionActivity
          v-for="(activity, index) of state.activities"
          :key="index"
          :state="state"
          :activity="activity"
        />
      </div>
    </div>
  </PageLayout>
</template>
