# x-text

`x-text` 指令用于将元素的文本内容设置为给定表达式的结果。

下面是一个使用 [`x-data`](./x-data.md) 指令 和 `x-text`指令用于显示用户名的基本示例：

```html
Username: <strong x-data="{ username: 'Curder' }" x-text="username"></strong>
```

预览结果可以看到 `<strong>` 标签的内部文本内容将被设置为 `Curder`