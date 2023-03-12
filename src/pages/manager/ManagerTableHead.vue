<script setup lang="ts">
import { State } from './State'

defineProps<{ state: State }>()
</script>

<template>
  <tr>
    <th
      class="sticky left-0 border border-black bg-white text-right ring-1 ring-black"
    >
      <!-- negative margin for chrome (must use div) -->
      <div class="-m-0.5 border-r border-black px-3">#</div>
    </th>

    <!-- ring for firefox -->
    <!-- border for chrome -->
    <th
      v-for="{ name, kind } of state.table.columns"
      :key="name"
      class="overflow-auto whitespace-nowrap border border-black ring-1 ring-black"
      :class="[
        kind === 'Number' || kind === 'Boolean' ? 'text-right' : 'text-left',
      ]"
    >
      <div class="px-1">{{ name }}</div>
    </th>
  </tr>
</template>
