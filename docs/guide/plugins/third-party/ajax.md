# Ajax

[@imacrayon/alpine-ajax](https://github.com/imacrayon/alpine-ajax) 是一个小型 Alpine.js 插件，它提供了一种简单的方法来发出 AJAX 请求并在页面上呈现内容。

## 安装

跟 Alpine.js 的安装一样， [@imacrayon/alpine-ajax](https://github.com/imacrayon/alpine-ajax) 插件同样支持从 `<script>` 脚本标签引用它或者将其作为模块导入。


### 通过 CDN 脚本

在 `HTML` 页面的头部包含以下 `<script>` 标签。

```html
<!doctype html>
<html lang="en">
<head>
  <!--...-->
  <title>Alpine.js Ajax Plugins</title>
  <!-- Alpine Ajax Plugins -->
  <script defer src="https://unpkg.com/@imacrayon/alpine-ajax@0.x.x/dist/cdn.min.js"></script> // [!code focus]

  <script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script> // [!code focus]
</head>
<body>
<!--...-->
</body>
</html>
```

> 需确保将其包含在 Alpine 的核心 JS 文件之前即可。

生产环境中，建议在链接中锁定特定版本号，以避免新版本中的变更造成问题。

例如，锁定版本为 `0.7.1` (最新版本):

```html
<!-- Alpine Plugins -->
<script defer src="https://unpkg.com/@imacrayon/alpine-ajax@0.7.1/dist/cdn.min.js"></script>
```

### 作为 NPM 模块

可以通过 `npm` / `yarn` 安装 Tooltip 并将其导入到一个包中。 运行以下命令来安装它：

::: code-group

```bash [yarn]
yarn add @imacrayon/alpine-ajax
```

```bash [npm]
npm install @imacrayon/alpine-ajax
```

:::

现在将 Ajax 导入到包中并像这样初始化它：

::: code-group

```javascript [resource/js/app.js]
import Alpine from 'alpinejs'
import ajax from '@imacrayon/alpine-ajax' // [!code focus]

Alpine.plugin(ajax) // [!code focus]
Alpine.start()
```

关于插件的各种使用方法和用例[参考官方文档](https://alpine-ajax.js.org/reference/)。