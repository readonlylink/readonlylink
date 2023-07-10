<template>
  <div class="overflow-auto">
    <div class="block overflow-auto sm:hidden">
      <slot name="mobile"></slot>
    </div>

    <div class="hidden overflow-auto sm:block">
      <slot name="desktop"></slot>
    </div>
  </div>
</template>
