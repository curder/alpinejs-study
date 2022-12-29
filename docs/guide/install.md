# 安装

[Alpine.js](https://alpinejs.dev/) 当前支持使用两种方式添加到项目中：

- 从 `<script>` 脚本标签引用它
- 将其作为模块导入

两种方式都是完全有效的，具体使用哪种方式完全取决于项目的需求。

## 使用脚本标签

在 HTML 页面的头部包含以下 `<script>` 标记

```html

<html lang="en">
<head>
    <title>Alpine.js</title>
    <!--...-->
    <script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script> // [!code focus]
</head>
<!--...-->
</html>
```

就是这样，Alpine.js 会自行初始化。

生产环境中，建议在链接中锁定特定版本号，以避免新版本中的变更造成问题。

例如，锁定版本为 3.10.5 (最新版本):

```html

<script defer src="https://unpkg.com/alpinejs@3.10.5/dist/cdn.min.js"></script>
```

## 作为模块

可以通过 NPM 安装 Alpine 并将其导入到一个包中。 运行以下命令来安装它：

::: code-group

```bash [yarn]
yarn add alpinejs
```

```bash [npm]
npm install alpinejs
```

:::

现在将 Alpine 导入到包中并像这样初始化它：

```js
import Alpine from 'alpinejs'

window.Alpine = Alpine // 可选，对于灵活性来说是很好的。例如当从开发者工具中修改 Alpine

Alpine.start()
```

## 简单使用 Alpine.js

为了验证 Alpine.js 的安装是否生效，下面分别使用到 `x-data` 和 `x-text` 指令。

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>

    <script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
</head>
<body>
<div x-data="{ message: 'hello world' }"> // [!code focus]
    <span x-text="message"></span> // [!code focus]
</div> // [!code focus]
</body>
</html>
```

- 使用 [`x-data`](./directives/x-data.md) 指令定义一个新的组件作用域。
- 使用 [`x-text`](./directives/x-text.md) 指令更新的是元素的 `innerText`。