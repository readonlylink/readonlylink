import { Directive } from 'vue'

export const blur: Directive = {
  mounted: (target) => target.blur(),
}
