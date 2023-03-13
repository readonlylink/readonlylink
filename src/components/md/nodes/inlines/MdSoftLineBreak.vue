<template>
  <br v-if="state.document.attributes.newline === 'preserve'" />
  <span v-else ref="softLineBreakElement">
    <span v-if="needBreak">&nbsp;</span>
  </span>
</template>

<script setup>
import { Nodes } from '@xieyuheng/postmark'
import { computed, ref, watch } from 'vue'
import { MdPageState as State } from '../../md-page-state'

defineProps({ state: State, node: Nodes.SoftLineBreak })

const softLineBreakElement = ref(null)
const needBreak = ref(true)

const previousChar = computed(() => {
  const previousElement = softLineBreakElement.value?.previousElementSibling
  if (previousElement && previousElement.innerText) {
    const text = previousElement.innerText
    return text[text.length - 1]
  }
})

watch(
  previousChar,
  () => {
    if (
      previousChar.value &&
      isCJKAndFullwidthPunctuation(previousChar.value)
    ) {
      needBreak.value = false
    }
  },
  { immediate: true },
)

function isCJKAndFullwidthPunctuation(char) {
  // NOTE https://en.wikipedia.org/wiki/CJK_Symbols_and_Punctuation
  if (/[\u3000-\u303F]/u.test(char)) return true
  // NOTE https://en.wikipedia.org/wiki/Halfwidth_and_Fullwidth_Forms_(Unicode_block)
  if (/[\uFF00-\uFFEF]/u.test(char)) return true
  // NOTE https://en.wikipedia.org/wiki/General_Punctuation
  if (/[\u2000-\u206F]/u.test(char)) return true
  return false
}
</script>
