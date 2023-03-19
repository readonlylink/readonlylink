<script setup lang="ts">
// We can not use <RouterLink> in headlessui:
// - https://github.com/tailwindlabs/headlessui/issues/143
</script>

<template>
  <a
    class="cursor-pointer"
    @click.prevent="
      () => {
        if (typeof $attrs.href === 'string') {
          if ($attrs.mode === 'replace') {
            $router.replace($attrs.href)
          } else {
            $router.push($attrs.href)
          }
        }
      }
    "
    ><slot
  /></a>
</template>
