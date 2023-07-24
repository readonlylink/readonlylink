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
      <slot name="label"></slot>
    </label>

    <textarea
      class="w-full rounded-sm border border-stone-500 p-3 disabled:bg-stone-100"
      :id="name"
      :name="name"
      :value="String(form.values[name])"
      v-bind="$attrs"
    ></textarea>
  </div>
</template>
