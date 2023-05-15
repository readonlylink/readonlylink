import { markRaw } from 'vue'
import * as Plugins from '../components/md/Plugin'
import { stateResolveLink } from '../components/md/stateResolveLink'
import Mimor from './mimor/Mimor.vue'
import Readonlylink from './readonlylink/Readonlylink.vue'

export const plugins = [
  Plugins.ElementPlugin('readonlylink', markRaw(Readonlylink), (ctx) => ({
    url: stateResolveLink(ctx.state, ctx.element.attributes.href),
  })),

  Plugins.ElementPlugin('mimor', markRaw(Mimor), (ctx) => ({
    src: stateResolveLink(ctx.state, ctx.element.attributes.src),
  })),
]
