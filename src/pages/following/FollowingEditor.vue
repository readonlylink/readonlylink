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
      <Lang class="font-logo text-2xl font-bold">
        <template #zh> 关注列表 </template>
        <template #en> Following </template>
      </Lang>

      <div class="flex justify-end py-1">
        <button @click="save()" class="font-ui text-stone-400 hover:text-black">
          <Lang>
            <template #zh> 保存 </template>
            <template #en> SAVE </template>
          </Lang>
        </button>
      </div>
    </div>

    <textarea v-model="text" class="h-full border border-black p-2"></textarea>
  </div>
</template>
../../models/following ../../models/following
