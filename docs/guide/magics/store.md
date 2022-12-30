# $store

使用 `$store` 魔法属性可以方便的使用 `Alpine.store()` 访问在全局 Alpine.js 注册状态。例如：

```html {2,3}
<div x-data>
  <button @click="$store.darkMode.toggle()">Toggle Dark Mode</button> // [!code focus]
  <div :class="$store.darkMode.on && 'bg-black'">Some contents</div> // [!code focus]
</div>

<script>
document.addEventListener('alpine:init', () => {
  Alpine.store('darkMode', {
    on: false,

    toggle() {
      this.on = !this.on
    }
  })
})
</script>
```

鉴于已经注册了 `darkMode` 的状态并设置 `on` 属性为 `false`，当按下按钮时，属性 `on` 将是 `true` 并且对应的 `div` 将添加 `bg-black` 样式类。

## 单值存储

如果不需要整个对象作为状态存储，也可以设置和使用任何简单类型的数据作为状态存储。

比如下面使用简单的布尔值作为状态存储：

```html
<div x-data>
  <button @click="$store.on = ! $store.on">Toggle Dark Mode</button>

  <div :class="$store.on && 'bg-black'">Some contents</div>
</div>

<script>
document.addEventListener('alpine:init', () => {
  Alpine.store('on', false)
});
</script>
```

[点击这里阅读更多有关 `Alpine.store()` 的信息](../globals/alpine-store.md)