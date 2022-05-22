### 什么是CSS预处理器？

CSS预处理器是用一门专门的语言，进行网页的样式设计，之后再被编译为正常的CSS文件，以供项目使用

Less是一个CSS预处理语言，扩展了CSS语言，增加了变量，mixin，函数等特性，使CSS更容易维护和扩展

#### 变量（Variables）
``` less
@width: 10px;
@height: @width + 10px;

#header {
  width: @width;
  height: @height;
}
```
#### 混合（Mixins）
``` less
.bordered {
  border-top: dotted 1px black;
  border-bottom: solid 2px black;
}
#menu a {
  color: #111;
  .bordered();
}
.post a {
  color: red;
  .bordered();
}
```
注意，希望混入的css样式不出现在输出的css中，需要mixin定义后面加（）
``` less
.my-mixin {
  color: black;
}
.my-other-mixin() {
  background: white;
}
.class {
  .my-mixin();
  .my-other-mixin();
}
// 输出为
.my-mixin {
  color: black;
}
.class {
  color: black;
  background: white;
}
```

#### 嵌套（Nesting）
``` less
#header {
  color: black;
  .navigation {
    font-size: 12px;
  }
  .logo {
    width: 300px;
  }
}
```

#### @规则嵌套和冒泡
@ 规则（例如 @media 或 @supports）可以与选择器以相同的方式进行嵌套。@ 规则会被放在前面，同一规则集中的其它元素的相对顺序保持不变。这叫做冒泡（bubbling）。
``` less
.component {
  width: 300px;
  @media (min-width: 768px) {
    width: 600px;
    @media  (min-resolution: 192dpi) {
      background-image: url(/img/retina2x.png);
    }
  }
  @media (min-width: 1280px) {
    width: 800px;
  }
}
// 编译为：
.component {
  width: 300px;
}
@media (min-width: 768px) {
  .component {
    width: 600px;
  }
}
@media (min-width: 768px) and (min-resolution: 192dpi) {
  .component {
    background-image: url(/img/retina2x.png);
  }
}
@media (min-width: 1280px) {
  .component {
    width: 800px;
  }
}
```
#### 运算（Operations）
``` less
 /* numbers are converted into the same units */
@conversion-1: 5cm + 10mm; // result is 6cm
@conversion-2: 2 - 3cm - 5mm; // result is -1.5cm

/* conversion is impossible */
@incompatible-units: 2 + 5px - 3cm; // result is 4px

 /* example with variables */
@base: 5%;
@filler: @base * 2; // result is 10%
@other: @base + @filler; // result is 15%
```

#### calc() 特例
为了与 CSS 保持兼容，calc() 并不对数学表达式进行计算，但是在嵌套函数中会计算变量和数学公式的值。
``` less
@var: 50vh/2;
width: calc(50% + (@var - 20px));  // 结果是 calc(50% + (25vh - 20px))
```

#### 函数（Functions）
``` less
/* Less 内置了多种函数用于转换颜色、处理字符串、算术运算等。这些函数在函数手册中有详细介绍。
函数的用法非常简单。下面这个例子将介绍如何利用 percentage 函数将 0.5 转换为 50%，将颜色饱和度增加 5%，以及颜色亮度降低 25% 并且色相值增加 8 等用法： */
@base: #f04615;
@width: 0.5;

.class {
  width: percentage(@width); // returns `50%`
  color: saturate(@base, 5%);
  background-color: spin(lighten(@base, 25%), 8);
}
```

#### 命名空间和访问符
有时，出于组织结构或仅仅是为了提供一些封装的目的，你希望对混合（mixins）进行分组。你可以用 Less 更直观地实现这一需求。假设你希望将一些混合（mixins）和变量置于 #bundle 之下，为了以后方便重用或分发：
``` less
#bundle() {
  .button {
    display: block;
    border: 1px solid black;
    background-color: grey;
    &:hover {
      background-color: white;
    }
  }
  .tab { ... }
  .citation { ... }
}
// 现在，如果我们希望把 .button 类混合到 #header a 中，我们可以这样做：
#header a {
  color: orange;
  #bundle.button();  // 还可以书写为 #bundle > .button 形式
}
// 注意：如果不希望它们出现在输出的 CSS 中，例如 #bundle .tab，请将 () 附加到命名空间（例如 #bundle()）后面。
```
#### 映射（Maps）
从 Less 3.5 版本开始，你还可以将混合（mixins）和规则集（rulesets）作为一组值的映射（map）使用。
``` less
#colors() {
  primary: blue;
  secondary: green;
}

.button {
  color: #colors[primary];
  border: 1px solid #colors[secondary];
}
// 输出符合预期：
.button {
  color: blue;
  border: 1px solid green;
}
```
#### 作用域（Scope）
Less 中的作用域与 CSS 中的作用域非常类似。首先在本地查找变量和混合（mixins），如果找不到，则从“父”级作用域继承。
``` less
@var: red;

#page {
  @var: white;
  #header {
    color: @var; // white
  }
}
// 与 CSS 自定义属性一样，混合（mixin）和变量的定义不必在引用之前事先定义。因此，下面的 Less 代码示例和上面的代码示例是相同的：
@var: red;

#page {
  #header {
    color: @var; // white
  }
  @var: white;
}
```
#### 导入（Importing）
“导入”的工作方式和你预期的一样。你可以导入一个 .less 文件，此文件中的所有变量就可以全部使用了。如果导入的文件是 .less 扩展名，则可以将扩展名省略掉：
``` less
@import "library"; // library.less
@import "typo.css";
```