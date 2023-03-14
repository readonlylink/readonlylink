<script setup lang="ts">
import { ref } from 'vue'
import ManualPageHead from './ManualPageHead.vue'
import ManualPageNavbar from './ManualPageNavbar.vue'
import { State } from './State'

const props = defineProps<{ state: State }>()

const showNavbar = ref(false)
</script>

<template>
  <div class="flex h-screen flex-col">
    <ManualPageHead
      class="fixed z-10 w-full bg-white px-6 opacity-90 md:relative md:py-2"
      :state="state"
      @toggleNavbar="showNavbar = !showNavbar"
    />

    <div class="hidden h-full overflow-y-auto md:block">
      <div class="flex h-full overflow-y-auto">
        <ManualPageNavbar :state="state" class="h-full overflow-y-auto" />

        <div class="w-full overflow-y-auto">
          <slot />
        </div>
      </div>
    </div>

    <div class="mt-10 md:hidden">
      <div class="flex overflow-y-auto">
        <ManualPageNavbar
          :is-mobile="true"
          v-if="showNavbar"
          :state="state"
          class="fixed z-20 h-full w-full overflow-y-auto"
        />

        <div class="w-full overflow-y-auto">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
