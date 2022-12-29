# x-ref

`x-ref` 指令常常搭配 `$refs` 一起使用，用于直接访问 DOM 元素。

它最适合作为 `getElementById()` 和 `querySelector()` 之类的 API 的替代。


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