<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Lang from '../../components/Lang.vue'
import { useGlobalSubscription } from '../../reactives/useGlobalSubscription'
import { State } from './State'

const props = defineProps<{ state: State }>()

const subscription = useGlobalSubscription()

const text = ref<string>(subscription.list.join('\n'))

const router = useRouter()

async function save() {
  const list = text.value
    .trim()
    .split('\n')
    .map((url) => url.trim())
  props.state.list = list
  subscription.list = list
  router.push('/subscriptions')
}
</script>

<template>
  <div class="flex h-full flex-col">
    <div class="flex items-baseline justify-between">
      <Lang class="font-logo text-2xl font-semibold text-stone-800">
        <template #zh> 订阅列表 </template>
        <template #en> Subscriptions </template>
      </Lang>

      <div class="flex justify-end py-1">
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
    </div>

    <textarea v-model="text" class="h-full border border-black p-3"></textarea>
  </div>
</template>
