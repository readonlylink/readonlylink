<script setup lang="ts">
import { Form } from './Form'

defineProps<{
  form: Form<any>
  name: string
}>()
</script>

<template>
  <div class="flex flex-col">
    <label :for="name" class="py-2">
      <slot name="label"></slot>
    </label>

    <textarea
      class="w-full rounded-sm border border-black dark:border-white p-3 disabled:bg-stone-100 bg-white dark:bg-black text-black dark:text-white disabled:dark:bg-stone-800"
      :id="name"
      :name="name"
      :value="String(form.values[name])"
      v-bind="$attrs"
    ></textarea>
  </div>
</template>
