## 深圳力维智联技术有限公司
#### js数组的一些方法？

#### vue中v-if和v-show的区别？

#### 有没有用过指令的修饰符？

#### 说一下vue的生命周期和几个钩子函数？

#### 有没有用过echart，说一下用过的属性？

#### http库用的什么？



## 海尔U+智慧生活平台

#### 低代码平台什么时候用？拖完这个东西在哪里用？
都忘得差不多了
#### 介绍一下原型，原型链，原型继承？

#### 什么是闭包，闭包有什么用？
读取函数内部变量的函数就是闭包
用于防抖节流

#### 防抖和节流有没有听过？
防抖：高频操作只会执行最后一次，例如输入框搜索联想
节流：高频操作时，一段时间只会执行第一次，例如元素拖动等
#### 内存泄漏有了解吗？
定义的变量都会占用内存，当不使用变量的时候，但是没有被浏览器回收就会导致内存泄漏
例如：意外的全局变量（尽量少使用全局变量），定义变量保存闭包函数的变量（不用了就置为空），被遗忘的计时器或回调函数，有dom引用，dom删除后还有dom引用内存不会清除（不需要的话就清除定时器和回调函数）

#### 跨域一般怎么处理？
jsonp
cors(设置响应头：Access-Control-Allow-Origin)
代理
websocket
postMessage
#### vue组件通信有哪些方式？
props，emit,provide，inject,ref和this.$parent和this.$children, eventbus, vuex, $attrs和$listeners
#### vue中emit和on怎么实现的？
类似事件发布订阅
#### vue父组件获取子组件和方法和参数？
ref和this.$children
#### vue子组件拿到父组件的一些方法和参数？
this.$parent
#### vue有一些内部组件有了解吗？
component
is 属性会在每次切换组件时,Vue 都会创建一个新的组件实例

keep-alive 
主要用于保留组件状态或避免组件重新渲染。
include 属性用于指定哪些组件会被缓存，具有多种设置方式。
exclude 属性用于指定哪些组件不会被缓存。
max 属性用于设置最大缓存个数

过渡组件
transition
transition-group

#### vue-router路由模式有哪些？
hash 模式
使用 URL 的 hash 来模拟一个完整的 URL，于是当 URL 改变时，页面不会重新加载

history 模式
利用了HTML5 History Interface 中新增的pushState()和replaceState()方法。
需要后台配置支持。如果刷新时，服务器没有响应响应的资源，会刷出404
#### vue-router有个路由守卫？
全局守卫：

前置 router.beforeEach
``` js
router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
  else next()
})
```

解析 router.beforeResolve

后置 router.afterEach

路由独享的守卫
``` js
// 这些守卫与全局前置守卫的方法参数是一样的
const router = new VueRouter({
  routes: [
    {
      path: '/foo',
      component: Foo,
      beforeEnter: (to, from, next) => {
        // ...
      }
    }
  ]
})
```

组件内的守卫
beforeRouteEnter
beforeRouteUpdate (2.2 新增)
beforeRouteLeave
``` js
const Foo = {
  template: `...`,
  beforeRouteEnter(to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
  },
  beforeRouteUpdate(to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
  },
  beforeRouteLeave(to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
  }
}
```


#### vue响应式数据底层实现是怎么样的？
数据劫持加发布订阅
![响应性过程](https://cn.vuejs.org/images/data.png)
#### watch和computed有没有？
computed计算属性：
有缓存，适合展示依赖多个数据的场景，无法进行异步操作

watch侦听器：
监听数据的变化，去处理，适合一对多，可进行异步操作
#### 有没有一些优化的经验？
性能优化没搞过，有过一些代码优化，通过require.context动态引入模块，vue动态渲染组件Component
#### 开发中碰到的问题，能体现你能力的地方？
base64格式文件下载，封装pdf预览
#### 你有什么要问的吗？
做的业务，团队多大，前端有多少人等