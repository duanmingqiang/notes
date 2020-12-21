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

#header a {
  color: orange;
  #bundle.button();  // can also be written as #bundle > .button
}
```


#### 导入（Importing）
“导入”的工作方式和你预期的一样。你可以导入一个 .less 文件，此文件中的所有变量就可以全部使用了。如果导入的文件是 .less 扩展名，则可以将扩展名省略掉：
``` less
@import "library"; // library.less
@import "typo.css";
```

