# x-on

`x-on` 允许在调度的 DOM 事件上运行代码。 如下示例，当单击按钮时会弹出提示。

```html
<button type="button" x-data x-on:click="console.log('Hello')">Click Me</button>
```

`x-on` 只能监听小写名称的事件，因为 HTML 属性不区分大小写。

写作 `x-on:CLICK` 将侦听一个名为的事件 `click`。

如果需要侦听具有驼峰命名的自定义事件，则可以使用 `.camel` 帮助程序来解决此限制。

或者可以使用 `x-bind` 将 `x-on` 指令附加到 javascript 代码中的元素。

## 语法糖

Alpine 中支持将 `x-on:` 缩写成 `@`，例如：

```html
<!--Before-->
<button type="button" x-data x-on:click="console.log('Hello')">Click Me</button>

<!--After-->
<button type="button" x-data @click="console.log('Hello')">Click Me</button>
```

## 事件对象

如果需要在表达式中访问原生的 JavaScript 事件对象，可以使用 Alpine 提供的 `$event` 获取事件属性。

```html
<button @click="console.log($event.target.getAttribute('message'))" message="Hello World">Say Hi</button>
```

上面通过 `$event.target.getAttribute()` 方法获取事件 DOM 的属性，也可以获取通过 `$event.target.innerHTML` 获取元素内部HTML。

另外，Alpine 还将事件对象传递给任何不带尾随括号引用的方法。例如：

```html
<button x-data @click="handleClick">Click Me</button>
<script>
const handleClick = e => {
  console.log(e.target)
};
</script>
```

## 键盘事件

Alpine 可以很容易地监听特定键上 `keydown` 的 `keyup` 事件。

下面是侦听输入元素内的 Enter 键的示例：

```html
<input x-data type="text" @keyup.enter="console.log('Keyup enter submitted!')" />
```

同时也可以添加一些键修饰符以实现更复杂的侦听器。例如：

按住并按下 **Shift** 键时运行的侦听 **Enter** 器，但在 **Enter** 单独按下时不会运行。

```html
<input x-data type="text" @keyup.shift.enter="console.log('Keyup shift enter submitted!')" />
```

可以直接使用通过 [`KeyboardEvent.keys`](https://developer.mozilla.org/zh-CN/docs/Web/API/UI_Events/Keyboard_event_key_values) 修饰符公开的任何有效键名，比如 `PageDown` 需要将它们转换为驼峰写法。

```html
<input x-data type="text" @keyup.page-down="console.log('Page down submitted!')" />
```

为了便于参考，这里列出了常用的修饰键。

| 修饰符	                           | 键盘键                            |
|--------------------------------|:-------------------------------|
| `.shift`                       | 	Shift 换挡键                     |
| `.enter`                       | 	Enter 确认键                     |
| `.space`                       | 	Space 空格键                     |
| `.ctrl`                        | 	控制键                           |
| `.meta`                        | 	Mac 对应 Cmd，Windows 对应 Windows |
| `.alt`                         | 	Alt 按键                        |
| `.up` `.down` `.left` `.right` | 	上/下/左/右箭头                     |
| `.escape`                      | 	ESC按键                         |
| `.tab`                         | 	Tab按键                         |
| `.caps-lock`                   | 	大写锁定                          |               
| `.equal`                       | 	等于号                           |
| `.period`                      | 	句号                            |
| `.slash`                       | 	斜线 /                          |

## 自定义事件

AlpineJS 事件监听器是原生 DOM 事件监听器封装，因此它可以监听任何 DOM 事件，包括自定义事件。

下面是一个自定义 DOM 事件调度并监听它的组件示例：

```html
<div x-data @custom-event="console.log('Click dispatchEvent button was clicked!')">
    <button @click="$event.target.dispatchEvent(new CustomEvent('custom-event', { bubbles: true }))">Click dispatchEvent</button>
</div>
```

单击按钮时，`@custom-event` 将调用侦听器。

因为 `.dispatchEvent()` 的写法很冗长，AlpineJS 提供了一个 `$dispatch` 帮助程序来简化事情。

AlpineJS 提供一个魔法属性 `$dispatch` 重写的同一个组件。

```html
<div x-data @custom-event="console.log('Click $dispatch button was Clicked!')">
  <button @click="$dispatch('custom-event')">Click $dispatch</button>
</div>
```

当然，也可以在 JavaScript 中通过使用 `addEventListener()` 来监听 AlpineJS 中发布的自定义事件。如下：

```html
<button x-data @click="$dispatch('my-custom-event', {key: 'value'})">Click $dispatch</button>
<script>
window.addEventListener('my-custom-event', (e) => console.log(e.detail.key))
</script>
```


## 修饰符

AlpineJS 提供了许多指令修饰符来自定义事件侦听器的行为。

### 阻止 prevent

**`.prevent`** 相当于在浏览器事件对象的侦听器内部调用。 **`.preventDefault()`** 方法。

```html
<form x-data @submit.prevent="console.log('Form submitted')" action="/url">
  <button type="submit">Submit</button>
</form>
```

在上面的示例中使用修饰符 `.prevent`，单击 Submit 提交按钮后不会将表单提交到 `/url`。

相反，AlpineJS 的监听器将处理它并"阻止"事件被进一步处理。

### 停止 stop

类似于 `.prevent` 修饰符，`.stop` 修饰符相当于在浏览器事件对象内部调用 [`.stopPropagation()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Event/stopPropagation) 监听器。


```html {2}
<div x-data @click="console.log('We will not get logged')">
  <button type="button" @click.stop>Click Me</button> // [!code focus]
</div>
```

在上面的示例中，单击按钮不会在控制台输出日志。是因为立即停止了事件的传播，并且不允许它"冒泡"到其 `<div>` 上的 `@click` 侦听器。

### 外面 outside

`.outside` 是一个用于监听它所附加的元素之外的点击。

下面是下拉组件示例：

```html {4}
<div x-data="{ open: false }">
    <button @click="open = ! open">Toggle</button>

    <div x-show="open" @click.outside="open = false"> // [!code focus]
        Contents
    </div>
</div>
```

在上面的示例中，通过单击 `Toggle` 按钮显示下拉列表内容后，可以通过单击内容之外的页面上的任意位置来关闭下拉列表。

因为 `.outside` 正在监听并非来自其注册元素的点击。

### window 对象

`x-on` 可以添加 `.window` 修饰符，Alpine 将在页面的根对象 `window` 上注册事件监听器而不是元素本身。

```html
<button x-data @keyup.escape.window="console.log('escape Window alarm')">Click Me</button>
```

上面的代码片段将监听页面上任何位置按下的 `Esc` 转义键。

### 文档 document

`.document` 工作方式类似于 `.window` 仅在 `document` 全局而不是全局上注册侦听器 `window`。

```html
<button x-data @keyup.escape.document="console.log('escape document alarm')">Click Me</button>
```

### 去抖动 debounce

### 限流 throttle

### 自身 self

### 驼峰 camel

### 点 dot

### 被动 passive

[阅读更多关于被动倾听者的信息](https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/addEventListener#%E4%BD%BF%E7%94%A8_passive_%E6%94%B9%E5%96%84%E6%BB%9A%E5%B1%8F%E6%80%A7%E8%83%BD)

