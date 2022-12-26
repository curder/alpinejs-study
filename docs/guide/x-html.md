# x-html

`x-html` 允许将元素的 innerHTML 属性设置为给定表达式的结果。

::: warning 请注意
请谨慎渲染用户提供的 HTML 内容，避免 XSS 攻击
:::

下面是一个使用 `x-html` 指令来显示用户名的示例：

```html
Username: <span x-data="{ username: '<strong>Curder</strong>'}" x-html="username"></span>
```

预览结果可以看到 `<span>` 标签的内部文本内容将被设置为 `<strong>Curder</strong>`，即粗体的 `Curder`。