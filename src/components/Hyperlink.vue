<script setup lang="ts"></script>

<!--

     We use our custom <Hyperlink> instead of <RouterLink>,
     so that we can add some behaviors to every links.

     For example, we can not use <RouterLink> in headlessui:
     - https://github.com/tailwindlabs/headlessui/issues/143

-->

<template>
  <RouterLink v-bind="$attrs" :to="$attrs.href"><slot /></RouterLink>
</template>

<!--
     <template>
     <a class="cursor-pointer" @click.prevent="$router.push($attrs.href)"
     ><slot
     /></a>
     </template>
-->
