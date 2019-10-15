import { Module } from './module'
import { Store } from 'vuex'
import { mutable } from './apis/mutation'

export const plugin = (modules: Module<any>[]) => (store: Store<any>) =>
  modules.forEach(
    ({ name, state, rawModule, registerStore, _mutations, options }) => {
      store.registerModule(name, rawModule)

      store.subscribe(({ type, payload }) => {
        let mutationName = ''
        if (options.namespaced) {
          const splitName = type.split('/')

          if (splitName.length === 2) {
            const [moduleName, _mutationName] = splitName
            if (moduleName === name) {
              mutationName = _mutationName
            }
          }
        } else {
          mutationName = type
        }
        if (mutationName && _mutations.hasOwnProperty(mutationName)) {
          _mutations[mutationName](mutable(state), payload)
        }
      })

      registerStore(({ type, payload }) => {
        store.commit(type, payload)
      })
    },
  )
