# $nextTick

`$nextTick` 是一个运行你在 Alpine 做出响应式 DOM 更新后，执行一个给定表达式的指令。

这在需要在完成数据更新后用 DOM 状态做交互时非常有用。

```html
<div x-data="{ title: 'Hello' }">
  <button
    @click="
           title = 'Hello World!';
           $nextTick(() => console.log($el.innerText) );
    "
    x-text="title"
  ></button>
</div>
```

在上面的示例中，点击按钮不是将 `Hello` 输出到控制台，而是 `Hello World!` 将被记录，因为 `$nextTick` 用于等待 Alpine 完成更新 DOM。

## [Promises](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)

`$nextTick` 会返回一个 promise，允许使用 `$nextTick` 来暂停异步函数，直到挂起的 dom 更新之后。像这样使用时，`$nextTick` 不需要传递参数。

```html
<div x-data="{ title: 'Hello' }">
    <button
        @click="
            title = 'Hello World!';
            await $nextTick();
            console.log($el.innerText);
        "
        x-text="title"
    ></button>
</div>
```