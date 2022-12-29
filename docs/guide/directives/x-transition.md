# x-transition

Alpine 通过 `x-transition` 指令提供了一个可以在元素显示或隐藏之间创建平滑的过渡。

## 过渡助手

使用 Alpine 实现过渡的最简单方法是在 [`x-show`](/x-show.md) 元素上添加 `x-transition` 。例如：

```html {4}

<div x-data="{ open: false }">
    <button x-on:click="open = ! open">Toggle</button>

    <span x-show="open" x-transition>Content</span> // [!code focus]
</div>
```

默认情况下，`x-transition` 应用默认值来淡化和缩放效果来显示和隐藏元素。

同时可以使用附加到 `x-transition` 的修饰符来覆盖这些默认值。

### 自定义持续时间

默认情况下，持续时间进入时设置为 150 毫秒，离开时设置为 75 毫秒。

可以使用 `.duration` 修饰符配置转换所需的持续时间：

```html {4}

<div x-data="{ open: false }">
    <button x-on:click="open = ! open">Toggle</button>

    <span x-show="open" x-transition.duration.500ms>Content</span> // [!code focus]
</div>
```

通过以上自定义配置后，`<span>` 将在进入时过渡 500 毫秒，离开时过渡 500 毫秒。

如果希望专门为进入和离开自定义持续时间，可以这样做：

```html {4}

<div x-data="{ open: false }">
    <button x-on:click="open = ! open">Toggle</button>

    <span x-show="open" x-transition:enter.duration.500ms x-transition:level.duration.1000ms>Content</span> // [!code
    focus]
</div>
```

### 自定义延迟

可以像这样使用 `.delay` 修饰符延迟过渡：

```html {4}

<div x-data="{ open: false }">
    <button x-on:click="open = ! open">Toggle</button>

    <span x-show="open" x-transition.delay.50ms>Content</span> // [!code focus]
</div>
```

上面的示例会将元素的过渡和进出元素延迟 50 毫秒。

### 自定义不透明度

默认情况下，Alpine 的 `x-transition` 应用缩放和不透明度过渡来实现"淡入淡出"效果。

如果只想应用不透明度过渡（无缩放），可以像这样完成：

```html {4}

<div x-data="{ open: false }">
    <button x-on:click="open = ! open">Toggle</button>

    <span x-show="open" x-transition.opacity>Content</span> // [!code focus]
</div>
```

### 自定义比例

与 `.opacity` 修改符类似，可以配置 `x-transition` 为仅缩放（而不是过渡不透明度），如下所示：

```html {4}

<div x-data="{ open: false }">
    <button x-on:click="open = ! open">Toggle</button>

    <span x-show="open" x-transition.scale>Content</span> // [!code focus]
</div>
```

`.scale` 修饰符还提供了配置其比例值和原始值的能力：

```html {4}

<div x-data="{ open: false }">
    <button x-on:click="open = ! open">Toggle</button>

    <span x-show="open" x-transition.scale.80>Content</span> // [!code focus]
</div>
```

上面的代码片段会将元素放大和缩小 `80%`。

同样，可以分别为进入和离开过渡自定义这些值，如下所示：

```html {4}

<div x-data="{ open: false }">
    <button x-on:click="open = ! open">Toggle</button>

    <span x-show="open" x-transition:enter.scale.80 x-transition:level.scale.80>Content</span> // [!code focus]
</div>
```

要自定义比例转换的原点，可以使用 `.origin` 修饰符：

```html {4}

<div x-data="{ open: false }">
    <button x-on:click="open = ! open">Toggle</button>

    <span x-show="open" x-transition.scale.origin.top>Content</span> // [!code focus]
</div>
```

现在将使用元素的顶部作为原点而不是默认的中心来应用比例。

正如可能已经猜到的那样，此自定义的可能值为：`top`、`bottom`、`left` 和 `right`。

如果愿意，还可以组合两个原始值。

例如，如果希望刻度的原点是“右上角”可以使用：`.origin.top.right` 作为修饰符。

## 应用 CSS 类

为了直接控制过渡中的确切内容，可以在过渡的不同阶段应用 CSS 类。

以下示例使用 [TailwindCSS](https://tailwindcss.com/docs/transition-property) 实用程序类。

```html {2,8-13}

<script defer src="https://cdn.tailwindcss.com"></script> // [!code focus]

<div x-data="{ open: false }">
    <button @click="open = ! open">Toggle</button>

    <span x-show="open"
          x-transition:enter="transition ease-out duration-300" // [!code focus]
          x-transition:enter-start="opacity-0 scale-90" // [!code focus]
          x-transition:enter-end="opacity-100 scale-100" // [!code focus]
          x-transition:leave="transition ease-in duration-300" // [!code focus]
          x-transition:leave-start="opacity-100 scale-100" // [!code focus]
          x-transition:leave-end="opacity-0 scale-90" // [!code focus]
    >Content</span>
</div>
```

| 指示             | 	描述                                            |
|----------------|------------------------------------------------|
| `:enter`       | 	在整个进入阶段应用。                                    |
| `:enter-start` | 	在插入元素之前添加，在插入元素后删除一帧。                         |
| `:enter-end`   | 	在插入元素后添加一帧（同时 `enter-start` 删除），在过渡/动画完成时删除。  |
| `:leave`	      | 在整个离开阶段应用。                                     |
| `:leave-start` | 在触发离开过渡时立即添加，在一帧后删除。                           |
| `:leave-end`	  | 在触发离开过渡后添加一帧（同时 `leave-start` 删除），在过渡/动画完成时删除。 | 
