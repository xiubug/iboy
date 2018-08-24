English | [简体中文](./README.zh-CN.md)

# iboy ![download](https://img.shields.io/npm/dt/iboy.svg) ![npm-version](https://img.shields.io/npm/v/iboy.svg) ![license](https://img.shields.io/npm/l/iboy.svg)

> A simple CLI scaffolding for front-end projects.

### Installation
Prerequisites: [Node.js](https://nodejs.org/en/) (>=6.x) and [Git](https://git-scm.com/).

```
$ npm install iboy -g
```

### Usage
```
$ iboy init <template-name> <project-name>
```

You can also relate a remote repo: 

```
iboy init <template-name> <project-name> -o remote-repo-url
```

Example:

```
$ iboy init Zilean/m-vcli my-project

```

Relate a remote repo:

```
$ iboy init vuejs-templates/webpack-simple my-project -o git@github.com:xxx/xxx.git
```

The above command pulls the template from [here](http://www.sosout.com/frontend/vue/#vue-cli源码解析（v2-9-6）) or [writing custom templates](https://github.com/vuejs/vue-cli#writing-custom-templates-from-scratch), prompts for some information, and generates the project at `./my-project/`.


### Command

* `iboy` or `iboy -h` --- find help info for iboy.
* `iboy init template-name your-project-name [-o remote-origin]` --- init your project with specified template.
* `iboy token -u your-github-user-name -p your-personal-token` --- set auth token to get a higher rate limit of api requests. Check out the [documentation](https://developer.github.com/v3/#rate-limiting) for more details.

>Note: Check out the [documentation](https://developer.github.com/v3/auth/#basic-authentication) for more details about Basic Authentication.

### Templates from github
It's unlikely to make everyone happy with the official templates. You can simply fork an official template and then use it via `iboy-cli` with:

```
iboy init username/repo my-project
```

Where `username/repo` is the GitHub repo shorthand for your fork. But the repo need to meet some conditions. See this: [here](http://www.sosout.com/frontend/vue/#vue-cli源码解析（v2-9-6）) or [writing custom templates](https://github.com/vuejs/vue-cli#writing-custom-templates-from-scratch)

### Local Templates

Instead of a GitHub repo, you can also use a template on your local file system:

```
iboy init ~/fs/path/to-custom-template my-project
```

There is a [guide](http://www.sosout.com/frontend/vue/#vue-cli源码解析（v2-9-6）) or [writing custom templates](https://github.com/vuejs/vue-cli#writing-custom-templates-from-scratch) for to writing owner customized template.

## Thanks
To [metalsmith scaffolder](https://github.com/metalsmith/metalsmith/blob/master/examples/project-scaffolder) && [vue-cli](https://github.com/vuejs/vue-cli) for the head start.
