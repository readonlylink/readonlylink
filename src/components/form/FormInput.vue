<script setup lang="ts">
import { Form } from './Form'

defineProps<{
  form: Form<any>
  name: string
}>()
</script>

<template>
  <div class="flex flex-col">
    <label :for="name" class="py-2 font-ui">
      <slot name="label" />
    </label>

    <div class="flex w-full items-center rounded-sm border border-black dark:border-white">
      <input
        class="w-full p-3 font-bold disabled:bg-stone-100 disabled:dark:bg-stone-800 bg-white dark:bg-black text-black dark:text-white"
        :id="name"
        :name="name"
        :value="form.values[name]"
        v-bind="$attrs"
      />

      <slot name="input-end" />
    </div>
  </div>
</template>
