# x-data

Alpine 中的一切都以 `x-data` 指令开始。

`x-data` 将 HTML 块定义为 Alpine 组件，并为该组件提供响应式数据。

比如下面的切换展示与隐藏的示例：

```html

<div x-data="{open: false}">
    <button type="button" x-on:click="open = !open">Toggle</button>
    <div x-show="open">Content...</div>
</div>
```

默认情况下内容不会展示，当点击 Toggle 按钮时则会切换内容的隐藏和展示。

在 [`x-on`](x-on.md) 指令调用原生 Javascript 点击事件中动态修改 `open` 状态，达到数据的响应式效果。

## 作用域

使用 `x-data` 指令可以定义一个新的组件作用域。

`x-data` 指令中定义的状态可用于所有元素子元素，包括在其他嵌套 `x-data` 组件中。

```html

<div x-data="{ foo: 'bar' }">
    <span x-text="foo"><!-- Will output: "bar" --></span>

    <div x-data="{ bar: 'baz' }">
        <span x-text="foo"><!-- Will output: "bar" --></span>

        <div x-data="{ foo: 'bob' }">
            <span x-text="foo"><!-- Will output: "bob" --></span>
        </div>
    </div>
</div>
```

同样是使用 [`x-text`](x-text.md) 获取状态 `foo`，在第二层由于在 `x-data` 指令中没有定义 `foo` 状态，则会在外层寻找。

如果寻找到了则使用外层的 `foo` 状态，如果寻找不到则会抛出错误。

## 方法

`x-data` 存储的是一个普通的 JavaScript 对象，所以除了状态之外，还可以存储方法。

例如将上面的切换内容的逻辑提取到 `x-data` 的方法中。

```html {1}

<div x-data="{ open: false, toggle() { this.open = ! this.open } }">
    <button type="button" x-on:click="toggle()">Toggle</button>
    <div x-show="open">Content...</div>
</div>
```

在 `x-data` 上添加的方法 `toggle() { this.open = ! this.open }`，现在可以从组件内的任何地方调用 `toggle` 方法。

同时可以在 `toggle` 方法内部通过 `this.` 获取对象本身的状态。

也可以完全不使用 `toggle` 方法的调用括号。例如：

```html
  <!--Before-->
<button type="button" x-on:click="toggle()">Toggle</button> // [!code --]

<!--After-->
<button type="button" x-on:click="toggle">Toggle</button>  // [!code ++]
```

## Getters

当方法的唯一目的是根据其他状态返回数据时，可以使用 JavaScript
的 [Getter](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/get)。

使用 getter `isOpen` 重构组件而不是直接访问 `open` 状态。

```html {3,7}

<div x-data="{
    open: false,
    get isOpen() { return this.open },
    toggle() { this.open = ! this.open }
}">
    <button type="button" x-on:click="toggle">Toggle</button>
    <div x-show="isOpen">Content</div>
</div>
```

[`x-show`](x-show.md) 指令现在依赖于 `getter isOpen`，而不是直接依赖于 `open` 状态。

在这种情况下，没有明显的好处。但在某些情况下，getter 有助于在组件中提供更具表现力的语法，例如：

```html

<div x-data="{
    dateTime: new Date,
    get time() {
        return [
            this.dateTime.getHours(),
            this.dateTime.getMinutes(),
            this.dateTime.getSeconds()
        ].join(':');
    }
}">
    <button x-on:click="dateTime = new Date">Now!</button>
    <span x-text="time"></span>
</div>
```

## Setters

也可以使用 JavaScript 的 [Setter](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/set)

使用 setter `isOpen` 重构组件而不是直接设置 `open` 状态。

```html
<div x-data="{
    open: false,
    get isOpen() { return this.open },
    set isOpen(open) { this.open = open },
    toggle() { this.isOpen = ! this.isOpen }
}">
    <button type="button" x-on:click="toggle">Toggle</button>
    <div x-show="isOpen">Content</div>
</div>
```

`toggle` 方法现在依赖于 `getter isOpen` 和 `setter isOpen`，而不是直接依赖于 `open` 状态。


## 可复用的数据

如果发现 `x-data` 中有重复的内容或者发现内联的语法相对冗长，可以使用 [Alpine.data()](../globals/alpine-data.md) 将 `x-data` 对象提取到组件外。

```html

<div x-data="dropdown">
    <button type="button" x-on:click="toggle">Toggle</button>
    <div x-show="isOpen">Content</div>
</div>

<script>
    document.addEventListener('alpine:init', function () {
        Alpine.data('dropdown', function () {
            return {
                open: false,
                get isOpen() {
                    return this.open
                },
                toggle() {
                    this.open = ! this.open
                }
            }
        })
    });
</script>
```

## 无数据组件

当需要要创建一个 Alpine 组件而不需要任何数据时，可以传入一个空对象。

```html

<div x-data="{}"></div>
```

当然这种情况，也可以完全删除属性值。

```html

<div x-data></div>
```

## 单元素组件

有时 Alpine 组件中可能只有一个元素，如下所示：

```html
<!--Before-->
<div x-data="{ open: true }">
    <button type="button" x-show="open" x-on:click="open = false">Click to Hide Me</button>
</div>
```

在这些情况下，可以将 `x-data` 直接在单个元素上声明，如下所示：

```html
<!--After-->
<button x-data="{ open: true }" type="button" x-show="open" x-on:click="open = false">Click to Hide Me</button>
```
