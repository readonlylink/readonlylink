<script setup>
import Lang from '../../components/Lang.vue'
</script>

<template>
  <Lang>
    <template #zh>
      <div class="font-logo text-2xl font-semibold text-stone-500">
        <span class="text-stone-900">书籍</span>与<span class="text-stone-900"
          >文章</span
        >的<span class="text-stone-900">邀请</span>
      </div>
    </template>
    <template #en>
      <div class="font-logo text-2xl font-semibold text-stone-500">
        An <span class="text-stone-900">invitation</span>
        <br class="md:hidden" />
        from <span class="text-stone-900">books</span> and
        <span class="text-stone-900">articles</span>.
      </div>
    </template>
  </Lang>
</template>
