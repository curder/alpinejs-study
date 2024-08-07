# Maska

[Maska](https://github.com/beholdr/maska) 是一个轻量级、无依赖的输入掩码库。

它用于确保用户输入符合特定格式，例如电话号码、日期或信用卡号。

通过引导用户正确输入信息，Maska 提高了数据一致性和用户体验。

它支持 Vue、Svelte、Alpine.js 等框架以及原生 JavaScript。


## 安装

跟 Alpine.js 的安装一样， [@beholdr/maska](https://github.com/beholdr/maska) 插件同样支持从 `<script>` 脚本标签引用它或者将其作为模块导入。


### 通过 CDN 脚本

在 `HTML` 页面的头部包含以下 `<script>` 标签。

```html
<!doctype html>
<html lang="en">
<head>
  <!--...-->
  <title>Alpine.js Maska Plugins</title>
  <!-- Alpine Maska Plugins -->
  <script defer src="https://unpkg.com/maska@3/dist/cdn/alpine.js"></script> // [!code focus]

  <script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script> // [!code focus]
</head>
<body>
<!--...-->
</body>
</html>
```

> 需确保将其包含在 Alpine 的核心 JS 文件之前即可。

生产环境中，建议在链接中锁定特定版本号，以避免新版本中的变更造成问题。

例如，锁定版本为 `3.0.0` (最新版本):

```html
<!-- Alpine Plugins -->
<script defer src="https://unpkg.com/maska@3.0.0/dist/cdn/alpine.js"></script>
```

### 作为 NPM 模块

可以通过 `npm` / `yarn` 安装 Tooltip 并将其导入到一个包中。 运行以下命令来安装它：

::: code-group

```bash [yarn]
yarn add maska
```

```bash [npm]
npm install maska
```
:::

现在将 Maska 导入到包中并像这样初始化它：

::: code-group

```javascript [resource/js/app.js]
import Alpine from 'alpinejs'
import { xMaska } from "maska/alpine" // [!code focus]

Alpine.plugin(xMaska) // [!code focus]
Alpine.start()
```

更多使用方式[参考这里](https://beholdr.github.io/maska/v3/#/alpine)。