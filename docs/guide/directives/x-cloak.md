# x-cloak

有时，将 AlpineJS 用于模板时，在 Alpine 加载之前看到未初始化的模板内容而导致页面闪烁。

`x-cloak` 通过隐藏它所附加的元素来解决这种情况，直到 Alpine 完全加载到页面上。

要 `x-cloak` 生效必须将以下 CSS 添加到页面。

```css
[x-cloak] { display: none !important; }
```

以下示例通过添加 `x-cloak` 指令将隐藏 `<span>` 标签，尽管 AlpineJS 加载之前也仍然是隐藏状态。

```html
<style> [x-cloak] { display: none !important; } </style>

<span x-data="{ visible: false }" x-cloak x-show="visible">Content</span>
```


## 配合 `x-if`

相同的效果也可以通过 [`x-if`](x-if.md) 指令完成。

```html
<div x-data>
    <template x-if="true">
        <span x-data="{ visible: false }" x-show="visible">Content</span>
    </template>
</div>
```

因为默认情况下元素在浏览器中 `<template>` 是"隐藏"的，所以在 Alpine 有机会渲染 `<template>` 并显示它，所以在 DOM 加载完毕前不会看到它。