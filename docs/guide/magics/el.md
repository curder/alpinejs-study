# $el

魔法属性 `$el` 可用于检索当前的 DOM 节点。

```html
<button x-data
        type="button"
        x-init="console.log('Init ', $el)"
        @click="$el.innerHTML = 'Hello World!'">Replace me with "Hello World!"</button>
```
- 当加载组件后执行 [`x-init`](../directives/x-init.md) 指令会打印出 `$el` 魔术属性。
- 当点击按钮则将当前 DOM 节点的 innerHTML 替换为指定字符 `Hello World!`。