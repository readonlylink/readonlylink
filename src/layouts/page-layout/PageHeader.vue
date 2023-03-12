<script setup lang="ts">
import PageLogo from './PageLogo.vue'
import PageMenu from './PageMenu.vue'
import PageToolbar from './PageToolbar.vue'

defineProps<{ noToolbar: Boolean }>()
</script>

<template>
  <div class="flex flex-col items-baseline justify-between pb-2">
    <div class="flex w-full flex-wrap items-baseline justify-between">
      <Link href="/">
        <PageLogo class="my-2">
          <slot></slot>
        </PageLogo>
      </Link>

      <PageToolbar v-if="!noToolbar" />
    </div>

    <PageMenu />
  </div>
</template>
