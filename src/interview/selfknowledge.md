<!-- #### 自我介绍 -->

## html和css知识点

##### 垂直居中？
``` css
display: flex;
justify-content: center;
align-items: center;
```
##### flex布局？
##### 画一个三角形？
##### less，scss常见使用？

## 常见js知识点
##### let，const，var区别？
``` text
变量提升： let和const没有变量提升，var有变量提升 
重复定义： let和const不能重复定义，var可以重复定义 
const定义的变量为常量不能更改，如为对象，则不能更改指针 
```

##### js数据类型有哪些？怎么判断？
``` js
// 基本数据类型有:
number,string, object, null, undefined, symbol, bigint, boolean
// 引用数据类型：
object
// 全能判断方式
使用Object.prototype.toString.call(testData)
```
##### cookie，sessionStroage，localStroage的区别？
##### 继承有哪几种方式？
##### 数组有哪些遍历方法？
```  forEach,map,filter,for-of ```
##### 数组去重？
``` js
norepeatData = new Set([1,2,3,3])
console.log([...norepeatData]) // [1, 2, 3]
```
##### js深拷贝和浅拷贝？


## js手写
##### 手写call，apply，bind？
``` js
// 简单实现
Function.prototype._call = function (context,...args) {
    context = context? Object(context): window
    const fn = Symbol()
    context[fn] = this
    const result = context[fn](...args)
    delete context[fn]
    return result
}

Function.prototype._apply = function (context,args = []) {
    context = context? Object(context): window
    const fn = Symbol()
    context[fn] = this
    const result = context[fn](...args)
    delete context[fn]
    return result
}

Function.prototype._bind = function (context, ...arg) {
    const fun = this
    return function (...rest) {
        fun.call(context, ...args, ...rest)
    }
}
```
##### 手写简易promise？
``` js
function MyPromise(excutor) {
    this.status = 'pending'

    this.resolveValue = null
    this.rejectValue = null

    this.successCallback = []
    this.failCallback = []

    let resolve = (resolveValue) => {
        this.status = 'fullfilled'
        this.resolveValue = resolveValue
        this.successCallback.forEach(callback => {
            callback()
        })
    }

    let reject = (rejectValue) => {
        this.status = 'reject'
        this.rejectValue = rejectValue
        this.failCallback.forEach(callback => {
            callback()
        })
    }
    excutor(resolve, reject)
}

MyPromise.prototype.then = function (onFullfilled, onReject) {
    onFullfilled = onFullfilled? onFullfilled: res => res
    onReject = onReject? onReject: res => {throw res}

    return new MyPromise( (resolve, reject) => {
        if (this.status === 'pending') {
            this.successCallback.push(
                () => {
                    setTimeout(() => {
                        try {
                            let onFullfilledResult = onFullfilled(this.resolveValue)
                            resolve(onFullfilledResult)
                        } catch (error) {
                            reject(error)
                        }
                    }, 0)
                }
            )
            this.failCallback.push(
                () => {
                    setTimeout(() => {
                        try {
                            let onRejectResult = onReject(this.rejectValue)
                            resolve(onRejectResult)
                        } catch (error) {
                            reject(error)
                        }
                    }, 0)
                }
            )
        }
        if (this.status === 'fullfilled') {
            setTimeout(() => {
                try {
                    let onFullfilledResult = onFullfilled(this.resolveValue)
                    resolve(onFullfilledResult)
                } catch (error) {
                    reject(error)
                }
            }, 0)
        }
        if (this.status === 'reject') {
            setTimeout(() => {
                try {
                    let onRejectResult = onReject(this.rejectValue)
                    resolve(onRejectResult)
                } catch (error) {
                    reject(error)
                }
            }, 0)
        }
    })
}

MyPromise.prototype.catch = function (onReject) {
    return this.then(null, onReject)
}
```
##### 手写防抖节流？
##### 手写简单发布订阅模式？
``` js
function PubSub() {
    this.eventObj = {}
}

PubSub.prototype.on = function (eventType, callback) {
    if (!this.eventObj[eventType]) {
        this.eventObj[eventType] = []
    }
    this.eventObj[eventType].push(callback)
}

PubSub.prototype.emit = function (eventType, ...args) {
    this.eventObj[eventType] && this.eventObj[eventType].forEach(callback => {
        callback(...args)
    })
}

PubSub.prototype.remove = function (eventType, fun) {
    if (this.eventObj[eventType]) {
        if (fun) {
            const index = this.eventObj[eventType].findIndex(callback => callback === fun)
            if (index > -1) {
                this.eventObj[eventType].splice(index, 1)
            }
        } else {
            delete this.eventObj[eventType]
        }
    }
}
```
##### 手写简单vue实现？

## 项目相关知识点

