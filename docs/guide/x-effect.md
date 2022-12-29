# x-effect

`x-effect` 用于在表达式的依赖项之一发生变化时重新计算表达式。

可以把它想象成一个观察者，在使用时不必指定要观察的属性，它会观察其中使用的所有属性。

```html
<div x-data="{ label: 'Hello' }" x-effect="console.log(label)">
    <button @click="label += ' World!'">Change Message</button>
</div>
```

加载此组件时，将运行 `x-effect` 表达式并将 "Hello" 记录到控制台中。

因为 Alpine 知道 `x-effect` 中包含的任何属性引用，所以当单击按钮时 `label` 更改，效果将重新触发并将 "Hello World!" 记录到控制台。