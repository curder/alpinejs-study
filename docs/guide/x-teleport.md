# x-teleport

`x-teleport` 指令允许将 Alpine 模板的一部分完全传输到页面上 DOM 的另一部分。

这对于诸如嵌套的弹出层之类的情况很有用，它有助于打破当前 Alpine 组件的 `z-index`。

通过 `x-teleport` 附加到一个模版元素，告诉 Alpine 将该元素"附加"到提供的选择器。

`x-teleport` 选择器通常允许传递给 `document.querySelector` 之类的任何字符串。

它会找到第一个匹配的元素，无论是标签名称如`body`、类名如`.class-name`、ID`#id-name` 还是[任何其他有效的 CSS 选择器](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/querySelector)。


```html
<div x-data="{ open: false }">
  <button @click="open = ! open">Toggle Modal</button>

  <template x-teleport="body">
    <div x-show="open">
      Modal contents...
    </div>
  </template>
</div>

<div>Some other content...</div>
```

请注意点击按钮切换弹出层时，实际弹出层内容显示在 “Some other content...” 元素之后，因为当 Alpine 初始化时，它会看到 `x-teleport="body"` 并附加和初始化该元素到提供的元素选择器，比如示例中的 `body` 标签。

## 事件转发

可以通过简单地在元素本身上注册事件侦听器来“转发”事件

```html
<div x-data="{ open: false }">
    <button @click="open = ! open">Toggle Modal</button>
 
    <template x-teleport="body" @click="open = false">
        <div x-show="open">
            Modal contents...
            (click to close)
        </div>
    </template>
</div>
```

点击弹出层内容会关闭弹出层。

Alpine 通过查找注册的事件侦听器来做到从 `<template>` 元素本身外部监听从被传送的元素内部派发的事件，并阻止这些事件传播到 `<template x-teleport...>` 实时传送的 DOM 元素之外。

然后它会从 `<template x-teleport...>` 创建该事件的副本。

## 嵌套

如果试图将一个弹出层嵌套在另一个弹出层中，则传送特别有用。

Alpine 使这样做变得简单：

```html
<div x-data="{ open: false }">
    <button @click="open = ! open">Toggle Modal</button>
 
    <template x-teleport="body">
        <div x-show="open">
            Modal contents...
 
            <div x-data="{ open: false }">
                <button @click="open = ! open">Toggle Nested Modal</button>
 
                <template x-teleport="body">
                    <div x-show="open">
                        Nested modal contents...
                    </div>
                </template>
            </div>
        </div>
    </template>
</div>
```

在“打开”两个弹出层之后，内容被创建为 `body` 的子元素，并将呈现为页面上的同级元素，而不再是嵌套关系。
