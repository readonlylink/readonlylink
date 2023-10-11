<script setup lang="ts">
import { Form } from './Form'

defineProps<{
  form: Form<any>
  name: string
}>()
</script>

<template>
  <div class="flex flex-col">
    <div class="flex w-full items-center pb-2 pt-3">
      <label :for="name" class="shrink-0">
        <slot name="label" />
      </label>

      <input
        class="ml-1 h-5 w-5 bg-white font-bold text-black disabled:bg-stone-100 dark:bg-black dark:text-white disabled:dark:bg-stone-800"
        :id="name"
        :name="name"
        type="checkbox"
        :checked="Boolean(form.values[name])"
        v-bind="$attrs"
      />
    </div>
  </div>
</template>
