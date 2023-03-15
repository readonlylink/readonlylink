import { onClickOutside as useOnClickOutside } from '@vueuse/core'
import { Directive } from 'vue'

export const onClickOutside: Directive = {
  mounted: (target, { value }) => useOnClickOutside(target, value),
}
