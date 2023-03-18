import { Component } from 'vue'
import Activity from './activity/MdActivity.vue'
import Dedication from './dedication/MdDedication.vue'
import Default from './default/MdDefault.vue'

export const components: Record<string, Component> = {
  Default,
  Dedication,
  Activity,
}
