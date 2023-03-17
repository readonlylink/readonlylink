<script setup lang="ts">
import Hyperlink from '../../components/Hyperlink.vue'
import Lang from '../../components/Lang.vue'
import { loadAuthors, State } from './State'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps<{ state: State }>()

const text = ref<string>(props.state.list.join('\n'))

const router = useRouter()

async function save() {
  const list = text.value.split('\n')
  props.state.list = list
  props.state.activities = []
  router.push('/subscriptions')
  props.state.authors = await loadAuthors(list)
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
