<script setup lang="ts">
import { Bars3Icon } from '@heroicons/vue/24/outline'
import { ref, watch } from 'vue'
import ManualPageNav from './ManualPageNav.vue'
import { State } from './State'

const props = defineProps<{ state: State }>()

const showNav = ref(false)

const slotElement = ref<HTMLElement | undefined>(undefined)
const slotElementMobile = ref<HTMLElement | undefined>(undefined)

watch(
  () => props.state.path,
  () => {
    if (slotElement.value) {
      slotElement.value.scrollTo(0, 0)
    }

    if (slotElementMobile.value) {
      slotElementMobile.value.scrollTo(0, 0)
    }
  },
  {
    immediate: true,
  },
)
</script>

<template>
  <div class="h-screen-dynamic flex flex-col">
    <div class="hidden h-full overflow-y-auto sm:block">
      <div class="flex h-full overflow-y-auto">
        <ManualPageNav
          :state="state"
          class="overflow-y-auto"
          style="width: 420px"
        />

        <div ref="slotElement" class="w-full overflow-y-auto">
          <slot />
        </div>
      </div>
    </div>

    <div class="flex h-full flex-col sm:hidden">
      <div class="flex overflow-y-auto">
        <ManualPageNav
          v-if="showNav"
          :state="state"
          class="fixed z-20 h-full w-5/6 overflow-y-auto bg-white"
        />

        <div ref="slotElementMobile" class="w-full overflow-y-auto">
          <slot />
        </div>
      </div>

      <button
        class="fixed bottom-6 right-6 z-20 block rounded-full border border-stone-400 bg-white p-3 dark:bg-black sm:hidden"
        @click="showNav = !showNav"
        v-on-click-outside="
          () => {
            showNav = false
          }
        "
      >
        <Bars3Icon class="w-7 text-stone-500 dark:text-stone-300" />
      </button>
    </div>
  </div>
</template>
