# x-model

`x-model` 指令允许将输入元素的值绑定到 Alpine 数据。

下面的示例是使用 `x-model` 指令将文本字段的值绑定到 Alpine 中的一段数据。

```html {2}
<div x-data="{ message: '' }">
  <input type="text" x-model="message"/> // [!code focus]

  <span x-text="message"></span>
</div>
```

当用户在输入框中输入内容时，将绑定到 `message` 上，同时使用 [`x-text`指令](./x-text.md) 将输入的内容渲染到 `<span>` 标签内。

`x-model` 是双向绑定的，意味着它既"设置"又"获取"。

除了改变数据之外，如果数据本身改变了，元素也会反映出改变。

下面使用与上面相同的示例，但添加一个按钮点击事件来更改 `message` 属性的值，观察数据的双向绑定。

```html {2}
<div x-data="{ message: '' }">
  <button @click="message = 'changed'">Change Message</button> // [!code focus]
  <input type="text" x-model="message"/> // [!code focus]

  <span x-text="message"></span>
</div>
```

现在当 `<button>` 点击时，输入元素的值将立即更新为 `changed`。

`x-model` 使用以下输入元素：

- `<input type="text">`
- `<textarea>`
- `<input type="checkbox">`
- `<input type="radio">`
- `<select>`

## 文本输入

```html {2}
<div x-data="{ message: '' }">
  <input type="text" x-model="message"/> // [!code focus]

  <span x-text="message"></span>
</div>
```

## 文本区域

```html {2}
<div x-data="{ message: '' }">
  <textarea x-model="message"></textarea> // [!code focus]

  <span x-text="message"></span>
</div>
```

## 复选框输入

### 单个复选框

```html
<div x-data="{show: false}">
  <input type="checkbox" id="checkbox" x-model="show">
 
  <label for="checkbox" x-text="show"></label>
</div>
```
### 多个复选框

```html {2-3}
<div x-data="{ colors: [] }">
  <input type="checkbox" value="red" x-model="colors" /> // [!code focus]
  <input type="checkbox" value="orange" x-model="colors" /> // [!code focus]
  <input type="checkbox" value="yellow" x-model="colors" /> // [!code focus]

  Colors: <span x-text="colors"></span>
</div>
```

## 单选框

```html {2,3}
<div x-data="{ answer: '' }">
  <input type="radio" value="yes" x-model="answer">
  <input type="radio" value="no" x-model="answer">

  Answer: <span x-text="answer"></span>
</div>
```

## 复选框

### 单选框

::: code-group

```html [Normal] {2}
<div x-data="{ color: ''}">
  <select x-model="color">
    <option>Red</option>
    <option>Orange</option>
    <option>Yellow</option>
  </select>

  Color: <span x-text="color"></span>
</div>
```

```html [带占位符的单选]
<div x-data="{ color: ''}">

  <select x-model="color">
    <option disabled value="">Select A Color</option>
    <option>Red</option>
    <option>Orange</option>
    <option>Yellow</option>
  </select>

  Color: <span x-text="color"></span>
</div>
```
:::

### 多选

::: code-group

```html [Normal]
<div x-data="{ color: ''}">
  <select x-model="color" multiple>
    <option>Red</option>
    <option>Orange</option>
    <option>Yellow</option>
  </select>

  Colors: <span x-text="color"></span>
</div>
```

```html [x-for 动态选项]
<div x-data="{ color: ''}">
  <select x-model="color" multiple>
    <template x-for="color in ['Red', 'Orange', 'Yellow']">
      <option x-text="color"></option>
    </template>
  </select>

  Color: <span x-text="color"></span>
</div>
```
:::

> 按住 `Command` 配合鼠标左键进行多选。


## 修饰符

### `.lazy`

默认情况下，在输入框使用 `x-model` 对数据进行双向绑定时，每次输入都会更新属性。

通过添加 `.lazy` 修饰符，可以强制 `x-model` 输入仅在光标离开输入框时才更新属性。

```html
<div x-data="{ username: ''}">
  <input type="text" x-model.lazy="username">
  <span x-show="username.length > 20">The username is too long.</span>
</div>
```

### `.number`

默认情况下，在 `x-model` 属性中存储的任何数据类型都是字符串。

要强制 Alpine 将值存储为 JavaScript 整型，通过添加 `.number` 修饰符即可。

```html
<div x-data="{ age: null }">
  <input type="text" x-model.number="age">
  <span x-text="typeof age"></span>
</div>
```

### .debounce

类似于 [`x-on.debounce`](./x-on.md#去抖动-debounce) ，允许通过添加 `.debounce` 修饰符到 `x-model` 指令，可以轻松地消除绑定输入的更新。

这对于实时搜索输入之类的情况很有用，比如当每次搜索属性发生变化时，都会从服务器获取新数据。

```html {2}
<div x-data="{ search: '' }">
  <input type="text" x-model.debounce="search" />
  <span x-text="search"></span>
</div>
```

默认的 `debounce` 时间是 250 毫秒，可以通过添加时间修改器来轻松自定义它。

```html
<div x-data="{ search: '' }">
  <input type="text" x-model.debounce.1500ms="search" /> // [!code focus]
  <span x-text="search"></span>
</div>
```

## `.throttle`

类似于 [`x-on.throttle`](./x-on.md#限流-throttle) 可以将触发的属性更新限制为仅在指定的时间间隔内更新。

默认节流间隔为 250 毫秒，可以通过添加时间修改器来轻松自定义它。

```html
<div x-data="{ search: '' }">
  <input type="text" x-model.throttle.1500ms="search">
  
  <span x-text="search"></span>
</div>
```

## 获取和设置 x-model

Alpine 公开了用于 `x-model` 的获取和设置，这对于可能想要覆盖默认行为的复杂 Alpine 实用程序或想要在非输入元素上允许的实例非常有用。

可以通过在 `x-model` 的元素上调用 `_x_model` 的属性访问这些实用程序。

`_x_model` 有的获取和设置绑定属性为：

- `el._x_model.get()` 返回绑定属性的值
- `el._x_model.set()` 设置绑定属性的值

```html {4,6}
<div x-data="{ username: 'Curder' }">
  <div x-ref="div" x-model="username"></div>

  <button @click="$refs.div._x_model.set('Customer Username')">Change username</button>

  <span x-text="$refs.div._x_model.get()"></span>
</div>
```

通过 [`x-ref`](./x-ref.md) 指令引用DOM，允许通过 `$ref` 直接访问 `x-ref` 指令定义的 DOM 元素名称。

`$refs.div` 引用通过 `x-ref="div"` DOM 元素。