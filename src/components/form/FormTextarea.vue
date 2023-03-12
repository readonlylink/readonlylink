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
      <slot name="label"></slot>
    </label>

    <textarea
      class="w-full rounded-sm border border-stone-500 p-3 disabled:bg-stone-100"
      :id="name"
      :name="name"
      :value="String(form.values[name])"
      v-bind="$attrs"
    ></textarea>

    <ol
      v-if="form.unprocessable?.errors[name]"
      class="list-inside list-disc py-1 text-base font-bold text-orange-400"
    >
      <li
        v-for="(message, index) of form.unprocessable.errors[name]"
        :key="index"
      >
        {{ message }}
      </li>
    </ol>
  </div>
</template>
