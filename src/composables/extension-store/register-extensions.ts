import ty from '@xieyuheng/ty'
import YAML from 'js-yaml'
import { markRaw } from 'vue'
import { ExtensionStore } from '../../components/md/extension-store'
import { Dialog } from '../../models/dialog'
import { Poem } from '../../models/poem'
import { Reminder } from '../../models/reminder'

export function registerExtensions(store: ExtensionStore): void {
  store.register<{ pathname: string }>({
    kind: 'CustomBlock',
    customKind: 'LinkCard',
    recognize: ({ name }) => name.toLowerCase() === 'link-card',
    parse: (text) =>
      ty.object({ pathname: ty.string() }).validate(YAML.load(text)),
    component: markRaw(
      require('../../extensions/link-card/LinkCard.vue').default,
    ),
    props: (node) => ({
      pathname: node.value.pathname,
    }),
  })

  store.register<{ index: number }>({
    kind: 'CustomBlock',
    customKind: 'Lambda',
    recognize: ({ name }) => name.toLowerCase() === 'lambda',
    parse: (_text, { index }) => ({ index }),
    component: markRaw(
      require('../../extensions/lambda-block/LambdaBlock.vue').default,
    ),
    props: (node) => ({
      index: node.value.index,
      info: node.info,
      text: node.text.trimEnd(),
    }),
  })

  store.register<{ index: number }>({
    kind: 'CustomBlock',
    customKind: 'Cicada',
    recognize: ({ name }) => name.toLowerCase() === 'cicada',
    parse: (_text, { index }) => ({ index }),
    component: markRaw(
      require('../../extensions/cicada-block/CicadaBlock.vue').default,
    ),
    props: (node) => ({
      index: node.value.index,
      info: node.info,
      text: node.text.trimEnd(),
    }),
  })

  store.register<null>({
    kind: 'CustomBlock',
    customKind: 'Katex',
    recognize: ({ name }) => name.toLowerCase() === 'katex',
    component: markRaw(
      require('../../extensions/katex-block/KatexBlock.vue').default,
    ),
    props: (node) => ({
      text: node.text.trimEnd(),
    }),
  })

  store.register<Dialog>({
    kind: 'CustomItem',
    customKind: 'Dialog',
    recognize: (item) =>
      item.start.some((tag) => tag.name.toLowerCase() === 'dialog'),
    build: Dialog.build,
    component: markRaw(
      require('../../extensions/dialog-item/DialogItem.vue').default,
    ),
    props: (node) => ({
      dialog: node.value,
    }),
  })

  store.register<Reminder>({
    kind: 'CustomItem',
    customKind: 'Reminder',
    recognize: (item) =>
      item.start.some((tag) => tag.name.toLowerCase() === 'reminder'),
    build: Reminder.build,
    component: markRaw(
      require('../../extensions/reminder-item/ReminderItem.vue').default,
    ),
    props: (node) => ({
      reminder: node.value,
    }),
  })

  store.register<Poem>({
    kind: 'CustomItem',
    customKind: 'PoemVertical',
    recognize: (item) =>
      item.start.some((tag) => tag.name.toLowerCase() === 'poem-vertical'),
    build: Poem.build,
    component: markRaw(
      require('../../extensions/poem-vertical-item/PoemVerticalItem.vue')
        .default,
    ),
    props: (node) => ({
      poem: node.value,
    }),
  })
}
