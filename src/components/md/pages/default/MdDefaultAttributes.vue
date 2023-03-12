<template>
  <div class="flex flex-col font-sans text-gray-700">
    <div
      class="flex items-center font-bold"
      v-if="attributes.authors.length > 0"
    >
      <IconPencil class="w-5 shrink-0 pr-1" />
      <SpanJoin :items="attributes.authors">
        <template #item="{ name, username }">
          <Link
            class="hover:text-gray-400"
            v-if="username"
            :href="`/authors/${username}`"
            >{{ name }}</Link
          >
          <span v-else>{{ name }}</span>
        </template>
        <template #delimiter>
          <span class="pr-1">,</span>
        </template>
      </SpanJoin>
    </div>
    <div class="flex items-center" v-if="attributes.translators.length > 0">
      <IconTranslate class="w-5 shrink-0 pr-1" />
      <SpanJoin :items="attributes.translators">
        <template #item="{ name, username }">
          <Link
            class="hover:text-gray-400"
            v-if="username"
            :href="`/authors/${username}`"
            >{{ name }}</Link
          >
          <span v-else>{{ name }}</span>
        </template>
        <template #delimiter>
          <span class="pr-1">,</span>
        </template>
      </SpanJoin>
    </div>
    <div class="flex items-center" v-if="attributes.date">
      <IconCalendar class="w-5 shrink-0 pr-1" />
      {{ attributes.date }}
    </div>
    <div class="flex items-center" v-if="attributes.venue">
      <IconLocationMarker class="w-5 shrink-0 pr-1" />
      {{ attributes.venue }}
    </div>
    <div class="flex items-center" v-if="attributes.keywords.length > 0">
      <IconHashtag class="w-5 shrink-0 pr-1" />
      <SpanJoin :items="attributes.keywords.map((keyword) => ({ keyword }))">
        <template #item="{ keyword }">
          <span>{{ keyword }}</span>
        </template>
        <template #delimiter>
          <span class="pr-1">,</span>
        </template>
      </SpanJoin>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue"
import { normalizeAttributes } from "./normalize-attributes"

import SpanJoin from "../../../atoms/SpanJoin.vue"
import IconPencil from "../../../icons/IconPencil.vue"
import IconCalendar from "../../../icons/IconCalendar.vue"
import IconTranslate from "../../../icons/IconTranslate.vue"
import IconLocationMarker from "../../../icons/IconLocationMarker.vue"
import IconHashtag from "../../../icons/IconHashtag.vue"

const props = defineProps({ attributes: Object })

const attributes = computed(() => normalizeAttributes(props.attributes))
</script>
