### yarn是什么？
是javascript包管理器，类似npm

### 安装
1. 使用npm安装
``` js
npm install yarn -g
```
2. 官网下载安装包进行安装

安装完成后运行下面命令出现版本号则表示安装成功

``` js
yarn --version // 1.22.5
```
### yarn常用命令
``` PowerShell
# 初始化
yarn init
# 添加全部依赖
yarn install

# 添加依赖包
yarn add [packagename]

# 添加开发依赖
yarn add [packagename] --dev

# 添加全局依赖
yarn global add [packagename]

# 更新包
yarn upgrade

# 更新到最新依赖包
yarn upgrade –latest [packagename]

# 更新指定版本依赖包
yarn upgrade [packagename]@version

# 删除包
yarn remove [packagename]

# 删除全局依赖包
yarn global remove [packagename]

# 查看全局安装的依赖
yarn global list
```

