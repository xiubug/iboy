简体中文 | [English](https://github.com/Zilean/iboy)

# iboy ![download](https://img.shields.io/npm/dt/iboy.svg) ![npm-version](https://img.shields.io/npm/v/iboy.svg) ![license](https://img.shields.io/npm/l/iboy.svg)

> 十分简单的前端CLI脚手架.

### 安装
iboy 依赖 [Node.js](https://nodejs.org/en/) (>=6.x)：

```
$ npm install iboy -g
```

### 用法
```
$ iboy init <template-name> <project-name>
```

初始化时可以关联一个远程仓库: 

```
iboy init <template-name> <project-name> -o remote-repo-url
```

示例:

```
$ iboy init Zilean/m-vcli my-project

$ iboy init waka-templates/vue-webpack2 my-project
```

关联一个远程仓库:

```
$ iboy init vuejs-templates/webpack-simple my-project -o git@github.com:xxx/xxx.git
```

上述命令会从 [vuejs-templates/webpack-simple](https://github.com/vuejs-templates/webpack-simple) 拉取 `webpack` 模板来初始化你的 `./my-project/` 项目.


### 基本命令

* `iboy` or `iboy -h` --- 查看 iboy 的帮助信息
* `iboy init template-name your-project-name` --- 用指定的模板初始化你的项目.
* `iboy token -u your-github-user-name -p your-personal-token` --- 设置 auth token，用于[Rate Limiting](https://developer.github.com/v3/#rate-limiting).

`iboy list` 和 `iboy init` 命令都会向 `api.github.com` 发起请求。在没设置 auth token 的情况下，github限制的请求频率是 60次/小时，超过次数之后，github会拒绝请求，返回403。

而设置token后，请求频率是5000次/小时。

相关文档：

* [Rate Limiting](https://developer.github.com/v3/#rate-limiting)
* [Basic Authentication](https://developer.github.com/v3/auth/#basic-authentication)

### 远程仓库
iboy 允许使用他人的 github repo 作为项目的模板:

```
iboy init username/repo my-project
```

运行上述命令之后，将会使用 `username/repo` 作为模板来初始化你的项目.

### 本地模板

iboy 支持使用本地模板初始化项目:

```
iboy init ~/local/template/path my-project
```

## Note

在指南中，模板必须符合两条规则：

* 模板根目录下有 `template` 目录
* 模板根目录下有 `meta.{js,json}` 文件

**当你使用他人的github仓库或者本地模板时，如果github仓库或者本地模板的根目录没有 `template` 目录， iboy 将会使用该仓库或者本地模板所在的目录作为渲染模板。**

例如，你的本地模板目录是 `~/my-templates`，如果 `my-templates` 下没有 `template` 目录，iboy 则会使用 `my-templates` 作为渲染模板。

## Thanks
To [metalsmith scaffolder](https://github.com/metalsmith/metalsmith/blob/master/examples/project-scaffolder) for the head start.