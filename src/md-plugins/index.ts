import { markRaw } from 'vue'
import * as Plugins from '../components/md/Plugin'
import Mimorlink from './mimorlink/Mimorlink.vue'
import Readonlylink from './readonlylink/Readonlylink.vue'

export const plugins = [
  Plugins.ElementPlugin('readonlylink', markRaw(Readonlylink)),
  Plugins.ElementPlugin('mimorlink', markRaw(Mimorlink)),
]
