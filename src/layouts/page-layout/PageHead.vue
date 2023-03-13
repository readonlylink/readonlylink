<script setup lang="ts">
import Hyperlink from '../../components/Hyperlink.vue'
import PageLogo from './PageLogo.vue'
import PageMenu from './PageMenu.vue'
import PageToolbar from './PageToolbar.vue'
</script>

<template>
  <div class="flex flex-col items-baseline justify-between pb-2">
    <div class="flex w-full flex-wrap items-baseline justify-between">
      <Hyperlink href="/">
        <PageLogo class="my-2">
          <slot></slot>
        </PageLogo>
      </Hyperlink>

      <PageToolbar />
    </div>

    <PageMenu />
  </div>
</template>
