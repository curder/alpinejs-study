# x-if

`x-if` 用于切换页面上的元素，类似于 [`x-show`](./x-show.md)，但是它完全添加和删除它所应用的元素，而不是仅仅将其 CSS
显示属性更改为“无”。

由于这种行为差异，`x-if` 不应直接应用于元素，而应应用于 `<template>` 包含元素的标记。

这样，Alpine 可以在元素从页面中删除后保留该元素的记录。

```html {3,5}

<div x-data="{ open: false }">
    <button type="button" x-on:click="open = ! open">Toggle</button>
    <template x-if="open"> // [!code focus]
        <div>Content</div>
    </template> // [!code focus]
</div>
```

与 [`x-show`](./x-show.md) 不同的是 `x-if` 不支持使用 [`x-transition`](./x-transition.md) 切换过渡。

**请注意：** `<template>` 标签只能包含一个根级元素。