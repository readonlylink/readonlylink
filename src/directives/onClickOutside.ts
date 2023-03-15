import { Directive } from 'vue'

export const onClickOutside: Directive = {
  mounted: (el) => el.blur(),
}