##### 介绍一下自己所负责的项目？
```
目前这个是信保业务前端控台系统，主要负责信保财务核算，综合管理，客户服务，精算等多个业务的前端页面开发
```
##### 你印象最深的项目是什么？为什么？
``` 貌似没有 ```
##### 项目中使用那些技术栈？
```
git，svn，vue，vuex，vue-router，html2canvas，element，iview，jquery，seajs，requirejs，scss，less，webpack，node等
```
##### 项目中碰到什么难点没，怎么解决的？
``` js
1.文件下载问题，后端返回的base64字符串，前端需要处理成文件下载

2.文件下载问题，前端需要将后端返回的list数据转成excel下载

3.文件下载问题，项目涉及蓝绿环境，部分下载接口需要手动添加header，因此超链接点击下载行不通，前端需要通过ajax拿到流数据自己转化下载一下

4.接口跨域问题，设置代理
nginx设置代理

5.页面登录状态失效问题

6.scss部署打包问题
使用sass代替node-sass依赖包

7.base64字符串pdf预览问题
使用pdfjs进行预览，缺点不支持电子印章展示

```
##### 项目亮点是什么？
``` 貌似没有 ```

## http知识点
##### http1.0/1/2，https有什么区别？
HTTP 1.0

无状态，无连接
短连接：每次发送请求都要重新建立tcp请求，即三次握手，非常浪费性能
无host头域，也就是http请求头里的host
不允许断点续传，而且不能只传输对象的一部分，要求传输整个对象
HTTP 1.1

长连接，流水线，使用connection:keep-alive使用长连接
请求管道化
增加缓存处理（新的字段如cache-control）
增加Host字段，支持断点传输等
由于长连接会给服务器造成压力
HTTP 2.0

二进制分帧
头部压缩，双方各自维护一个header的索引表，使得不需要直接发送值，通过发送key缩减头部大小
多路复用（或连接共享），使用多个stream，每个stream又分帧传输，使得一个tcp连接能够处理多个http请求
服务器推送（Sever push）

##### 跨域问题怎么处理？
代理，cors，jsonp，websocket等
##### 强制缓存和协商缓存分别说一下？
强制缓存： 
expires HTTP 1.0 的字段 是一个绝对的时间 (当前时间+缓存时间)
cache-control HTTP 1.1 的字段， 例如：max-age：即最大有效时间

协商缓存：
Last-Modified/If-Modified-since

1.服务器通过 Last-Modified 字段告知客户端，资源最后一次被修改的时间，例如 Last-Modified: Mon, 10 Nov 2018 09:10:11 GMT
2.浏览器将这个值和内容一起记录在缓存数据库中。
3.下一次请求相同资源时时，浏览器从自己的缓存中找出“不确定是否过期的”缓存。因此在请求头中将上次的 Last-Modified 的值写入到请求头的 If-Modified-Since 字段
4.服务器会将 If-Modified-Since 的值与 Last-Modified 字段进行对比。如果相等，则表示未修改，响应 304；反之，则表示修改了，响应 200 状态码，并返回数据。
优势特点
1、不存在版本问题，每次请求都会去服务器进行校验。服务器对比最后修改时间如果相同则返回304，不同返回200以及资源内容。
劣势问题
2、只要资源修改，无论内容是否发生实质性的变化，都会将该资源返回客户端。例如周期性重写，这种情况下该资源包含的数据实际上一样的。
3、以时刻作为标识，无法识别一秒内进行多次修改的情况。 如果资源更新的速度是秒以下单位，那么该缓存是不能被使用的，因为它的时间单位最低是秒。
4、某些服务器不能精确的得到文件的最后修改时间。
5、如果文件是通过服务器动态生成的，那么该方法的更新时间永远是生成的时间，尽管文件可能没有变化，所以起不到缓存的作用。

Etag/If-None-match

为了解决上述问题，出现了一组新的字段 Etag 和 If-None-Match
Etag 存储的是文件的特殊标识(一般都是 hash 生成的)，服务器存储着文件的 Etag 字段。之后的流程和 Last-Modified 一致，只是 Last-Modified 字段和它所表示的更新时间改变成了 Etag 字段和它所表示的文件 hash，把 If-Modified-Since 变成了 If-None-Match。服务器同样进行比较，命中返回 304, 不命中返回新资源和 200。
浏览器在发起请求时，服务器返回在Response header中返回请求资源的唯一标识。在下一次请求时，会将上一次返回的Etag值赋值给If-No-Matched并添加在Request Header中。服务器将浏览器传来的if-no-matched跟自己的本地的资源的ETag做对比，如果匹配，则返回304通知浏览器读取本地缓存，否则返回200和更新后的资源。
Etag 的优先级高于 Last-Modified。
优势特点
1、可以更加精确的判断资源是否被修改，可以识别一秒内多次修改的情况。
2、不存在版本问题，每次请求都回去服务器进行校验。
劣势问题
1、计算ETag值需要性能损耗。
2、分布式服务器存储的情况下，计算ETag的算法如果不一样，会导致浏览器从一台服务器上获得页面内容后到另外一台服务器上进行验证时现ETag不匹配的情况。
## webpack知识点

##### webpack是什么？
##### webpack执行过程大概是什么样子？
##### 怎么提升webpack打包速度？
``` js
modules.exports = {
    resolve: {
        // 路径别名配置
        alias: {
            Utilities: path.resolve(__dirname, 'src/utilities/'),
        },
        // 能够使用户在引入模块时不带扩展,尝试按顺序解析这些后缀名
        extensions: ['.js', '.json', '.wasm']
    }
}
```

## vue相关知识点

##### 组件间怎么通信？
##### 生命周期有哪些？

## 基础算法

## GIT知识点

## 其他知识点

##### amd，cmd，commonjs区别？
##### 页面从输入URL到页面渲染发生了什么？
##### 前端安全问题有哪些？怎么避免？