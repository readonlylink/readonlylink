<script setup lang="ts">
import {
  ArrowsUpDownIcon,
  CheckIcon,
  LanguageIcon,
} from '@heroicons/vue/24/outline'
import Lang from '../../components/lang/Lang.vue'
import { langTagName, useGlobalLang } from '../../components/lang/useGlobalLang'
import List from '../../components/utils/ListFocusKeyboardUpAndDown.vue'
import Popup from '../../components/utils/Popup.vue'

const lang = useGlobalLang()
</script>

<template>
  <Popup class="relative flex">
    <template #button>
      <div class="flex items-center">
        <Lang>
          <template #zh>语言</template>
          <template #en>Lang</template>
        </Lang>

        <ArrowsUpDownIcon class="h-5 w-5" />
        <LanguageIcon class="w-5 p-px" />
      </div>
    </template>

    <template #panel="{ popup }">
      <Transition
        enterActiveClass="transition duration-100 ease-out"
        enterFromClass="transform scale-95 opacity-0"
        enterToClass="transform scale-100 opacity-100"
        leaveActiveClass="transition duration-75 ease-out"
        leaveFromClass="transform scale-100 opacity-100"
        leaveToClass="transform scale-95 opacity-0"
      >
        <List
          v-show="popup.open"
          class="absolute right-0 top-9 min-w-max border bg-white"
          :entries="
            lang.knownTags.map((tag) => ({ tag, name: langTagName(tag) }))
          "
        >
          <template #entry="{ entry }">
            <button
              class="flex min-w-max items-center px-2 py-1"
              @click="
                () => {
                  lang.tag = entry.tag
                  popup.open = false
                }
              "
            >
              <span>{{ entry.name }}</span>
              <CheckIcon v-if="lang.tag === entry.tag" class="ml-2 h-5 w-5" />
            </button>
          </template>
        </List>
      </Transition>
    </template>
  </Popup>
</template>
