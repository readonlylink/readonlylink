<script setup>
import Lang from '../../components/lang/Lang.vue'
</script>

<template>
  <Lang class="font-logo text-2xl font-bold text-stone-500">
    <template #zh>
      <div>
        分享<span class="text-black">只读</span>链接，<br
          class="sm:hidden"
        /><span class="text-black">只</span>为享受阅<span class="text-black"
          >读</span
        >。
      </div>
    </template>
    <template #en>
      <div>
        <span class="text-black">Readonly</span> links,
        <br class="sm:hidden" />
        for your <span class="text-black">read only</span>.
      </div>
    </template>
  </Lang>
</template>
