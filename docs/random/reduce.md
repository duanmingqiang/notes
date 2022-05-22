### reduce有什么用？
reduce是数组的方法，提供了累加器功能，参数是一个回调函数，会对数据的每项一次从左到右执行传入的回调函数
#### 下面看一下简单使用
``` js
const test = [1, 2, 3]
/**
 * prev 初始值（没有设置初始值参数的话就是数组的第一项值）或者上次累加回调函数返回的值
 * curr 当前累加处理的数组项
 * index 当前累加处理项的索引 设置初始值的则从0开始，没有的从1开始
 * arr 调用该回调函数的数组
*/
const total1 = test.reduce((prev, curr, index, arr) => {
    return prev + curr
})
console.log(total1) // 6
// reduce还可以传递第二个参数，设置为回调函数第一次累加的初始值prev
const total2 = test.reduce((prev, curr, index, arr) => {
    return prev + curr
}, 5)
console.log(total2) // 11
```

::: tip 
有几个特殊情况需要注意下
1. 空数组调用reduce方法会报错
``` js
const test = []
test.reduce((prev, curr) => {
    return prev + curr
})
// Uncaught TypeError: Reduce of empty array with no initial value
// at Array.reduce (<anonymous>)
// at <anonymous>:1:3
```
2. 数组执行reduce需要至少一个初始值，因此像这种，空数组且设置了一个初始值或者数组只有一项且没有设置初始值，都是可以正常执行reduce方法，但是这种情况不会执行reduce的回调函数，且直接返回这个初始值
``` js
const test1 = []
const total1 = test1.reduce((prev, curr) => {
    return prev + curr
}, 1)
console.log(total1) // 1

const test2 = [1]
const total2 = test2.reduce((prev, curr) => {
    return prev + curr
})
console.log(total2) // 1
```
:::

#### 常见用法
求和，数组去重