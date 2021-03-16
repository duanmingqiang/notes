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