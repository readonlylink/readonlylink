import { markRaw } from 'vue'
import * as Plugins from '../components/md/Plugin'
import Readonlylink from './readonlylink/Readonlylink.vue'

export const plugins = [
  Plugins.ElementPlugin('readonlylink', markRaw(Readonlylink)),
  Plugins.ElementPlugin('只读链接', markRaw(Readonlylink)),
]
