# Autosize

可以自动调整 `textarea` 大小以适合其内容。

## 安装

跟 Alpine.js 的安装一样， `@marcreichel/alpine-autosize` 插件同样支持从 `<script>` 脚本标签引用它或者将其作为模块导入。

### 通过 CDN 脚本

在 HTML 页面的头部包含以下 `<script>` 标签。

```html
<!doctype html>
<html lang="en">
<head>
  <!--...-->
  <title>Alpine.js Clipboard Plugins</title>
  <!-- Alpine Clipboard Plugins -->
  <script defer src="https://unpkg.com/@marcreichel/alpine-autosize@1.x.x/dist/alpine-autosize.min.js"></script> // [!code focus]

  <script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script> // [!code focus]
</head>
<body>
<!--...-->
</body>
</html>
```
> 需确保将其包含在 Alpine 的核心 JS 文件之前即可。

生产环境中，建议在链接中锁定特定版本号，以避免新版本中的变更造成问题。

例如，锁定版本为 1.3.3 (最新版本):

```html
<!-- Alpine Plugins -->
<script defer src="https://unpkg.com/@marcreichel/alpine-autosize@1.3.3/dist/alpine-autosize.min.js"></script>
```

### 作为 NPM 模块

可以通过 `npm` / `yarn` 安装 Clipboard 并将其导入到一个包中。 运行以下命令来安装它：

::: code-group

```bash [yarn]
yarn add @marcreichel/alpine-autosize
```

```bash [npm]
npm install @marcreichel/alpine-autosize
```

:::

现在将 Autosize 导入到包中并像这样初始化它：

```javascript
import Alpine from 'alpinejs'
import Autosize from '@marcreichel/alpine-autosize' // [!code focus]

Alpine.plugin(Autosize) // [!code focus]
Alpine.start()
```

## `x-autosize` 指令

将 `x-data` 和 `x-autosize` 指令添加到 `<textarea>` 指定调整大小。

```html
<textarea x-data x-autosize></textarea>
```