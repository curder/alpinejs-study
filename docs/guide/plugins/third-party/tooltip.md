# Tooltip

[@ryangjchandler/alpine-tooltip](https://github.com/ryangjchandler/alpine-tooltip) 用于对元素添加工具提示。

插件向 Alpine 添加了一个新的 `x-tooltip` 指令，以及一系列用于更改工具提示行为的修改器。

## 安装

跟 Alpine.js 的安装一样， `@ryangjchandler/alpine-tooltip` 插件同样支持从 `<script>` 脚本标签引用它或者将其作为模块导入。

### 通过 CDN 脚本

在 HTML 页面的头部包含以下 `<script>` 标签。

```html
<!doctype html>
<html lang="en">
<head>
  <!--...-->
  <title>Alpine.js Tooltip Plugins</title>
  <!--tippy.css-->
  <link rel="stylesheet" href="https://unpkg.com/tippy.js@6/dist/tippy.css" />
  <!-- Alpine Tooltip Plugins -->
  <script defer src="https://unpkg.com/@ryangjchandler/alpine-tooltip@2.x.x/dist/cdn.min.js"></script> // [!code focus]

  <script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script> // [!code focus]
</head>
<body>
<!--...-->
</body>
</html>
```
> 需确保将其包含在 Alpine 的核心 JS 文件之前即可。

生产环境中，建议在链接中锁定特定版本号，以避免新版本中的变更造成问题。

例如，锁定版本为 2.0.0 (最新版本):

```html
<!-- Alpine Plugins -->
<script defer src="https://unpkg.com/@ryangjchandler/alpine-tooltip@2.0.0/dist/cdn.min.js"></script>
```

### 作为 NPM 模块

可以通过 `npm` / `yarn` 安装 Tooltip 并将其导入到一个包中。 运行以下命令来安装它：

::: code-group

```bash [yarn]
yarn add @ryangjchandler/alpine-tooltip
```

```bash [npm]
npm install @ryangjchandler/alpine-tooltip
```

:::

现在将 Tooltip 导入到包中并像这样初始化它：
::: code-group

```javascript [resource/js/app.js]
import Alpine from 'alpinejs'
import Tooltip from '@ryangjchandler/alpine-tooltip' // [!code focus]

Alpine.plugin(Tooltip) // [!code focus]
Alpine.start()
```

```css [resources/css/app.css]
/*注入 tippy.css 样式*/
@import "tippy.js/dist/tippy.css";

@tailwind base;
@tailwind components;
@tailwind utilities;
```
:::

也可以在注册插件时自定义 [`Tippy`](https://atomiks.github.io/tippyjs/) 属性：

```javascript
import Tooltip from '@ryangjchandler/alpine-tooltip'

Alpine.plugin(Tooltip.defaultProps({
  delay: 50,
  theme: 'dark',
  // ...
}))
```

## `x-tooltip` 指令

要创建工具提示，请在元素上使用 `x-tooltip` 指令。

```html
<div x-data="{ tooltip: 'This is crazy!' }">
    <button x-tooltip="tooltip">Hover for info!</button>
</div>
```

### `.raw` 修饰符

如果不想将工具提示的内容绑定到 Alpine 组件中的数据属性，则可以将修饰符 `.raw` 添加到指令并使用指令表达式设置内容。

```html
<button x-data x-tooltip.raw="Hello, world!">
    Raw Tooltip
</button>
```

指令内的表达式/文本将用作工具提示，并且只会初始化和配置一次。

### 禁用 Tooltip

通过将 `data` 属性设置为假值，比如空字符串、null、0或false等。

如果希望重新启用工具提示，只需将数据属性更新为真实表达式，插件就会调用 [Tippy](https://atomiks.github.io/tippyjs/) 实例上的 `enable()` 方法。

### 修饰符

`x-tooltip` 指令的更多修饰符由 `Tippy.js` 提供支持。

| 修饰符                    | 描述                                                                                         | 用法                                                                            |
|------------------------|--------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------|
| `duration`             | 更改工具栏的过渡持续时间（毫秒）                                                                           | `x-tooltip.duration.500`                                                      |
| `delay`                | 更改工具提示的转换延迟（毫秒）。                                                                           | `x-tooltip.dealy.500`<br />`x-tooltip.dealy.0-500`                            |
| `cursor`               | 确定工具提示是否跟随用户的光标。<br />默认行为将跟随光标围绕目标元素。<br />`x` 将水平跟随光标。<br />`initial`将光标置于触发器上的用户光标处。    | `x-tooltip.cursor`<br />`x-tooltip.cursor.x`<br />`x-tooltip.cursor.initial`  |
| `on`                   | 更改工具提示的触发事件。<br />默认行为是 `mouseenter` 和`focus`。                                             | `x-tooltip.on.click`<br />`x-tooltip.on.focus`<br />`x-tooltip.on.mouseenter` |
| `arrowless`            | 隐藏工具提示上的"箭头"。                                                                              | `x-tooltip.arrowless`                                                         |
| `html`                 | 允许工具提示内包含 HTML。                                                                            | `x-tooltip.html`                                                              |
| `interactive`          | 允许用户与工具提示交互（防止它消失）。                                                                        | `x-tooltip.interactive`                                                       |
| `interactive.border`   | 更改工具提示周围的不可见边框 (px) 的大小，以防止它在光标离开时隐藏。                                                      | `x-tooltip.interactive.border.30`                                             |
| `interactive.debounce` | 更改当光标离开工具提示时使交互式隐藏处理程序去抖的时间（毫秒）。                                                           | `x-tooltip.interactive.debounce.500`                                          |
| `max-width`            | 更改工具提示的`max-width` (px)属性。                                                                 | `x-tooltip.max-width.500`                                                     |
| `theme`                | 更改工具提示的主题。<br />在[这里了解](https://atomiks.github.io/tippyjs/v6/themes/#included-themes)更多信息。 | `x-tooltip.theme.light`                                                       |
| `placement`            | 更改工具提示的放置/位置。<br />在[这里了解](https://atomiks.github.io/tippyjs/v6/all-props/#placement)更多信息。 | `x-tooltip.placement.top`<br />`x-tooltip.placement.bottom-start`             |
| `animation`            | 更改用于工具提示的动画。<br />在[这里了解](https://atomiks.github.io/tippyjs/v6/animations/)更多信息。           | `x-tooltip.animation.scale`<br />`x-tooltip.animation.perspective`            |
| `no-flip`              | 禁用 Popper 的默认自动翻转行为。这允许设置展示位置 `.placement` 并始终强制执行它。                                       | `x-tooltip.placement.left.no-flip`                                            |

### 使用另一个元素作为内容

使用 HTML 元素来呈现工具提示的内容：

```html
<div x-data="{ message: 'Hello, world!' }">
    <template x-ref="template">
        <p x-text="message"></p>
    </template>

    <button x-tooltip="{
        content: () => $refs.template.innerHTML,
        allowHTML: true,
        appendTo: $root
    }">
        Show message!
    </button>
</div>
```
1. 提供了一个 `content` 属性的回调，该属性将在 `Tippy` 呈现工具提示之前调用。允许使用动态 HTML 内容作为工具提示内的内容。
2. 配置 `allowHTML: true` 允许展示 HTML 。默认情况下，HTML 将呈现为纯文本。
3. 默认情况下，Tippy 会将实际的工具提示元素添加到 `document.body`。

   由于包含 Alpine 指令，因此将它们放在实际的 Alpine 组件之外将会导致错误。

   为了解决这个问题，`Tippy` 会将元素附加到 `$root` 我们的 Alpine 组件开始的元素（在本例中为 `<div>`）。

   这允许在模板 `<template>` 内使用 Alpine 指令进行数据绑定等。

> 如果希望在内容中使用按钮或其它交互元素，则应该添加 `interactive: true` 到该对象。


## `$tooltip`

使用 `$tooltip` 可以手动实例化工具提示。

```html
<button x-data @click="$tooltip('Hello, world!')">Click me</button>
```

点击按钮后 Tooltip 将显示并在 2 秒后隐藏。

### 设置超时 `timeout`

如果希望 Tooltip 显示的时间超过 2 秒，可以提供一个对象作为 `$tooltip` 魔术函数的第二个参数。

```html
<button x-data @click="$tooltip('Hello, world!', {timeout: 5000})">Click me</button>
```

超时时长以毫秒 ( seconds * 1000) 为单位。


### `tippy` 配置

`$tooltip` 的第二个参数应该是一个对象，该对象接受 [`Tippy.js`](https://atomiks.github.io/tippyjs/v6/all-props/) 文档中的所有配置选项。

可以在第二个参数对象上指定 Tippy 支持的任何其他属性。

```html
<button x-data @click="$tooltip('Hello, world!', { delay: 500 })"></button>
```