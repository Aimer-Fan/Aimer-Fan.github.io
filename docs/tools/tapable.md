# Tapable

[github 地址](https://github.com/webpack/tapable#tapable)

Tapable 暴露了许多钩子类，可以为插件创建钩子函数。可以理解为 tapable 提供了很多不同类型的任务队列，我们可以先向这个任务队列中注册不同的执行函数，等到任务队列执行时，会根据某种规则执行队列中的函数。

```js
const {
	SyncHook, // 同步钩子，注册的执行函数会按照队列以此执行
	SyncBailHook, // 同步钩子，如果执行函数存在返回值，则会中断执行队列
	SyncWaterfallHook, // 同步钩子，上一个函数的返回值会传递给下一个函数
	SyncLoopHook, // 同步钩子，如果队列中一个函数返回值不为 undefined，将会重头开始整个任务队列，直到所有的执行函数都返回 undefined
	AsyncParallelHook, // 异步并行的执行队列中的函数
	AsyncParallelBailHook, // 异步并行，如果执行函数返回了任意值，就会终止后续未开启的执行函数（主要是同步的执行函数后跟随异步执行函数）
	AsyncSeriesHook, // 异步串行
	AsyncSeriesBailHook, // 异步串行，上一个函数返回了任意值都会终止队列
	AsyncSeriesWaterfallHook // 异步串行，上一个执行函数的返回值会传递给下一个执行函数
 } = require("tapable");
```

## 安装

```shell
npm i tapable
```

## 使用

### 最佳实践

```js
const hook = new SyncHook(['arg1', 'arg2'])
```

将所有的钩子暴露为类的属性。

```js
class Animal {
  constructor () {
    this.hooks = {
      sleep: new tapable.AsyncParallelBailHook(['time'])
    }
  }
}
```

使用对应的方法如`tap`注册执行函数。

```js
const animal = new Animal()
animal.hooks.sleep.tap('sleepSyncHandler', (time) => console.log('i will sleep ' + time + 'hours.'))
```

`tap`方法只能注册同步类型的执行函数。如果需要注册异步的执行函数，可以使用`tapAsync`或者`tapPromise`方法。

```js
animal.hooks.sleep.tapAsync('sleepAsyncHandler', (time, callback) => { // tapAsync 提供一个 callback 方法，调用 callback 表示异步任务结束
  setTimeout(() => {
    console.log('i will sleep ' + time + 'hours.')
    callback()
  }, 1000)
})
```

```js
animal.hooks.sleep.tapPromise('sleepPromiseHandler', (time) => { // tapPromise 需要返回一个 Promise
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('i will sleep ' + time + 'hours.')
      resolve()
    }, 1000)
  })
})
```

使用`call`方法可以执行当前队列中注册的所有执行函数。

```js
animal.hooks.sleep.call(8) // => i will sleep 8 hours.
```

同样的`call`方法只能执行同步队列，对于异步队列需要使用`callAsync`和`promise`方法。

```js
animal.hooks.sleep.callAsync(8, err => { if (err) { ... } })
```

```js
animal.hooks.sleep.promise(8).then(res => { console.log(res) }) // res is undefined for AsyncParallelHook
```

### 类型

每个钩子都可以注册一个或者多个函数。这些函数如何被执行取决于钩子的类型：

+ Basic hook (名字中不带 Waterfall, Bail, Loop)的。注册的函数将会被放在队列中依次执行。
+ Waterfall 注册的函数也会依次执行，与 Basic 类型不同的是上一个函数的返回值会传递给下一个函数。
+ Bail 这种类型的钩子允许提前退出。当任意的函数返回了任意值，任务队列都会停止，剩下未执行的函数将不再执行。
+ Loop 当队列中的某个函数返回了 non-undefined 的值，任务队列会重头开始执行，直到所有的函数都返回 undefined。

此外，钩子还分为同步钩子和异步钩子。这是它们之间的区别：

+ Sync 同步钩子只能注册同步函数 using myHook.tap()
+ AsyncSeries 异步串行钩子。可以注册同步函数、基于 callback 的异步函数、基于 promise 的异步函数。所有的函数将依次执行。
+ AsyncParallel 异步并行钩子。也可以注册同步函数、基于 callback 的异步函数、基于 promise 的异步函数。所有的函数将同时被执行。

### 拦截器

所有类型的钩子都支持设置拦截器。

```js
animal.hooks.sleep.intercept({
  call: (time) => {
    console.log('intercept call: ', time)
  },
  register: (tapInfo) => {
    console.log('intercept register tapInfo: ', tapInfo)
    return tapInfo // 需要返回一个 Tap 实例
  }
})
```

+ call: (...args) => void 当整个任务队列开始执行时，call 方法会被调用，并且会传入你传给整个队列的参数。
+ tap: (tap: Tap) => void 当每个函数被执行时会调用 tap 方法，传入对应的实例。但是 tap 不能被修改。
+ loop: (...args) => void loop 函数将在每次循环开始前被调用。
+ register: (tap: Tap) => Tap | undefined 每次注册执行函数都会触发 register 方法，并且 register 方法支持你修改执行函数。

### Context

插件（执行函数）和拦截器可以访问一个可选的上下文对象。该对象可以将任意值传递给后续的插件和拦截器。

```js
animal.hooks.sleep.intercept({
  context: true,
  tap: (context, tapInfo) => {
    console.log(context, tapInfo.name) // => {} sleep Plugin
    if (context) {
      context.foo = 'foo Value'
    }
  }
})

animal.hooks.sleep.tap({
  name: 'sleep Plugin',
  context: true
}, (context, time) => {
  if (context && context.foo) {
    console.log('context: ', context) // => context: { foo: 'foo Value' }
    console.log('time: ', time) // => time: 8
  } else {
    console.log('no context funcitons ~')
  }
})

animal.hooks.sleep.tap(8)
```

### HookMap

HookMap 是一个 Hooks 映射的帮助类。

```js
const keyedHook = new HookMap(key => new SyncHook(['arg1']))

keyHook.for("some-key").tap('plugin', arg => { /* ... */ })
keyHook.for("some-key").tapAsync('plugin', (arg, callback) => { /* ... */ })
keyHook.for("some-key").tapPromise('plugin', arg => { /* ... */ })

const hook = keyedHook.get('some-key')
if (hook !== undefined) {
  hook.callAsync('arg', err => { /* ... */ })
}
```



