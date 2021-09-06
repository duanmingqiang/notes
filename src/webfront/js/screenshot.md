#### 截图
通过使用html2canvas实现功能


#### 安装
``` bash
yarn add html2canvas
```
#### 使用
``` js
import html2canvas from 'html2canvas'

// element,被截图的元素
let  base64Image = null
html2canvas(element).then((canvas) => {
    base64Image = canvas.toDataURL()
    console.log(base64Image)
})
```