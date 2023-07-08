<template>
  <div class="overflow-auto">
    <div class="block overflow-auto md:hidden">
      <slot name="mobile"></slot>
    </div>

    <div class="hidden overflow-auto md:block">
      <slot name="desktop"></slot>
    </div>
  </div>
</template>
