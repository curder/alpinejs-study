# x-for

`x-for` 指令允许通过遍历列表来创建 DOM 元素。

下面是使用它创建基于数组的颜色列表的简单示例：
```html {2}

<ul x-data="{ colors: ['Red', 'Orange', 'Yellow'] }">
    <template x-for="color in colors"> // [!code focus]
        <li x-text="color"></li>
    </template>
</ul>
```

有两个规则值得注意` x-for`：

- `x-for` 必须在 `<template>` 元素上声明
- `<template>` 元素必须只有一个子元素

## 索引

如果要对 `x-for` 指令遍历的数据进行重新排序，请务必为每次迭代指定唯一的索引键。

如果没有唯一的索引键，Alpine 很难跟踪重新排序的内容并会导致排序错误。

```html {6}

<ul x-data="{ colors: [
    { id: 1, label: 'Red' },
    { id: 2, label: 'Orange' },
    { id: 3, label: 'Yellow' },
]}">
    <template x-for="color in colors" :key="color.id"> // [!code focus]
        <li x-text="color.label"></li>
    </template>
</ul>
```

现在，如果 `colors` 被添加、删除、重新排序，或者它们的 `id` 发生变化，Alpine 将 `<li>` 相应的保留或销毁迭代元素。

## 访问索引

```html {2,4}
<ul x-data="{ colors: ['Red', 'Orange', 'Yellow'] }">
    <template x-for="(color, index) in colors"> // [!code focus]
        <li>
            <span x-text="`${index} : ${color}`"></span> // [!code focus]
        </li>
    </template>
</ul>
```

也可以通过动态 `:key` 指定表达式中的索引。

```html
<template x-for="(color, index) in colors" :key="index">
```

## 遍历范围 

如果需要简单的循环 N 多次，而不是遍历数组，Alpine 提供了一个简短的语法。

```html {2}

<ul x-data>
    <template x-for="i in 5"> // [!code focus]
        <li x-text="i"></li>
    </template>
</ul>
```

**`i`** 在这种情况下可以命名为任意的合法变量名。

