# $refs

`$refs` 是一个用来在组件中获取原生 DOM 元素的魔法属性。

可以在需要时手动获取到原始的 DOM 元素。

它通常用作 `querySelector()` 的替代方案。

::: code-group

```html [remove()]
<div x-data>
  <button type="button" @click="$refs.text?.remove()">Remove Text</button>

  <span x-ref="text">Hello Alpine.js</span>
</div>
```

```html [innerHTML]
<div x-data>
  <button type="button" @click="$refs.text.innerHTML = `Hello World!`">Change</button>

  <span x-ref="text">Hello Alpine.js</span>
</div>
```
:::

当按下 `<button>` 时，`<span>` 标签将被删除。

`$refs.text` 会引用 [`x-ref="text"`](../directives/x-ref.md) 指令定义的 DOM 元素。
