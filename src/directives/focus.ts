import { Directive } from 'vue'

export const focus: Directive = {
  mounted: (target) => target.focus(),
}
