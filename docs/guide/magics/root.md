# $root

可用于检索任何 Alpine 组件的根元素。比如 DOM 树中包含最接近  [x-data](../directives/x-data.md) 的元素。

要获取其他元素的话，可以使用魔术属性 [$refs](./refs.md)。

```html
<div data-message="Hello World!" x-data>
  <button @click="console.log($root.dataset.message)">Console message</button>
</div>
```