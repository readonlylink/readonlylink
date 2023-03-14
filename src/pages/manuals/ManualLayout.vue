<script setup lang="ts">
import { ref } from 'vue'
import IconMenu from '../../components/icons/IconMenu.vue'
import ManualPageNav from './ManualPageNav.vue'
import { State } from './State'

const props = defineProps<{ state: State }>()

const showNavbar = ref(false)
</script>

<template>
  <div class="flex h-screen flex-col">
    <div class="hidden h-full overflow-y-auto md:block">
      <div class="flex h-full overflow-y-auto">
        <ManualPageNav
          :state="state"
          class="overflow-y-auto"
          style="width: 420px"
        />

        <div class="w-full overflow-y-auto">
          <slot />
        </div>
      </div>
    </div>

    <div class="flex flex-col md:hidden">
      <div class="flex overflow-y-auto">
        <ManualPageNav
          v-if="showNavbar"
          :state="state"
          class="fixed z-20 h-full w-5/6 overflow-y-auto bg-white"
        />

        <div class="w-full overflow-y-auto">
          <slot />
        </div>
      </div>

      <button
        class="fixed bottom-6 right-6 z-20 block rounded-full border border-stone-400 bg-white p-3 md:hidden"
        @click="showNavbar = !showNavbar"
      >
        <IconMenu class="w-7 text-stone-500" />
      </button>
    </div>
  </div>
</template>
