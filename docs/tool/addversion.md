##### 创建获取版本信息文件 version.js
``` js
// 同步子进程
const execSync = require('child_process').execSync;
module.exports.getVersion = function() {
    // 生产模式启用
    if(process.env.NODE_ENV === 'production') {
        let outputVersion = ''
        try {
            // 版本分支
            const branch = execSync('git rev-parse --abbrev-ref HEAD').toString().trim()
            // 版本号
            const version = execSync('git rev-parse HEAD').toString().trim() // 例如dev环境: 7af149fe08279a81a56686447c957ba313c4aa1b
            // 打包时间
            const date = new Date()
            const buildDate = date.toLocaleDateString() + ' ' + date.toLocaleTimeString()
            
            outputVersion = buildDate + '-' + branch + '-' + version
        } catch (error) {
        }
        return outputVersion
    } else {
        // 开发环境就不需要版本号展示了
        return ''
    }
}
```


##### 在vue.config.js配置文件中引入并使用
``` js
// vue.config.js

const version = require('./version.js')
// 在pages配置中或者其他webpack的htmlwebpackplugin配置中增加版本信息配置
module.exports = {
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      // 增加版本信息参数，在引用静态index.html文件中使用
      _version: version.getVersion()
    }
  }
}
```

##### 在index.html中使用上面定义的变量就好了
``` html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="Expires" content="0"/>
    <meta http-equiv="Pragma" content="no-cache"/>
    <meta http-equiv="Cache-control" content="no-cache, no-store, must-revalidate"/>
    <meta http-equiv="Cache" content="no-cache"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <link href="favicon.ico" rel="shortcut icon">
  </head>
  <body>
    <noscript>
      <strong>
        We're sorry but page doesn't work properly without JavaScript enabled. Please enable it to continue.
      </strong>
    </noscript>
    <div id="app"></div>
    <script>
        // 通过下面方式拿到版本信息字符串
      console.log('version: <%= htmlWebpackPlugin.options._version %>')
    </script>
  </body>
</html>

```
##### 配置完成后，打包部署后在页面控制台就能看到版本信息了