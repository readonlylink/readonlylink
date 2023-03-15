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
    <label :for="name" class="py-2 font-sans">
      <slot name="label" />
    </label>

    <div class="flex w-full items-center rounded-sm border border-stone-500">
      <select
        class="w-full bg-white px-2 py-3 font-bold disabled:bg-stone-100"
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
