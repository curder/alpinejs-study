# x-show

`x-show` 提供了一种显示和隐藏 DOM 元素的表达方式。

下面是一个使用 `x-show` 来显示和隐藏下拉菜单的功能。

```html
<div x-data="{ open: false }">
    <button type="button" x-on:click="open = ! open">Toggle</button>

    <div x-show="open">Content</div>
</div>
```

::: info x-cloak
如果页面加载的默认状态 `x-show` 表达式的值为 `false`，可能希望在页面上使用 [`x-cloak`](./x-cloak.md) 来避免页面闪烁。
:::

## 过渡效果

如果要对 `x-show` 行为应用平滑过渡，可以将它与 `x-transition` 结合使用。例如：

```html {4}
<div x-data="{ open: false }">
    <button type="button" x-on:click="open = ! open">Toggle</button>

    <div x-transition x-show="open">Content</div>
</div>
```

## 使用 `important` 修饰符

有时需要在 CSS 选择器中添加 `!important` 标志的属性才能真正隐藏一个元素，它将优先于 Alpine 设置的内联样式。

在这些情况下，可以使用 `.important` 修饰符将内联样式设置为 `display: none !important`

```html
<div x-data="{ open: false }">
    <button type="button" x-on:click="open = ! open">Toggle</button>

    <div x-show.important="open">Content</div>
</div>
```