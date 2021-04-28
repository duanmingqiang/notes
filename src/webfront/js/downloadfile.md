### 下载Base64字符串格式文件

``` js
// 字符串示例'data:application/vnd.ms-excel;base64,UEsDBBQACAAIABGns07kSK2vGAEAA...'
function getBlob (base64) {
  console.log(getContentType(base64))
  return b64toBlob(getData(base64), getContentType(base64))
}

function getContentType (base64) {
  return /data:([^;]*);/i.exec(base64)[1]
}

function getData (base64) {
  return base64.substr(base64.indexOf('base64,') + 7, base64.length)
}

function b64toBlob (b64Data, contentType, sliceSize) {
  contentType = contentType || ''
  sliceSize = sliceSize || 512

  var byteCharacters = atob(b64Data)
  var byteArrays = []

  for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    var slice = byteCharacters.slice(offset, offset + sliceSize)

    var byteNumbers = new Array(slice.length)
    for (var i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i)
    }

    var byteArray = new Uint8Array(byteNumbers)

    byteArrays.push(byteArray)
  }

  var blob = new Blob(byteArrays, { type: contentType })
  return blob
}

export function dwonlaodBase64StrFile ({ base64Str = testStr, fileName = 'aaa.txt' }) {
  // base64Text就是后端返回的字符串，还需要特殊处理下,替换掉字符串中的换行符，IE貌似不识别会报错
  const currentStr = base64Str.replace(/[\r\n]/g, '')
  const blob = getBlob(currentStr)
  if ('download' in document.createElement('a')) {
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = fileName
    a.style.display = 'none'
    document.body.appendChild(a)
    a.click()
    URL.revokeObjectURL(a.href)
    document.body.removeChild(a)
  } else {
    navigator.msSaveBlob(blob, fileName)
  }
}
```

### 通过ajax文件流方式下载
``` js
function getFileName(response, customFileName) {
    // 识别文件名
    var fileName = ''
    // content-disposition一般返回文件名信息
    const disposition = response.headers['content-disposition']
    var filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/
    var matches = filenameRegex.exec(disposition)
    if (matches != null && matches[1]) {
        fileName = matches[1].replace(/['"]/g, '')
        fileName = decodeURI(fileName)
    }
    // 自定义文件名
    if (customFileName) {
        fileName = (typeof customFileName === 'string') ? customFileName : customFileName(fileName)
    }
    return fileName
}

function downloadArraybufferFile(response, customFileName) {
    if (!response.data) {
        alert('下载失败')
        return
    }
    try {
        const enc = new TextDecoder('utf-8')
        const message = JSON.parse(enc.decode(new Uint8Array(response.data)))
        alert(message)
    } catch (error) {
        const blob = new Blob([response.data], { type: response.headers['content-type'] })
        let fileName = getFileName(response, customFileName)
        if ('download' in document.createElement('a')) {
            const url = window.URL.createObjectURL(blob)
            const a = document.createElement('a')
            a.href = url
            a.download = fileName
            a.style.display = 'none'
            document.body.appendChild(a)
            a.click()
            URL.revokeObjectURL(a.href)
            document.body.removeChild(a)
        } else {
            navigator.msSaveBlob(blob, fileName)
        }
    }
}
```