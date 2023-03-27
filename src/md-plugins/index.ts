import { markRaw } from 'vue'
import * as Plugins from '../components/md/Plugin'
import Mimor from './mimor/Mimor.vue'
import Mimorlink from './mimorlink/Mimorlink.vue'
import Readonlylink from './readonlylink/Readonlylink.vue'

export const plugins = [
  Plugins.ElementPlugin('readonlylink', markRaw(Readonlylink)),
  Plugins.ElementPlugin('mimor', markRaw(Mimor)),
  Plugins.ElementPlugin('mimorlink', markRaw(Mimorlink)),
]
