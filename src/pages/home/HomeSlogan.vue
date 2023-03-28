<script setup>
import Lang from '../../components/lang/Lang.vue'
</script>

<template>
  <Lang class="font-logo text-2xl font-semibold text-stone-500">
    <template #zh>
      <div>
        分享<span class="text-stone-900">只读</span>链接，<br
          class="md:hidden"
        /><span class="text-stone-900">只</span>为享受阅<span
          class="text-stone-900"
          >读</span
        >。
      </div>
    </template>
    <template #en>
      <div>
        <span class="text-stone-900">Readonly</span> links,
        <br class="md:hidden" />
        for your <span class="text-stone-900">read only</span>.
      </div>
    </template>
  </Lang>
</template>
