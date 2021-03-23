#### call,apply,bind

call,apply在特定上下文环境执行函数,两个功能是一样的，只是传参方式不同，apply是数组，call是参数序列
bind是返回一个能在特定上下文环境执行的函数

#### apply
``` js
Function.prototype.apply = function (context = window, ...args) {
    if (typeof this !== 'function') {
        throw new TypeError('Type Error')
    }
    context.fn = this
    const res = context.fn(...args)
    delete context.fn
    return res
}
```
#### call
``` js
Function.prototype.call = function (context = window, ...args) {
    if (typeof this !== 'function') {
        throw new TypeError('Type Error')
    }
    context.fn = this
    const res = context.fn(...args)
    delete context.fn
    return res
}
```

#### bind
``` js
Function.prototype.bind = function (context, ...args) {
    if (typeof this !== 'function') {
        throw new TypeError('Type Error')
    }
    let self = this
    return function fun(...innerArgs) {
        if (this instanceof fun) {
            return new self(...args, ...innerArgs)
        }
        return self.apply(context, [...args, ...innerArgs])
    }
}
```

#### new，用于创建对象
``` js
function mynew(fn, ...args) {
    // 指明函数是否通过new操作符使用
    mynew.target = fn
    // 创建空对象，并设置proto为构造函数的原型
    let obj = Object.create(fn.prototype)
    // 使用obj作为函数的上下文环境并调用函数
    const res = fn.call(obj, ...args)
    // 函数返回值为对象，则返回该对象，否则返回新创建的对象
    if (res &&  (typeof res === 'object' || typeof res === 'function')) {
        return res
    }
    return obj
}
```

#### 防抖和节流，都是防止频繁触发事件的操作

#### 防抖
防抖指的是在事件触发n秒后执行回调，如果在n秒内再次被触发，则重新计时

##### 常用场景：
按钮提交，防止重复提交，只提交最后一次
搜索框联想：防止输入持续触发回调，只触发最后一次

##### 实现方式
``` js
// 非立即执行版
function debounce (fn, wait) {
    let timeout
    return function (...args) {
        let context = this
        if (timeout) {
            clearTimeout(timeout)
        }
        timeout = setTimeout( () => {
            fn.call(context, ...args)
        }, wait)
    }
}
// 立即执行版
function debounce(fn, wait) {
    let timeout
    return function (...args) {
        const context = this
        if (timeout) {
            clearTimeout(timeout)
        }
        let runNow = !timeout
        timeout = setTimeout(() => {
            timeout = null
        }, wait)
        if (runNow) {
            fn.call(context, ...args)
        }
    }
}
```

#### 节流
节流指的是在n秒内只能触发一次回调，如果在n秒内多次触发回调，只会执行一次

##### 常用场景
拖拽事件：n秒内只执行一次，防止频繁触发事件
浏览器滚动或大小变化场景

##### 实现方式
``` js
// 时间戳版
function throttle(fn, wait) {
    let pre = 0;
    return function (...args) {
        const context = this
        let now = Date.now() 
        if (now - pre >= wait) {
            fn.call(context, ...args)
            pre = Date.now()
        }
    }
}
// 定时器版
function throttle(fn, wait) {
    let timeout;
    return function (...args) {
        const context = this
        if (!timeout) {
            timeout = setTimeout(() => {
                timeout = null
                fn.call(context, ...args)
            }, wait)
        }
    }
}
```

#### 简易深拷贝

``` js
function deepClone(target) {
    const obj = {}
    if (typeof target !== 'object' || target === null) {
        return target
    }
    if (target instanceof Array) {
        return target.map(item => {
            return deepClone(item)
        })
    }
    if (target instanceof Object) {
        Object.keys(target).forEach((item, index) => {
            obj[item] = deepClone(target[item])
        })
    }
    return obj
}
```

#### 简易发布订阅
``` js
function PubSub () {
    this.cacheCallback = {}
}

PubSub.prototype.on = function (eventType, callback) {
    if (!this.cacheCallback[eventType]) {
        this.cacheCallback[eventType] = []
    }
    this.cacheCallback[eventType].push(callback)
}

PubSub.prototype.emit = function (eventType, ...args) {
    if (this.cacheCallback[eventType]) {
        this.cacheCallback[eventType].forEach(item => {
            item(...args)
        })
    }
}

PubSub.prototype.remove = function (eventType, fun) {
    if (eventType && this.cacheCallback[eventType]) {
        if (fun) {
            this.cacheCallback[eventType] = this.cacheCallback[eventType].filter((item, index, arr) => {
                return item !== fun
            })
        } else {
            delete this.cacheCallback[eventType]
        }
    }
}
```