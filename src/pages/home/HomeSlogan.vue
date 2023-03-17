<script setup>
import Lang from '../../components/Lang.vue'
</script>

<template>
  <Lang>
    <template #zh>
      <div class="font-logo text-2xl font-semibold text-stone-500">
        分享<span class="text-stone-900">只读连接</span>，<span
          class="text-stone-900"
          >只为</span
        >享受<span class="text-stone-900">阅读</span>。
      </div>
    </template>
    <template #en>
      <div class="font-logo text-2xl font-semibold text-stone-500">
        <span class="text-stone-900">Readonly link</span>,
        <br class="md:hidden" />
        for your <span class="text-stone-900">read only</span>.
      </div>
    </template>
  </Lang>
</template>
