import { Directive } from 'vue'

export const blur: Directive = {
  mounted: (el) => el.blur(),
}
