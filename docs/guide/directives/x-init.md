# x-init

`x-init` 指令允许挂载到 Alpine 中任何元素的初始化阶段。

在 DOM 更新前，将在控制台中输出 "Init" 。

```html
<div x-init="console.log('Init')"></div>
```

考虑另一个示例，其中 `x-init` 用于获取一些 JSON 并将其存储在 `x-data` 处理组件之前。

```html
<div x-data="{todo: {}}" x-init="todo = await (await fetch('https://jsonplaceholder.typicode.com/todos/10')).json();">
    <span x-text="`Todo ID: ${todo.id}`"></span>
</div>
```

## 自动执行 `init()` 方法

如果一个组件的 `x-data` 对象包含一个 `init()` 方法，它会被自动调用。例如：

```html
<div x-data="{
    init() {
        console.log('I am initialized')
    }
}">
</div>
```

这也同样适用于 `Alpine.data()` 语法注册组件的情况。

```javascript
Alpine.data('dropdown', () => ({
    init() {
        console.log('I am initialized.')
    },
}))
```

## 独立的 `x-init`

可以添加 `x-init` 到 [`x-data`](x-data.md) 指令的 HTML 块内部或外部的任何元素。例如：

```html
<span x-init="console.log('Init')"></span>
```

也可以将 `x-init` 指令单独于 [`x-data`](x-data.md) 之外的内部任意元素。 

```html
<div x-data>
    <span x-init="console.log('Init too')"></span>
</div>
```

## `$nextTick`

有时想等到 Alpine 完成渲染之后再执行一些代码，通过使用 Alpine 的 `$nextTick` 可以做到这一点。

```html
<div x-init="$nextTick(() => { ... })"></div>
```