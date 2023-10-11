<script setup lang="ts">
import { Form } from './Form'

defineProps<{
  form: Form<any>
  name: string
  options: Record<string, string>
}>()
</script>

<template>
  <div class="flex flex-col">
    <label :for="name" class="py-2">
      <slot name="label" />
    </label>

    <div
      class="flex w-full items-center rounded-sm border border-black dark:border-white"
    >
      <select
        class="w-full bg-white bg-white px-2 py-3 font-bold text-black disabled:bg-stone-100 dark:bg-black dark:text-white disabled:dark:bg-stone-800"
        :id="name"
        :name="name"
        :value="form.values[name]"
        v-bind="$attrs"
      >
        <option v-for="(value, key) in options" :key="key" :value="key">
          {{ value }}
        </option>
      </select>

      <slot name="input-end" />
    </div>
  </div>
</template>
