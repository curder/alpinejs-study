# x-on

`x-on` 允许在调度的 DOM 事件上运行代码。 如下示例，当单击按钮时会弹出提示。

```html
<button type="button" x-data x-on:click="alert('Hello')">Click Me</button>
```

`x-on` 只能监听小写名称的事件，因为 HTML 属性不区分大小写。

写作 `x-on:CLICK` 将侦听一个名为的事件 `click`。

如果需要侦听具有驼峰命名的自定义事件，则可以使用 `.camel` 帮助程序来解决此限制。

或者可以使用 `x-bind` 将 `x-on` 指令附加到 javascript 代码中的元素。

