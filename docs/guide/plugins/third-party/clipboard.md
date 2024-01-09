# Clipboard

[@ryangjchandler/alpine-clipboard](https://github.com/ryangjchandler/alpine-clipboard) 插件用于将文本复制到用户的剪贴板。

该插件为所有 Alpine 组件添加了一个新的 `$clipboard` 属性，可用于将任何数据复制到用户的剪贴板。

## 安装

跟 Alpine.js 的安装一样， `@ryangjchandler/alpine-clipboard` 插件同样支持从 `<script>` 脚本标签引用它或者将其作为模块导入。

### 通过 CDN 脚本

在 HTML 页面的头部包含以下 `<script>` 标签。

```html
<!doctype html>
<html lang="en">
<head>
  <!--...-->
  <title>Alpine.js Clipboard Plugins</title>
  <!-- Alpine Clipboard Plugins -->
  <script defer src="https://unpkg.com/@ryangjchandler/alpine-clipboard@2.x.x/dist/alpine-clipboard.js"></script> // [!code focus]

  <script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script> // [!code focus]
</head>
<body>
<!--...-->
</body>
</html>
```
> 需确保将其包含在 Alpine 的核心 JS 文件之前即可。

生产环境中，建议在链接中锁定特定版本号，以避免新版本中的变更造成问题。

例如，锁定版本为 2.3.0 (最新版本):

```html
<!-- Alpine Plugins -->
<script defer src="https://unpkg.com/@ryangjchandler/alpine-clipboard@2.3.0/dist/alpine-clipboard.js"></script>
```

### 作为 NPM 模块

可以通过 `npm` / `yarn` 安装 Clipboard 并将其导入到一个包中。 运行以下命令来安装它：

::: code-group

```bash [yarn]
yarn add @ryangjchandler/alpine-clipboard
```

```bash [npm]
npm install @ryangjchandler/alpine-clipboard
```

:::

现在将 Clipboard 导入到包中并像这样初始化它：

```javascript
import Alpine from 'alpinejs'
import Clipboard from '@ryangjchandler/alpine-clipboard' // [!code focus]

Alpine.plugin(Clipboard) // [!code focus]
Alpine.start()
```

也可以在注册插件时配置 `onCopy` 回调，用于每次执行成功时回调：

```javascript
import Clipboard from '@ryangjchandler/alpine-clipboard'

Alpine.plugin(Clipboard.configure({
    onCopy: () => {
        console.log('Copied!')
    }
}))
```

## `$clipboard`

从组件中的事件处理程序调用 `$clipboard` 将某些数据复制到剪贴板。

比如下面的例子将输入框内容复制到剪贴板：

```html
<div x-data="{ input: '' }">
    <input x-model="input">
    <button type="button" @click="$clipboard(input)">
        Copy to Clipboard
    </button>
</div>
```

### Promise 回调

`$clipboard` 函数复制文本成功后返回的是 `Promise`，可以做一些操作。

```javascript
$clipboard(input).then(() => { /*...*/ })
```

比如用户点击复制按钮成功复制文本内容后，按钮文字变成 `Copied` 后 1.5S又恢复成 `Copy to Cliboard`

```html
<div x-data="{
  input: '',
  copied: () => {
    const initButtonText = $refs.button.innerHTML
    $refs.button.innerHTML = 'Copied!';
    setTimeout(() => $refs.button.innerHTML = initButtonText, 1500)
  }
 }">
  <input x-model="input">
  <button type="button" @click="$clipboard(input).then(() => copied())" x-ref="button">
    Copy to Clipboard
  </button>
</div>
```

### 复制数组/对象

由于可以传递任何数据类型给 `$clipboard` 函数，如果传递的是数组/对象，则会复制到剪贴板之前运行 `JSON.stringify` 函数格式化数组/对象。

```html
<div x-data="{ items: ['foo', 'bar'] }">
    <button type="button" @click="$clipboard(items)">Copy to Clipboard</button>
</div>
```

点击复制按钮剪切板内容为：`["foo","bar"]`。

## `x-clipboard` 指令

Clipboard 包还包含一个 `x-clipboard` 指令可以添加到任何元素（通常是 `a` 或者 `button` 标签）的指令，并且它将复制点击事件的表达式的结果：

```html
<div x-data="{ input: 'Foo!' }">
    <button x-clipboard="input">
        Copy to Clipboard
    </button>
</div>
```

### `.raw` 修饰符

如果需要复制字符串等原始内容，可以使用 `.raw` 修饰符：

```html
<button x-data x-clipboard.raw="Hello world">
    Copy to Clipboard
</button>
```
