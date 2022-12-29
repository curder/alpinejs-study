# $dispatch

`$dispatch` 魔法属性是调度浏览器事件，通过 [`x-on`](../directives/x-on.md) 监听它。

```html
<div x-data x-on:notify="console.log('Hello World!')">
    <button @click="$dispatch('notify')">
        Notify
    </button>
</div>
```

在发送浏览器事件时，也可以将数据与分派的事件一起传递，并且通过 `.detail` 属性访问它们。

```html
<div @notify="console.log($event.detail.message)">
    <button @click="$dispatch('notify', { message: 'Hello World!' })">
        Notify
    </button>
</div>
```

请注意，由于事件冒泡，当需要捕获从同一嵌套层次结构下的节点分派的事件时，需要使用 [`.window`](../directives/x-on.md#window-对象) 修饰符：

::: code-group
```html [Without .window]
<!-- 🚫 Won't work -->
<div x-data>
    <span @notify="console.log('Without .window')"></span>
    <button @click="$dispatch('notify')">Notify</button>
</div>
```

```html [With .window]
<!-- ✅ Will work (because of .window) -->
<div x-data>
    <span @notify.window="console.log('With .window')"></span>
    <button @click="$dispatch('notify')">Notify</button>
</div>
```
:::


## 分发给其他组件

可以通过添加 `x-on` 事件的 [.window](../directives/x-on.md#window-对象) 修饰符，让组件相互通信：

```html
<div
  x-data="{ slogan: 'Hello' }"
  @set-custom-slogan.window="slogan = $event.detail.slogan"
>
  <h1 x-text="slogan"></h1>
</div>
<div x-data>
  <button @click="$dispatch('set-custom-slogan', { slogan: 'Hello World!' })">Click me</button>
</div>
```

## 发送到 x-model

可以使用 `$dispatch()` 触发数据绑定 `x-model` 的数据更新，例如：

```html
<div x-data="{ title: 'Hello' }">
    <span x-model="title">
      <h1 x-text="title"></h1>
        <button @click="$dispatch('input', 'Hello World!')">Click me</button>
      <!-- After the button is pressed, `x-model` will catch the bubbling "input" event, and update title. -->
    </span>
</div>
```

> 通过发送 `input` 事件，更新 `x-model` 绑定的属性值。
