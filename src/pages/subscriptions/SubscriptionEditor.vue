<script setup lang="ts">
import Hyperlink from '../../components/Hyperlink.vue'
import Lang from '../../components/Lang.vue'
import { State } from './State'
import { ref } from 'vue'

const props = defineProps<{ state: State }>()

const text = ref<string>(props.state.list.join('\n'))

function save() {
  props.state.list = text.value.split('\n')
}
</script>

<template>
  <div class="flex flex-col h-full">
    <div class="flex py-1 justify-end">
      <button
        @click="save()"
        class="font-sans text-stone-400 hover:text-stone-900"
      >
        <Lang>
          <template #zh> 保存 </template>
          <template #en> SAVE </template>
        </Lang>
      </button>
    </div>

    <textarea v-model="text" class="border border-black p-3 h-full"></textarea>
  </div>
</template>
