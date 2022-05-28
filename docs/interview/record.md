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

## 没听清楚那个公司
#### webpack打包过程
初始化参数：解析webpack配置参数，合并shell传入和webpack.config.js文件配置的参数,形成最后的配置结果；
开始编译：上一步得到的参数初始化compiler对象，注册所有配置的插件，插件 监听webpack构建生命周期的事件节点，做出相应的反应，执行对象的run方法开始执行编译；
确定入口：从配置的entry入口，开始解析文件构建AST语法树，找出依赖，递归下去；
编译模块：递归中根据文件类型和loader配置，调用所有配置的loader对文件进行转换，再找出该模块依赖的模块，再递归本步骤直到所有入口依赖的文件都经过了本步骤的处理；
完成模块编译并输出：递归完事后，得到每个文件结果，包含每个模块以及他们之间的依赖关系，根据entry或分包配置生成代码块chunk;
输出完成：输出所有的chunk到文件系统；

#### 打包完成后，打包速度，文件过大什么的，这种情况怎么优化？

#### 图片多大怎么优化
#### vue2和vue3的区别
#### vue中双向绑定的原理
#### vuex什么场景会用到
#### vue路由钩子函数
#### vuerouter两种模式怎么实现的，有什么区别？
#### 有使用过nginx吗？
#### vuerouter两种模式在nginx里面需要区别配置吗
#### $nextTick原理，一般用在什么地方？
#### vue父子组件钩子生命周期执行顺序？
#### appcan H5页面同步到welink小程序上
#### 遇到过小程序适配问题？
#### h5页面在不同分辨率大小屏幕下的适配问题
#### promise常用方法，有什么状态有什么作用
#### websocket有使用过吗？
#### 组内客服系统是干什么，是客服聊天系统？
#### 跨域解决方案有哪些？
#### 一般用到的数组方法有哪些？
#### es6都有哪些新特性？
#### css中em rem vh vw 100%这些计量单位的区别？



