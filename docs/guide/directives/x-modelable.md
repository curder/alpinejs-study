# x-modelable

`x-modelable` 允许将任何 Alpine 属性公开为 [`x-model`](/x-model.md) 指令的目标。

```html
<div x-data="{ number: 5 }">
  <div x-data="{ count: 0 }" x-model="number" x-modelable="count">
    <button @click="count++">Increment</button>

    <p>Count: <span x-text="count"></span></p>
  </div>

  <p>Number: <span x-text="number"></span></p>
</div>
```

如上，外部范围属性 `number` 现在绑定到内部范围属性 `count`。

通常用于将内部组件中包含的部分属性暴露到外部组件中。