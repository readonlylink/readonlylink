<script setup lang="ts">
import { reactive } from 'vue'
import TrapFocus from './TrapFocus.vue'

/*

   Always show the button, click the button to show the panel.

   - Close on click outside.

   - Close on escape.

   - After opened, trap focus inside the `Modal`,
     and the initial focus is the `panelElement`.

*/

const state = reactive({
  open: false,
})
</script>

<template>
  <div @keydown.escape.prevent.stop="state.open = false">
    <button type="button" @click="state.open = true">
      <slot name="button" :modal="state"></slot>
    </button>

    <Teleport to="body">
      <div
        v-show="state.open"
        class="fixed bottom-0 left-0 right-0 top-0 z-50"
        role="dialog"
        aria-modal="true"
      >
        <div
          class="fixed bottom-0 left-0 right-0 top-0 bg-black bg-opacity-50"
        ></div>

        <TrapFocus
          :open="state.open"
          tabindex="0"
          class="fixed bottom-0 left-0 right-0 top-0 flex flex-col items-center justify-center overflow-auto"
          @click="state.open = false"
        >
          <div
            @click.stop
            class="flex flex-col items-center justify-center overflow-y-auto"
          >
            <slot name="panel" :modal="state"></slot>
          </div>
        </TrapFocus>
      </div>
    </Teleport>
  </div>
</template>
