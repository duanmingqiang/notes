#### 用法和vue2相比写法没什么变化的部分
条件渲染、
列表渲染、
事件处理、
class和style绑定、
计算属性和侦听器、
动态组件

#### v-model
表单元素使用v-model
v-model 在内部为不同的输入元素使用不同的 property 并抛出不同的事件
text 和 textarea 元素使用 value property 和 input 事件；
checkbox 和 radio 使用 checked property 和 change 事件；
select 字段将 value 作为 prop 并将 change 作为事件。
``` vue
在特定原生表单元素使用v-model时：
<input v-model="searchText" />
等价于：
<input :value="searchText" @input="searchText = $event.target.value" />
在组件使用v-model时,和vue2有所不同
<custom-component v-model="data" />
等价于
<custom-component :model-value="data" @update:modelValue="data = $event"/>
```

#### 解析dom模板注意事项
``` vue
某些html元素如ul、table等，对于那些元素出现其内部是有严格限制的，有些元素如li、tr等只能出现在某些特定元素内部
<table>
  <blog-post-row></blog-post-row>
</table>
这个自定义组件 <blog-post-row> 会被作为无效的内容提升到外部，并导致最终渲染结果出错。幸好这个特殊的 v-is attribute 给了我们一个变通的办法：
<table>
  <tr v-is="'blog-post-row'"></tr>
</table>

```
::: tip v-is 值应为 JavaScript 字符串文本：
``` vue
<!-- 错误的，这样不会渲染任何东西 -->
<tr v-is="blog-post-row"></tr>
<!-- 正确的 -->
<tr v-is="'blog-post-row'"></tr>
```
:::