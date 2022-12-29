# x-id

`x-id` 允许为使用 `$id()` 生成的任何新 ID 声明一个新的"范围"。

它接受一个字符串数组（ID 名称），并为其中 `$id()` 生成的每个字符串添加一个后缀，该后缀对于页面上的其他 ID 是唯一的。

`x-id` 一般跟魔法属性 `$id()` 结合使用。

下面是使用 `x-id` 指令和魔法属性 `$id()` 的一个简短示例：

::: code-group
```html [HTML]
<div x-data="" x-id="['text-input']">
  <label :for="$id('text-input')">Username</label>
  <input type="text" :id="$id('text-input')">
</div>

<div x-data="" x-id="['text-input']">
  <label :for="$id('text-input')">Username</label>
  <input type="text" :id="$id('text-input')">
</div>
```

```html [Rendered]
<div x-data="" x-id="['text-input']">
  <label :for="$id('text-input')" for="text-input-1">Username</label>
  <input type="text" :id="$id('text-input')" id="text-input-1">
</div>

<div x-data="" x-id="['text-input']">
  <label :for="$id('text-input')" for="text-input-2">Username</label>
  <input type="text" :id="$id('text-input')" id="text-input-2">
</div>
```

:::