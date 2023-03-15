<script setup lang="ts">
import { Form } from './Form'

defineProps<{
  form: Form<any>
  name: string
}>()
</script>

<template>
  <div class="flex flex-col">
    <label :for="name" class="py-2 font-sans">
      <slot name="label" />
    </label>

    <div class="flex w-full items-center rounded-sm border border-stone-500">
      <input
        class="w-full p-3 font-bold disabled:bg-stone-100"
        :id="name"
        :name="name"
        :value="form.values[name]"
        v-bind="$attrs"
      />

      <slot name="input-end" />
    </div>
  </div>
</template>
