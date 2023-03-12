<script setup lang="ts">
import { Form } from './Form'

defineProps<{
  form: Form<any>
  name: string
}>()
</script>

<template>
  <div class="flex flex-col">
    <div class="flex w-full items-center pt-3 pb-2">
      <label :for="name" class="shrink-0 font-sans">
        <slot name="label" />
      </label>

      <input
        class="ml-1 h-5 w-5 font-bold disabled:bg-stone-100"
        :id="name"
        :name="name"
        type="checkbox"
        :checked="Boolean(form.values[name])"
        v-bind="$attrs"
      />
    </div>

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
