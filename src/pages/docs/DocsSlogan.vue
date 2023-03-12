<script setup lang="ts">
import { useGlobalLang } from '../../reactives/useGlobalLang'

const lang = useGlobalLang()
</script>

<template>
  <div>
    <div v-if="lang.isZh()">
      <div class="font-logo text-2xl font-semibold text-gray-500">
        <span class="text-gray-900">奇妙冒险</span>的<span class="text-gray-900"
          >急就章</span
        >
      </div>
    </div>
    <div v-else>
      <div class="font-logo text-2xl font-semibold text-gray-500">
        The <span class="text-gray-900">hurry proceeding</span>
        <br class="md:hidden" />
        to a <span class="text-gray-900">bizarre adventure</span>.
      </div>
    </div>
  </div>
</template>
