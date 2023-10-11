<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Lang from '../../components/lang/Lang.vue'
import { useFollowing } from '../../models/following'
import { State } from './State'

const props = defineProps<{ state: State }>()

const following = useFollowing()

const text = ref<string>(following.list.join('\n'))

const router = useRouter()

async function save() {
  const list = text.value
    .trim()
    .split('\n')
    .map((url) => url.trim())
  props.state.list = list
  following.list = list
  router.push('/following')
}
</script>

<template>
  <div class="flex h-full flex-col">
    <div class="flex items-baseline justify-between">
      <Lang class="text-2xl font-bold">
        <template #zh> 关注列表 </template>
        <template #en> Following </template>
      </Lang>

      <div class="flex justify-end py-1">
        <button
          @click="save()"
          class="text-stone-400 hover:text-black dark:hover:text-white"
        >
          <Lang>
            <template #zh> 保存 </template>
            <template #en> SAVE </template>
          </Lang>
        </button>
      </div>
    </div>

    <textarea
      v-model="text"
      class="h-full border border-black bg-white p-2 text-black dark:border-white dark:bg-black dark:text-white"
    ></textarea>
  </div>
</template>
