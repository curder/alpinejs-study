# Morph

Alpine 的 Morph 插件允许将页面上的元素变换为提供的 HTML 模板，同时在变换的元素中保留任何浏览器状态或 Alpine 状态。

这对于在不丢失 Alpine 的页面状态的情况下从服务器请求更新 HTML 很有用。

## 安装

跟 Alpine.js 的安装一样， Morph 插件同样支持从 `<script>` 脚本标签引用它或者将其作为模块导入。

### 通过 CDN 脚本

在 HTML 页面的头部包含以下 `<script>` 标签

```html

<html lang="en">
<head>
  <title>Alpine.js</title>
  <!--...-->
  <!-- Alpine Morph Plugins -->
  <script defer src="https://unpkg.com/@alpinejs/morph@3.x.x/dist/cdn.min.js"></script>// [!code focus]

  <script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>// [!code focus]
</head>
<!--...-->
</html>
```

生产环境中，建议在链接中锁定特定版本号，以避免新版本中的变更造成问题。

例如，锁定版本为 3.14.1 (最新版本):

```html
<!-- Alpine Plugins -->
<script defer src="https://unpkg.com/@alpinejs/morph@3.14.1/dist/cdn.min.js"></script>
```

### 作为 NPM 模块

可以通过 `npm` / `yarn` 安装 Morph 并将其导入到一个包中。 运行以下命令来安装它：

::: code-group

```bash [yarn]
yarn add @alpinejs/morph
```

```bash [npm]
npm install @alpinejs/morph
```

:::

现在将 Mask 导入到包中并像这样初始化它：

```javascript
import Alpine from 'alpinejs'
import morph from '@alpinejs/morph' // [!code focus]

Alpine.plugin(morph) // [!code focus]
Alpine.start()
```

## `Alpine.morph()`

根据 `Alpine.morph(el, newHtml)` 传入的 HTML 强制变换 DOM 节点。它接受以下参数

- `el` 页面的 DOM 元素
- `newHtml` 用作将 DOM 元素变形为模板的 HTML 字符串
- `options`（选填）主要用于[注入生命周期](#生命周期钩子)的选项对象

下面是使用 `Alpine.morph()` 新 HTML 更新 Alpine 组件的示例：（在实际应用中，这个新 HTML 可能来自服务器）

```html {14-36}
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
        name="viewport">
  <meta content="ie=edge" http-equiv="X-UA-Compatible">
  <title>Alpine.js Morph Plugins.</title>
  <script defer src="https://unpkg.com/@alpinejs/morph@3.x.x/dist/cdn.min.js"></script>

  <script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
</head>
<body>
<div x-data="{ message: 'Change me, then press the button!' }">
  <input type="text" x-model="message">
  <span x-text="message"></span>
</div>

<button>Run Morph</button>

<script>
document.querySelector('button').addEventListener('click', () => {
  let el = document.querySelector('div')

  Alpine.morph(el, `
            <div x-data="{ message: 'Change me, then press the button!' }">
                <h2>See how new elements have been added</h2>
 
                <input type="text" x-model="message">
                <span x-text="message"></span>
 
                <h2>but the state of this component hasn't changed? Magical.</h2>
            </div>
        `)
})
</script>
</body>
</html>
```

### 生命周期钩子

Morph 插件通过比较两个 DOM 树、活动元素和传入的 HTML 来工作。

Morph 同时遍历两个 DOM 树并比较每个节点及其子节点。

如果发现差异，它会“修补”（更改）当前的 DOM 树以匹配传入的 HTML 树。

虽然默认算法非常强大，但在某些情况下，可能希望进入其生命周期并在其发生时观察或更改其行为。

在我们进入可用的生命周期钩子本身之前，首先列出它们接收的所有潜在参数并解释每个参数是什么：

- `el` 页面上将被“变换”（由 Morph 更改）的实际当前 DOM 元素。
- `toEl` 这是一个“模板元素”。它是一个临时元素，表示实时 `el` 将被修补到什么地方。它永远不会实际出现在页面上，只能用于参考目的。
- `childrenOnly()` 这是一个可以在钩子内部调用的函数，它告诉 Morph 跳过当前元素，只“变换”它的子元素。
- `skip()` 在钩子内调用时将“跳过”比较/修补自身和当前元素的子元素的函数。

以下是可用的生命周期钩子（作为第三个参数传递给 `Alpine.morph(..., options)`）：

| 选项 Option                                | 描述 Description                                                       |
|------------------------------------------|----------------------------------------------------------------------|
| `updating(el, toEl, childrenOnly, skip)` | 在用比较 `toEl` 修补 `el` 之前调用。                                            |
| `updated(el, toEl)`                      | 在 Morph 修补 `el` 之后调用                                                 |
| `removing(el, skip)`                     | 在 Morph 从实时 DOM 中删除元素之前调用                                            |
| `removed(el)`                            | 在 Morph 从实时 DOM 中删除元素后调用。                                            |
| `adding(el, skip)`                       | 在添加新元素之前调用                                                           |
| `added(el)`                              | 在将新元素添加到实时 DOM 树后调用                                                  |
| `key(el)`                                | 一个可重复使用的函数，用于确定在比较/修补之前 Morph 如何“键控”树中的元素。[更多关于这里](#keys)            |
| `lookahead`                              | 一个布尔值，告诉 Morph 在其算法中启用一个额外的功能，该功能“向前看”以确保将要删除的 DOM 元素应该“移动”到后面的兄弟元素。 |

以下是所有这些生命周期钩子的代码，以供更具体的参考：

```javascript
Alpine.morph(el, newHtml, {
    updating(el, toEl, childrenOnly, skip) {
        //
    },
 
    updated(el, toEl) {
        //
    },
 
    removing(el, skip) {
        //
    },
 
    removed(el) {
        //
    },
 
    adding(el, skip) {
        //
    },
 
    added(el) {
        //
    },
 
    key(el) {
        // By default Alpine uses the `key=""` HTML attribute.
        return el.id
    },
 
    lookahead: true, // Default: false
})
```

### keys


诸如 Morph 之类的 DOM 差异实用程序尽最大努力将原始 DOM 准确地“变换”为新的 HTML。

但在某些情况下，无法确定元素是应该更改还是完全替换。

由于这个限制，Morph 有一个“关键”系统，允许开发人员“强制”保留某些元素而不是替换它们。

它们最常见的用例是循环中的兄弟列表。以下是为什么有时需要索引的示例：

```html
<!-- "Live" Dom on the page: -->
<ul>
    <li>Mark</li>
    <li>Tom</li>
    <li>Travis</li>
</ul>
 
<!-- New HTML to "morph to": -->
<ul>
    <li>Travis</li>
    <li>Mark</li>
    <li>Tom</li>
</ul>
```

鉴于上述情况，Morph 无法知道“Travis”节点已在 DOM 树中移动。它只是认为“Mark”已更改为“Travis”，“Travis”已更改为“Tom”。

这不是真正想要的，其实是希望 Morph 保留原始元素而不是更改它们，而是在 `<ul>`.

通过向每个节点添加键，我们可以像这样完成：

```html
<!-- "Live" Dom on the page: -->
<ul>
    <li key="1">Mark</li>
    <li key="2">Tom</li>
    <li key="3">Travis</li>
</ul>
 
<!-- New HTML to "morph to": -->
<ul>
    <li key="3">Travis</li>
    <li key="1">Mark</li>
    <li key="2">Tom</li>
</ul>
```

现在 `<li>` 上有“键”，Morph 将在两棵树中匹配它们并相应地移动它们。

可以使用 `:key` 配置选项配置 Morph “索引”的值。