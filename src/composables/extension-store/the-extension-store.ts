import { ExtensionStore } from '../../components/md/extension-store'
import { registerExtensions } from './register-extensions'

const extensionStore = new ExtensionStore()
let registered = false

export function useExtensionStore() {
  if (!registered) {
    registerExtensions(extensionStore)
  }

  return extensionStore
}
