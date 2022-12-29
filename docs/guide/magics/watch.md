# $watch

通过 `$watch` 魔法方法「监听」一个组件属性。

```html
<div x-data="{ open: false }"
     x-init="$watch('open', value => console.log(value))">
    <button @click="open = ! open">Toggle Open</button>
</div>
```

当按钮被点击且 `open` 被改变时，提供给 `$watch` 的回调函数将会被调用，当前逻辑是打印新的 `value` 的值。

可以使用 `.` 表示法观察深度嵌套的属性，例如：

```html
<div x-data="{ foo: { bar: 'baz' }}" 
     x-init="$watch('foo.bar', value => console.log(value))">
    <button @click="foo.bar = 'bob'">Toggle Open</button>
</div>
```

当按下 `Toggle Open` 按钮时，`foo.bar` 将被设置为 `bob`，并且 `bob` 将会在控制台中打印。

## 获取变更前的值

`$watch` 追踪被监视属性的先前值，可以使用回调的第二个可选参数获取变更前的值，如下所示：

```html
<div x-data="{ open: false }" 
     x-init="$watch('open', (value, oldValue) => console.log(`current: ${value}, old: ${oldValue}`))">
  <button @click="open = ! open">Toggle Open</button>
</div>
```

## 监听深度

`$watch` 将自动观察任何级别的变化，当检测到变化时，观察者将返回观察到的属性的值，而不是已更改的子属性的值。

```html
<div x-data="{ foo: { bar: 'baz' }}"
     x-init="$watch('foo', (value, oldValue) => console.log(value, oldValue))">
    <button @click="foo.bar = 'bob'">Toggle Open</button>
</div>
```

当按下按钮时，`foo.bar` 将被设置为 `bob`，并且 `{bar: 'bob'} {bar: 'bob'}` 将被记录到控制台（新旧值）。

如果需要获取旧的 `foo.bar` 的值需要通过监听它获得，比如`$watch('foo.bar', (value, oldValue) => console.log(value, oldValue))`。


