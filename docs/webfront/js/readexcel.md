#### js读取excel文件

``` js
import XLSX from 'xlsx'
const file = file
const fileReader = new fileReader()
fileReader.onload =  (e) => {
    const data = e.target.result
    const workbook = XLSX.read(data, {
        type: 'binary'
    })
    const wsname = workbook.SheetNames[0] // 取第一张表
    const ws = XLSX.utils.sheet_to_json(workbook.Sheets[wsname]) // 生成json表格内容
    console.log('excel表格第一页数据:', ws)
}
fileReader.readAsBinaryString(file.raw)
```