# 创建模板项目

::: warning

如果想自行配置，请移步[自由配置](/starter/custom)

:::

本页内容会介绍`Yuuka`如何创建模板项目，相比于自由配置，模板项目有以下的优/缺点:
 + 开发者推荐的配置与开发工具
 + 可以直接在workspace中开发
 + 可以直接使用TypeScript运行插件，既可以享受类型检查和代码提示的便利，又可以即时运行
 + 不如自由配置自由度高，但对于普通开发者和用户已经足够大部分的使用


## 安装[Node.js](https://nodejs.org/)

`Yuuka`是用运行在Node.js上的程序，因此第一步是先安装Node.js

### 下载安装包

前往[Node.js](https://nodejs.org/)的网站，下载对应系统的安装包，推荐更加稳定的LTS版本，因为Node.js官方会阶段性长时间维护这个版本


<TextedImage src="/nodejs.webp" text="Node.js" />

下载安装包后按照引导，逐步安装即可

### 安装包管理器

Node.js安装后会自带[npm](https://www.npmjs.com/)包管理器，但我们推荐[Yarn](https://classic.yarnpkg.com/)包管理器，它的功能更加强大，只需输入一下命令:

```bash
# 安装Yarn

npm i yarn -g # [!code focus]

# 查看Yarn版本

yarn -v
```

### 配置镜像源 <Badge type="tip" text="可选" />

国内的用户安装依赖时会比较慢，我们推荐你配置镜像源，只需输入以下命令:
```bash
yarn config set registry https://registry.npmmirror.com
```

## 创建项目

打开命令行，并进入你想要创建`Yuuka`项目的目录

输入以下命令:

```bash
yarn create koishi
```
跟随提示即可完成全套初始化流程

输入`yarn start`之后，`Yuuka`便启动了，通过`Ctrl+C`便可关闭，若想再次启动只需再次输入`yarn start`即可


## 下一步

+ 如果想使用插件，请移步[插件的安装与配置](/starter/plugin)

+ 如果想立刻开发插件，请移步[开发插件](/developer/plugin)

