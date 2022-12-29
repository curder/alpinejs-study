# $id

`$id` 魔法属性可用于生成元素的 ID，并确保它不会与同一页面上的其他同名 ID 冲突。

在构建可能在页面上多次出现的可重用组件（大概在后端循环的模板中）并使用 ID 属性时，魔法属性 `$id` 将非常有用。

## 基本用法

如果在一个页面上有两个 `input` 输入框元素，期望它们渲染后各自拥有唯一的 ID，可以这样做：

::: code-group
```html [Code]
<input x-data="" type="text" x-bind:id="$id('input')" />
<input x-data="" type="text" :id="$id('input')" />
```

```html [Rendered]
<input x-data="" type="text" x-bind:id="$id('input')" id="input-1">
<input x-data="" type="text" :id="$id('input')" id="input-2">
```
:::

组件渲染完后，`$id` 接受一个字符串并在页面上渲染唯一的 ID。

## 使用 $id 分组

假设想要拥有两个相同的输入元素，但这次添加 `<label>` 标签并且标签的 `for` 值跟输入框的 ID 值保持一致。

一种写法是调用魔术属性 `$id` 获取唯一 ID 值并存储在 [`x-data`](../directives/x-data.md) 中。

::: code-group
```html [Code]
<label x-data="{ id: $id('input') }" :for="id">
  <input type="text" :id="id">
</label>
<label x-data="{ id: $id('input') }" :for="id">
  <input type="text" :id="id">
</label>
```

```html [Rendered]
<label x-data="{ id: $id('input') }" :for="id" for="input-1">
  <input type="text" :id="id" id="input-1">
</label>
<label x-data="{ id: $id('input') }" :for="id" for="input-2">
  <input type="text" :id="id" id="input-2">
</label>
```
:::

上面的方法必须在组件范围内命名和存储 ID 感觉很麻烦。

为了以更灵活的完成同样的任务，可以配合 Alpine 中的 [`x-id`](../directives/x-id.md) 指令一同使用。


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

[`x-id`](../directives/x-id.md) 接受一个 ID 名称数组。在该范围内的任何用法都将使得 `$id()`  生成相同的 ID。

## 嵌套

可以自由地嵌套这些 `x-id` 组，如下所示

::: code-group
```html [Code]
<div x-data="" x-id="['text-input']">
  <label :for="$id('text-input')">
    <input :id="$id('text-input')" type="text">
  </label>

  <div x-id="['text-input']">
    <label :for="$id('text-input')">
      <input :id="$id('text-input')" type="text">
    </label>
  </div>
</div>
```

```html [Rendered]
<div x-data="" x-id="['text-input']">
  <label :for="$id('text-input')" for="text-input-1">
    <input :id="$id('text-input')" type="text" id="text-input-1">
  </label>

  <div x-id="['text-input']">
    <label :for="$id('text-input')" for="text-input-2">
      <input :id="$id('text-input')" type="text" id="text-input-2">
    </label>
  </div>
</div>
```
:::

## 循环 ID

有时运行循环逻辑时，在 ID 的末尾指定一个额外的后缀会很有帮助。

为此，`$id()` 接收可选的第二个参数，该参数将作为后缀添加到生成的 ID 的末尾。


::: code-group
```html [Code] {6}
<ul
  x-data="{items: [{id: 1}, {id: 2}, {id: 3}]}"
  x-id="['list-item']"
>
  <template :key="item.id" x-for="item in items">
    <li :id="$id('list-item', item.id)">...</li> // [!code focus]
  </template>
</ul>
```

```html [Rendered] {5-7}
<ul x-data="{items: [{id: 1}, {id: 2}, {id: 3}]}" x-id="['list-item']">
  <template :key="item.id" x-for="item in items">
    <li :id="$id('list-item', item.id)">...</li>
  </template>
  <li :id="$id('list-item', item.id)" id="list-item-1-1">...</li> // [!code focus]
  <li :id="$id('list-item', item.id)" id="list-item-1-2">...</li> // [!code focus]
  <li :id="$id('list-item', item.id)" id="list-item-1-3">...</li> // [!code focus]
</ul>
```
:::

可以看到渲染后，生成的列表的ID前缀是 `list-item-1`，后面包含 `items` 属性的 id，以确保 li 列表的 ID 是唯一的。