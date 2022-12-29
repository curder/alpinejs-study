# x-bind

`x-bind` 指令允许根据 JavaScript 表达式的结果在元素上设置 HTML 属性。

例如使用 `x-bind` 指令设置输入框 placeholder 的值：

```html {2}
<input x-data="{ placeholder: 'Type something...' }"
       x-bind:placeholder="placeholder"
       type="text">
```

## 语法糖

`x-bind:` 可以使用语法糖 **`:`**。

例如，这里是与上面相同的输入元素，但重构为使用语法糖 **`:`**。

```html {2}
<input x-data="{ placeholder: 'Type something...' }"
       :placeholder="placeholder"
       type="text">
```

## 绑定类

`x-bind` 最常用于根据 Alpine 状态在元素上设置特定的 CSS 类。

下面的示例是一个简单的下拉切换，但将使用 `hidden` 类来切换元素，而不是使用 [`x-show`](./x-show.md)。

```html

<style>.hidden {
    display: none !important;
}</style>

<div x-data="{ open: false }">
    <button x-on:click="open = ! open">Toggle</button>
    <span :class="open ? '' : 'hidden'">Content</span>
</div>
```

### 短路语法糖

可以使用 JavaScript 的短路规则代替三元运算符，当 `show` 为 `false` 时则添加 `hidden` 类：

::: code-group

```html [短路运算]
<div :class="show || 'hidden'">
```

```html [三元运算符]
<div :class="show ? '' : 'hidden'">
```

:::

也可以使用相反的方法，当 `closed` 为 `true` 时则添加 `hidden` 类。

::: code-group

```html [短路运算]
<div :class="closed && 'hidden'">
```

```html [三元运算符]
<div :class="closed ? 'hidden' : ''">
```

:::

### 类对象语法

Alpine 提供了用于切换类的附加语法。

通过传递一个 JavaScript 对象，其中键为 class 类，值是布尔值，Alpine 将知道要应用哪些类以及要删除哪些类。例如：

```html
<div x-data="{show: false}" :class="{ 'hidden': ! show }">Content</div>
```

该技术为其他方法提供了独特的优势。使用对象语法时，Alpine 不会保留应用于元素class属性的原始类。

例如，如果你想在 Alpine 加载之前将 `hidden` 类应用于一个元素，并使用 Alpine 来切换它的存在，只能使用对象语法来实现该行为：

```html
<div x-data="{ show: true }" class="hidden" :class="{ 'hidden': ! show }">Content</div>
```

### 特殊行为

`x-bind:class` 行为不同于 `x-bind:` 下的其他属性。

```html
<div x-data="{hide: true}" class="opacity-50" :class="hide && 'hidden'"></div>
```

如果 `class` 是任何其他属性，`:class` 绑定将覆盖任何现有的类属性，导致 `opacity-50` 被 `hidden` 或覆盖''。

然而，Alpine 对待 class 绑定的方式不同，它可以保留元素上的现有类。

例如，如果 `hide` 为 `true` 时，则上面的示例将产生以下 DOM 元素：

```html
<div x-data="{ hide: true }"  class="opacity-50" :class="hide && 'hidden'"></div>

<!--Output-->
<div class="opacity-50 hidden"></div>
```

如果 hide 为 false，DOM 元素将如下所示：

```html
<div x-data="{ hide: false }"  class="opacity-50" :class="hide && 'hidden'"></div>

<!--Output-->
<div class="opacity-50"></div>
```

## 绑定样式

类似于用 JavaScript 对象绑定类的特殊语法，Alpine 也提供了一种基于对象的语法来绑定 `style` 属性。

就像类对象一样，此语法完全是可选的。

```html
<div x-data :style="{ color: 'red', display: 'flex' }"></div>

<!--Output-->
<div style="color: red; display: flex;"></div>
```

条件内联样式可以使用表达式，就像 `x-bind:class` 一样。

通过将样式对象用作第二个操作数，也可以在此处使用短路运算符。

```html
<div x-data x-bind:style="true && { color: 'red' }"></div>

<!--Output-->
<div style="color: red;">
```

这种方式的优点是能够将其与元素上的现有样式混合：

```html
<div x-data style="padding: 1rem;" :style="{ color: 'red', display: 'flex' }"></div>

<!--Output-->
<div style="padding: 1rem; color: red; display: flex;"></div>
```

和 Alpine 中的大多数表达式一样，始终可以使用 JavaScript 表达式的结果作为参考：

```html
<div x-data="{ styles: { color: 'red', display: 'flex' }}">
    <div :style="styles">
    </div>
</div>

<!--Output-->
<div>
    <div style="color: red; display: flex;">
</div>
```

## 直接绑定 Alpine 指令

**`x-bind`** 允许将具有不同指令和属性的对象绑定到一个元素。

对象键可以是在 Alpine 中作为属性名称编写的任何内容，这包括 Alpine 指令和修饰符，也包括纯 HTML 属性。

对象的值是纯字符串，或者在动态 Alpine 指令的情况下，由 Alpine 回调。

```html
<div x-data="dropdown">
    <button x-bind="trigger">Toggle</button>

    <span x-bind="dialogue">Dropdown Contents</span>
</div>
<script>
    document.addEventListener('alpine:init', () => {
        Alpine.data('dropdown', () => ({
            open: false,

            trigger: {
                ['x-ref']: 'trigger',
                ['@click']() {
                    this.open = true
                },
            },

            dialogue: {
                ['x-show']() {
                    return this.open
                },
                ['@click.outside']() {
                    this.open = false
                },
            },
        }))
    })
</script>
```

::: info 请注意
当被 "绑定" 或 "应用" 的指令是 [`x-for`](./x-for.md) 时，应该从回调中返回一个普通的表达式字符串。

例如：`['x-for']() { return 'item in items' }`
:::
