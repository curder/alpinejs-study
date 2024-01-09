# Anchor

Alpine 的 Anchor 插件允许轻松地将元素的位置锚定到页面上的另一个元素。

比如：使用 Alpine 创建下拉菜单、弹出窗口、对话框和工具提示。

## 安装

跟 Alpine.js 的安装一样， Anchor 插件同样支持从 `<script>` 脚本标签引用它或者将其作为模块导入。

### 通过 CDN 脚本

在 HTML 页面的头部包含以下 `<script>` 标签。

```html
<!doctype html>
<html lang="en">
<head>
  <!--...-->
  <title>Alpine.js Anchor Plugins</title>
  <!-- Alpine Anchor Plugins -->
  <script defer src="https://unpkg.com/@alpinejs/anchor@3.x.x/dist/cdn.min.js"></script> // [!code focus]

  <script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script> // [!code focus]
</head>
<body>
<!--...-->
</body>
</html>
```
> 需确保将其包含在 Alpine 的核心 JS 文件之前即可。

生产环境中，建议在链接中锁定特定版本号，以避免新版本中的变更造成问题。

例如，锁定版本为 3.10.5 (最新版本):

```html
<!-- Alpine Plugins -->
<script defer src="https://unpkg.com/@alpinejs/anchor@3.10.5/dist/cdn.min.js"></script>
```

### 作为 NPM 模块

可以通过 `npm` / `yarn` 安装 Anchor 并将其导入到一个包中。 运行以下命令来安装它：

::: code-group

```bash [yarn]
yarn add @alpinejsanchor/
```

```bash [npm]
npm install @alpinejsanchor/
```

:::

现在将 Mask 导入到包中并像这样初始化它：

```javascript
import Alpine from 'alpinejs'
import anchor from '@alpinejs/anchor' // [!code focus]

Alpine.plugin(anchor) // [!code focus]
Alpine.start()
```

## `x-anchor`

`x-anchor` 指令是 `Anchor` 插件提供的API。

通常将 `x-anchor` 指令添加到任何元素，并向其传递对要锚定其位置的元素的引用（通常是页面上的按钮）。

默认情况下，`x-anchor` 会将元素的 CSS 设置为 `position: absolute;` 适当的 **top**、**left** 值。

如果锚定元素通常显示在参考元素下方，但页面上没有空间，则其样式将调整为呈现在元素上方。

```html
<div x-data="{ open: false }">
    <button x-ref="button" @click="open = ! open">Toggle</button>
 
    <div x-show="open" x-anchor="$refs.button">
        Dropdown content
    </div>
</div>
```

### 定位 `position`

`x-anchor` 允许使用以下修饰符自定义锚定元素的位置：

- 底部：`.bottom`，`.bottom-start`，`.bottom-end`
- 顶部：`.top`，`.top-start`，`.top-end`
- 左边：`.left`，`.left-start`，`.left-end`
- 右边：`.right`，`.right-start`，`.right-end`

`.bottom-start` 以下是使用将下拉列表放置在引用元素下方和右侧的示例：

```html
<div x-data="{ open: false }">
    <button x-ref="button" @click="open = ! open">Toggle</button>
 
    <div x-show="open" x-anchor.bottom-start="$refs.button">
        Dropdown content
    </div>
</div>
```

### 偏移量 `offset`

使用修饰符 `.offset.[px value]` 向锚定元素添加偏移量，如下所示：

```html
<div x-data="{ open: false }">
    <button x-ref="button" @click="open = ! open">Toggle</button>
 
    <div x-show="open" x-anchor.offset.10="$refs.button">
        Dropdown content
    </div>
</div>
```

### 自定义样式

默认情况下，`x-anchor`将定位样式应用到 DOM 元素。

如果希望完全控制样式，则可以传递 `.no-style` 修饰符并使用 `$anchor` 魔法来访问另一个 Alpine 表达式中的值。

`x-anchor` 下面是绕过内部样式并自行应用 `x-bind:style` 样式的示例：

```html
<div x-data="{ open: false }">
    <button x-ref="button" @click="open = ! open">Toggle</button>
 
    <div
        x-show="open"
        x-anchor.no-style="$refs.button"
        x-bind:style="{ position: 'absolute', top: $anchor.y+'px', left: $anchor.x+'px' }"
    >
        Dropdown content
    </div>
</div>
```

### 锚定 ID

`x-anchor` 指令也可以接受对任何 DOM 元素的引用，使用诸如`document.getElementById()` 通过属性锚定到元素之类的实用程序id：

```html
<div x-data="{ open: false }">
    <button id="trigger" @click="open = ! open">Toggle</button>
 
    <div x-show="open" x-anchor="document.getElementById('#trigger')">
        Dropdown content
    </div>
</div>
```