<script setup lang="ts">
import IconMenu from '../../components/icons/IconMenu.vue'
import { State } from './State'

defineProps<{ state: State }>()
</script>

<template>
  <div
    class="flex items-center border-b border-gray-300 shadow shadow-stone-200"
  >
    <button
      class="mr-3 block md:hidden"
      @click.capture.stop="(event) => $emit('toggleNavbar')"
    >
      <IconMenu class="w-7" />
    </button>
  </div>
</template>
