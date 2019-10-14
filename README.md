# Vuex Composition Modules
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Build Status](https://travis-ci.org/PatrykWalach/vuex-composition-api.svg?branch=master)](https://travis-ci.org/PatrykWalach/vuex-composition-api)
[![codecov](https://codecov.io/gh/PatrykWalach/vuex-composition-api/branch/master/graph/badge.svg)](https://codecov.io/gh/PatrykWalach/vuex-composition-api)
## Install 
```sh
npm i vuex-composition-api
```
## About
This module tries to mimic [@vue/composition-api](https://github.com/vuejs/composition-api) syntax inside [Vuex](https://github.com/vuejs/vuex) modules.
## API

### `CompositionApi`
It installs Vuex as well as @vue/composition-api.

```typescript
import CompositionApi from 'vuex-composition-modules'
import Vue from 'vue'
Vue.use(CompositionApi)
```
It allows modules to be injected into Vue instance.
```typescript
const modules = { Main }
new Vue({
  modules,
  render: h => h(App),
}).$mount('#app')
```
Declaration file can be used for type safety.
```typescript
import { Module } from 'vuex-composition-api/dist/module'
import Vue from 'vue'
import { modules } from '@/store'

declare module 'vue/types/vue' {
  interface Vue {
    $modules: typeof modules
  }
}

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    modules?: Record<string, Module<any>>
  }
}
```
### `CompositionApi.Store`
Doesn't differ from normal Vuex store.

```typescript
const store = new CompositionApi.Store({})
export default store
```

Using it only during development is recommended since vuex doesn't provide type safety and takes up additional memory.

```typescript
const store =
  process.env.NODE_ENV === 'production'
    ? undefined
    : new VuexCompositionApi.Store({})
```
  
### `CompositionApi.Module`
Module requires name and a setup function

Setup function returns state, getters, mutations and actions
```typescript
new CompositionApi.Module({
    name: 'module',
    setup(){
        return {
            state: {},
            getters: {},
            mutations: {},
            actions: {},
        }
    }
})
```

Setup function provides state, getter and mutation
```typescript
new CompositionApi.Module({
    name: 'module',
    setup({ state, getter, mutation }){
    }
})
```

Setup results can be accessed directly

```typescript
const module = new CompositionApi.Module({
    name: 'module',
    setup({ state }){
        return {
            state: {
                x: state(null)
            }
        }
    },
    namespaced: true
})

module.state.x.value // expected result: null
```

Modules can be namespaced
```typescript
new CompositionApi.Module({
    name: 'module',
    setup,
    namespaced: true
})
```

Subscribing to a module will execute given callback on every commit

```typescript
const Main = new CompositionApi.Module({
    name: 'main',
    setup(){
      const data = state([''])
      
      const CHANGE_DATA = mutation('CHANGE_DATA', { data }, (state, payload) => state.data = payload )

      ...
    },
    namespaced: true
})

Main.subscribe(({ type, payload }, state) => {
type // expected output: 'CHANGE_DATA'
payload // expected output: ['null']
state // expected output: { data: { value: ['null'] }}
})

Main.mutations.CHANGE_DATA(['null'])
```

### `CompositionApi.Plugin`
Plugin recives array of `Modules` as argument
Creating `Store` and using the plugin is optional, the modules can be used independently, however calling it allows for tracking state, getters and commits with [vue-devtools](https://github.com/vuejs/vue-devtools)

```typescript
const x = new CompositionApi.Module(options)
const y = new CompositionApi.Module(options)

CompositionApi.Store({
    plugins: [CompositionApi.Plugin([x, y])]
})
```

### `state()`
Can be accessed by calling `.value`

```typescript
const x = state(null)
x.value // expected output: null
```

Can't be set directly

```typescript
const x = state(null)
x.value = ''// will throw an Error
```

Can be set using `._replace()`

Although it is not recommended, because it won't change state inside Vuex

```typescript
const x = state(null)
x._replace('')
x.value // expected output: ''
```

### `getter()`
Can be accessed by calling `.value`

```typescript
const x = state(null)
const y = getter(() => x.value)
y.value // expected output: null
```

Can't be set
```typescript
const x = state(null)
const y = getter(() => x.value)
y.value = '' // will throw an Error
```

The original function can be accessed by `._getter`
```typescript
const x = state(null)
const y = getter(() => x.value)
y._getter // expected output: () => x.value
```

### `mutation()`
Is bound to the given module

It takes object made of `State` and retrives writable verion of it inside a callback

```typescript
const x = state(null)
const CHANGE_X = mutation('CHANGE_X', { x }, (state, newX) => state.x = newX)
CHANGE_X('')
x.value // expected output: ''
```

Please don't deconstruct the state or it will lose it's reactivity!
```typescript
const x = state(null)
const CHANGE_X = mutation('CHANGE_X', { x }, ({ x }, newX) => x = newX)
CHANGE_X('')
x.value // expected output: null
```

## Example
### 1#
`@/store/index.ts`
 ```typescript
import Vue from 'vue'

import CompositionApi, { State } from '@/vuex-composition-api'

Vue.use(CompositionApi)

export const Main = new CompositionApi.Module({
  name: 'main',
  namespaced: true,
  setup({ state, getter, mutation }) {
    const data: State<{ x: string } | null> = state(null)

    const arrayData: State<string[]> = state([])

    const getAllData = getter(() => {
      return {
        data: data.value,
        arrayData: arrayData.value,
      }
    })

    const CHANGE_DATA = mutation(
      'CHANGE_DATA',
      { data },
      (state, value: { x: string } | null) => {
        state.data = value
      },
    )

    const PUSH_ARRAY_DATA = mutation(
      'PUSH_ARRAY_DATA',
      { arrayData },
      (state, value: string[]) => {
        state.arrayData.push(...value)
      },
    )

    const logAndPushData = (payload: string[]) => {
      PUSH_ARRAY_DATA(payload)
    }

    return {
      state: {
        data,
        arrayData,
      },
      getters: {
        getAllData,
      },
      mutations: {
        PUSH_ARRAY_DATA,
        CHANGE_DATA,
      },
      actions: {
        logAndPushData,
      },
    }
  },
})

const store = new CompositionApi.Store({
  plugins: [CompositionApi.Plugin([Main])],
})

export default store
```

`@/App.vue`
```html
<template> 
  <div>
      <button @click="CHANGE_DATA({ x: Math.random().toString() })">
        CHANGE_DATA
      </button>
      <button @click="logAndPushData([Math.random().toString()])">
        LOG AND PUSH DATA
      </button>
      {{ getAllData }}
  </div>
</template> 
<script lang="ts">
import { Main } from '@/store'

export default createComponent({
  name: 'app',
  setup() {
    const { getters, mutations, actions } = Main

    return { ...getters, ...mutations, ...actions }
  },
  components: {
    HelloWorld,
  },
})
</script>
```

### 2#

`@/store/index.ts`
```typescript
...

export const modules = { Main }
const store = new CompositionApi.Store({
  plugins: [CompositionApi.Plugin([Main])],
})

export default store
```

`@/main.ts`
```typescript
...
import store, { modules } from '@/store'

new Vue({
  modules,
  render: h => h(App),
  store,
}).$mount('#app')
```
`@/vue.d.ts`
```typescript
import { Module } from 'vuex-composition-api/dist/module'
import Vue from 'vue'
import { modules } from '@/store'

declare module 'vue/types/vue' {
  interface Vue {
    $modules: typeof modules
  }
}

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    modules?: Record<string, Module<any>>
  }
}

```

`@/App.vue`
```html
...
<script lang="ts">
export default createComponent({
  setup(_, { root }) {
    const { getters, mutations, actions } = root.$modules.Main

    return { ...getters, ...mutations, ...actions }
  },
  ...
})
</script>
```