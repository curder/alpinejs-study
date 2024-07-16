# Focus

Alpine.js 的 Focus 插件允许更方便的管理页面上的焦点。

> 该插件在内部大量使用了开源工具：[Tabbable](https://github.com/focus-trap/tabbable) 感谢开源。


## 安装

跟 Alpine.js 的安装一样， Focus 插件同样支持从 `<script>` 脚本标签引用它或者将其作为模块导入。

### 通过 CDN 脚本


在 HTML 页面的头部包含以下 `<script>` 标签

```html
<html lang="en">
<head>
  <title>Alpine.js</title>
  <!--...-->
  <!-- Alpine Focus Plugins -->
  <script defer src="https://unpkg.com/@alpinejs/focus@3.x.x/dist/cdn.min.js"></script> // [!code focus]
  
  <script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script> // [!code focus]
</head>
<!--...-->
</html>
```

生产环境中，建议在链接中锁定特定版本号，以避免新版本中的变更造成问题。

例如，锁定版本为 3.14.1 (最新版本):

```html
<!-- Alpine Plugins -->
<script defer src="https://unpkg.com/@alpinejs/focus@3.14.1/dist/cdn.min.js"></script>
```


### 作为 NPM 模块

可以通过 `npm` / `yarn` 安装 Focus 并将其导入到一个包中。 运行以下命令来安装它：

::: code-group

```bash [yarn]
yarn add @alpinejs/focus
```

```bash [npm]
npm install @alpinejs/focus
```

:::

现在将 Mask 导入到包中并像这样初始化它：

```javascript
import Alpine from 'alpinejs'
import focus from '@alpinejs/focus' // [!code focus]
 
Alpine.plugin(focus) // [!code focus]
Alpine.start()
```

## x-trap

Focus 提供了 `x-trap` 指令用于在元素中捕获焦点。

`x-trap` 接受 JS 表达式。

如果该表达式的结果为真，那么焦点将被聚焦该元素内，直到表达式变为假时焦点将返回到之前的位置。

```html {9,14-22}
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
        name="viewport">
  <meta content="ie=edge" http-equiv="X-UA-Compatible">
  <title>Alpine.js Focus Plugin.</title>
  <script defer src="https://unpkg.com/@alpinejs/focus@3.x.x/dist/cdn.min.js"></script> // [!code focus]

  <script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
</head>
<body>
<div x-data="{ open: false }"> // [!code focus]
  <button @click="open = true">Open Dialog</button> // [!code focus]

  <div x-show="open" x-trap="open"> // [!code focus]
    <input placeholder="Some input..." type="text"> // [!code focus]
    <input placeholder="Some other input..." type="text"> // [!code focus]
    <button @click="open = false">Close Dialog</button> // [!code focus]
  </div> // [!code focus]
</div> // [!code focus]
</body>
</html>
```

> 焦点现在被聚焦在这个对话框中，这意味着使用 Tab 键只能在这个对话框中切换/聚焦元素。
> 
> 如果反复按 Tab 键，焦点将始终停留在此对话框中。

## 嵌套

有时可能在对话框中嵌套另一个对话框。使用 `x-trap` 可以自动处理这种情况。

`x-trap` 跟踪新“捕获”的元素并存储最后一个主动聚焦的元素。

一旦元素“脱陷”，焦点将返回到原来的位置。

这种机制是递归的，所以你可以无限次地在一个已经被捕获的元素中捕获焦点，然后依次“解除捕获”每个元素。


```html
<div x-data="{ open: false }">
  <button @click="open = true">Open Dialog</button>

  <span x-show="open" x-trap="open">

        <input placeholder="Some input..." type="text">
        <input placeholder="Some other input..." type="text">

        <div x-data="{ open: false }">
            <button @click="open = true">Open Nested Dialog</button>

            <span x-show="open" x-trap="open">
                <input placeholder="Some input..." type="text">
                <input placeholder="Some other input..." type="text">
                <button @click="open = false">Close Nested Dialog</button>
            </span>
        </div>

        <button @click="open = false">Close Dialog</button>
    </span>
</div>
```

## 修饰符

### `.inert`

在构建对话框/弹出成等内容时，建议在捕获焦点时对屏幕阅读器隐藏页面上的所有其他元素。

通过添加 `.inert` 修饰符到 `x-trap`，当焦点被捕获时页面上的所有其他元素都将接收 `aria-hidden="true"` 属性，而当焦点捕获被禁用时这些属性也将被删除。

```html
<body x-data="{ open: false }">
    <div x-trap.inert="open">
        ...
    </div>
 
    <div>
        ...
    </div>
</body>
 
<!-- When `open` is `true`: -->
<body x-data="{ open: true }">
    <div x-trap.inert="open">
        ...
    </div>
 
    <div aria-hidden="true">
        ...
    </div>
</body>
```

可以看到 `open` 状态为 `true` 时，页面上的所有其他元素都被添加 `aria-hidden="true"` 属性

### `.noscroll`

使用 Alpine.js 构建对话框/弹出层时，建议在对话框打开时禁用周围内容的滚动。

允许使用 `.noscroll` 修饰符自动执行此操作。

通过添加 `.noscroll`，Alpine.js 将从页面中删除滚动条并阻止用户在对话框打开时向下滚动页面。

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
        name="viewport">
  <meta content="ie=edge" http-equiv="X-UA-Compatible">
  <title>Alpine.js Focus Plugin.</title>
  <script defer src="https://unpkg.com/@alpinejs/focus@3.x.x/dist/cdn.min.js"></script>

  <script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
</head>
<body>
    <div style="padding-top: 400px;" x-data="{ open: false }"> // [!code focus]
      <button @click="open = true">Open Dialog</button> // [!code focus]

      <div x-show="open" x-trap.noscroll="open"> // [!code focus]
        Dialog Contents // [!code focus]
        <button @click="open = false">Close Dialog</button> // [!code focus]
      </div> // [!code focus]
    </div> // [!code focus]
</body>
</html>
```
当点击 `Open Dialog` 按钮可以看到在HTML标签添加上样式属性 `style="overflow: hidden; padding-right: 0px;"` 同时浏览器滚动条被自动禁用。

### `.noreturn`

有时可能不希望焦点返回到之前的位置。比如在聚焦输入时触发的下拉菜单，关闭时将焦点返回到输入只会触发下拉菜单再次打开。

`x-trap` 允许使用 `.noreturn` 修饰符禁用此行为。

通过添加 `.noreturn` Alpine.js 不会将焦点返回到 `x-trap` 为 `false`。

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
        name="viewport">
  <meta content="ie=edge" http-equiv="X-UA-Compatible">
  <title>Alpine.js Focus Plugin.</title>
  <script defer src="https://unpkg.com/@alpinejs/focus@3.x.x/dist/cdn.min.js"></script>

  <script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
</head>
<body>
    <div x-data="{ open: false }" x-trap.noreturn="open"> // [!code focus]
      <input  // [!code focus]
          @keyup="open =  ['a', 'aa', 'aaa', 'aaaa', 'aaaaa', 'aaaaaa'].includes($event.target.value)"  // [!code focus] 
          type="search"  // [!code focus]
          placeholder="Search for something"  // [!code focus]

      <div x-show="open"> // [!code focus]
        Search results  // [!code focus]

        <button @click="open = false">Close</button> // [!code focus]
      </div> // [!code focus]
    </div> // [!code focus]
</body>
</html>
```

通过添加 `.noreturn` 修饰符可以发现，当点击 `Close` 按钮聚焦会从输入框中释放。

## `$focus`

插件提供了许多较小的实用功能来管理页面中的焦点，这些实用功能通过 `$focus` 魔法属性访问。

| 魔法属性 Property                     | 描述 Description                                       |
|-----------------------------------|------------------------------------------------------|
| `focus(el)`                       | 聚焦传递的元素（解决内部处理使用 `nextTick` 等问题）                     |
| `focusable(el)`                   | 检测元素是否可聚焦                                            |
| `focusables()`                    | 获取当前元素内的所有“可聚焦”元素                                    |
| `focused()`	                      | 获取页面上当前获得焦点的元素                                       |
| `lastFocused()`                   | 获取页面上最后一个获得焦点的元素                                     |
| `within(el)`	                     | 指定一个元素以将 `$focus` 魔法作用域（默认为当前元素）                     |
| `first()`	                        | 聚焦第一个可聚焦元素                                           |
| `last()`	                         | 聚焦最后一个可聚焦元素                                          |
| [next()](#next-and-previous)	     | 聚焦下一个可聚焦元素                                           |
| [previous()](#next-and-previous)	 | 聚焦前一个可聚焦元素                                           |
| `noscroll()`	                     | 防止滚动到要聚焦的元素                                          |
| [wrap()](#wrap)	                  | 检索“下一个”或“上一个”时使用“环绕”（例如，如果获取最后一个元素的“下一个”元素，则返回第一个元素） |
| `getFirst()`	                     | 检索第一个可聚焦元素                                           |
| `getLast()`	                      | 检索最后一个可聚焦的元素                                         |
| `getNext()`	                      | 检索下一个可聚焦元素                                           |
| `getPrevious()`                   | 检索前一个可聚焦元素                                           |


### `.next()` and `.previous()`

下面的示例允许用户使用箭头键控制按钮组内的焦点。可以通过单击按钮进行测试，然后使用箭头键移动焦点：

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
        name="viewport">
  <meta content="ie=edge" http-equiv="X-UA-Compatible">
  <title>Alpine.js Focus Plugin.</title>
  <script defer src="https://unpkg.com/@alpinejs/focus@3.x.x/dist/cdn.min.js"></script>

  <script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
</head>
<body>
    <div x-data=""  // [!code focus]
      @keydown.right="$focus.next()"  // [!code focus]
      @keydown.left="$focus.previous()"  // [!code focus]
    >  // [!code focus]
      <button>First</button>  // [!code focus]
      <button>Second</button>  // [!code focus]
      <button>Third</button>  // [!code focus]
    </div>  // [!code focus]
</body>
</html>
```

点击 `First` 按钮，紧接着可以使用箭头左右键对按钮聚焦进行左右移动。

### `.wrap()`

但是如果最后一个按钮获得焦点后，再按向右箭头将不会执行任何操作。可以通过添加 `.wrap()` 方法，使焦点“环绕”：

```html {15,16}
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
        name="viewport">
  <meta content="ie=edge" http-equiv="X-UA-Compatible">
  <title>Alpine.js Focus Plugin.</title>
  <script defer src="https://unpkg.com/@alpinejs/focus@3.x.x/dist/cdn.min.js"></script>

  <script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
</head>
<body>
    <div x-data=""  // [!code focus]
         @keydown.right="$focus.wrap().next()"  // [!code focus]
         @keydown.left="$focus.wrap().previous()"  // [!code focus]
    >  // [!code focus]
      <button>First</button>  // [!code focus]
      <button>Second</button>  // [!code focus]
      <button>Third</button>  // [!code focus]
    </div>  // [!code focus]
</body>
</html>
```


### `within()`

定义一个组聚焦按钮，点击其中一个可以聚焦到第一个元素，点击另一个按钮另一个聚焦最后一个元素。

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
        name="viewport">
  <meta content="ie=edge" http-equiv="X-UA-Compatible">
  <title>Alpine.js Focus Plugin.</title>
  <script defer src="https://unpkg.com/@alpinejs/focus@3.x.x/dist/cdn.min.js"></script>

  <script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
</head>
<body>
    <div x-data="{ consoleFocusElement() { console.log($refs.buttons) } }">
      <button @click="$focus.within($refs.buttons).first(); consoleFocusElement()">Focus "First"</button>
      <button @click="$focus.within($refs.buttons).last(); consoleFocusElement()">Focus "Last"</button>

      <div
        x-ref="buttons"
        @keydown.right="$focus.wrap().next()"
        @keydown.left="$focus.wrap().previous()"
      >
        <button>First</button>
        <button>Second</button>
        <button>Third</button>
      </div>
    </div>
</body>
</html>
```

给每个按钮添加一个 `.within()` 方法，以便 `$focus` 知道将自身范围限定到不同的元素（使用 div 包裹按钮组）。

