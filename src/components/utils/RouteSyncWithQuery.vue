<script setup lang="ts">
import { reactive, watch } from 'vue'
import { LocationQueryRaw, useRoute, useRouter } from 'vue-router'
import { useCurrentPathname } from '../../reactives/useCurrentPathname'
import { useCurrentQuery } from '../../reactives/useCurrentQuery'

const props = defineProps<{
  name: string
  state: { open: boolean }
}>()

const router = useRouter()
const route = useRoute()

const local = reactive({
  isAfterCloseByRouteChange: false,
})

watch(
  () => props.state.open,
  (value) => {
    if (value) {
      router.push({
        path: useCurrentPathname(),
        query: {
          ...useCurrentQuery(),
          [props.name]: null,
        } as LocationQueryRaw,
      })
    } else {
      if (!local.isAfterCloseByRouteChange) {
        router.back()
      }
    }

    // Reset the flag.
    local.isAfterCloseByRouteChange = false
  },
)

watch(
  () => route.query[props.name],
  (value) => {
    props.state.open = value !== undefined

    if (!props.state.open) {
      local.isAfterCloseByRouteChange = true
    }
  },
  {
    deep: true,
    immediate: true,
  },
)
</script>

<template></template>
