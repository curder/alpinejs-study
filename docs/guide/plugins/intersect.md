# Intersect

Alpine.js 的 Intersect 插件是对 [Intersection Observer](https://developer.mozilla.org/zh-CN/docs/Web/API/Intersection_Observer_API) 的封装，它允许在元素进入浏览器视图时做出反应。

对于延迟加载图像或内容内容、触发动画、无限滚动、记录内容等很有用。

## 安装

跟 Alpine.js 的安装一样， Intersect 插件同样支持从 `<script>` 脚本标签引用它或者将其作为模块导入。

### 通过 CDN 脚本


在 HTML 页面的头部包含以下 `<script>` 标签

```html
<html lang="en">
<head>
  <title>Alpine.js</title>
  <!--...-->
  <!-- Alpine Intersect Plugins -->
  <script defer src="https://unpkg.com/@alpinejs/intersect@3.x.x/dist/cdn.min.js"></script> // [!code focus]
  
  <script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script> // [!code focus]
</head>
<!--...-->
</html>
```

生产环境中，建议在链接中锁定特定版本号，以避免新版本中的变更造成问题。

例如，锁定版本为 3.10.5 (最新版本):

```html
<!-- Alpine Plugins -->
<script defer src="https://unpkg.com/@alpinejs/intersect@3.10.5/dist/cdn.min.js"></script>
```


### 作为 NPM 模块

可以通过 `npm` / `yarn` 安装 Intersect 并将其导入到一个包中。 运行以下命令来安装它：

::: code-group

```bash [yarn]
yarn add @alpinejs/intersect
```

```bash [npm]
npm install @alpinejs/intersect
```

:::

现在将 Mask 导入到包中并像这样初始化它：

```javascript
import Alpine from 'alpinejs'
import intersect from '@alpinejs/intersect' // [!code focus]
 
Alpine.plugin(intersect) // [!code focus]
Alpine.start()
```

## `x-intersect`


可以添加 `x-intersect` 到 Alpine.js 任何元素的组件中，当该组件进入浏览器视窗（滚动到视图中）时，将执行提供的表达式。

在下面的代码片段中，`shown` 将一直保持为 `false` 直到元素滚动到视图中为止。届时表达式将执行并 `shown` 变为 `true`。

```html {9}
<div x-data
     x-ref="root"
     style="height: 60px;overflow-y: scroll;border: solid 1px #eaeaea;">
  <a href="javascript:void(0);"
     @click.prevent="$refs.root.scrollTo({top: $refs.root.scrollHeight, behavior: 'smooth'})">向下滚动👇</a>

  <div style="height: 50vh"></div>
  <div x-data="{ shown: false }"
       x-intersect="shown = true">
    <div x-show="shown" x-transition>
      I'm in the viewport!
    </div>
    <div x-show="! shown">&nbsp;</div>
  </div>
</div>
```

点击 **向下滚动👇** 的按钮后下方的内容才陆续渲染到视图窗口。

### 进入 `:enter`

`:enter` 后缀是 `x-intersect` 的别名，默认不添加后缀即为进入状态，相同：

```html
<div x-intersect:enter="shown = true">...</div>
```

在使用 [:leave](#离开-leave) 后缀时，可以选择使用它来清晰起见。

### 离开 `:leave`

当元素离开视口时，`:leave` 附加运行表达式：

```html
<div x-intersect:leave="shown = false">...</div>
```

## 修饰符

`x-intersect` 同时支持一些修饰符，比如：[.once](#once)、[.half](#half)、[.full](#full)、[.threshold](#threshold)、[.margin](#margin)，使用它们能更高级的效果。

### `.once`

当仅在元素第一次进入浏览器视图时对表达时计算有效。例如当触发 "enter" 动画时。

在这些情况下，可以对 `x-intersect` 添加 `.once` 修饰符来实现这个目的。

```html
<div x-intersect:level.once="shown = false">...</div>
```

### `.half`

当使用 `x-intersect` 的元素在视图的 1/2 处就执行表达式，这将对于至少显示一部分很重要的元素很有用。

```html
<div x-intersect.half="shown = true">...</div>
```

### `.full`

当使用 `x-intersect` 的元素全部出现在视图时才执行表达式，对于显示整个元素很重要的元素很有用。

```html
<div x-intersect.full="shown = true">...</div>
```

### `.threshold`

允许单独控制 [IntersectionObserver](https://developer.mozilla.org/zh-CN/docs/Web/API/Intersection_Observer_API#intersection_observer_%E7%9A%84%E6%A6%82%E5%BF%B5%E5%92%8C%E7%94%A8%E6%B3%95) 的 `threshold` 底层 属性：

取值在 0 - 100 范围内：

- 值 0 表示：如果元素的任何部分进入浏览器视图（默认行为），则触发回调。
- 值 100 表示：除非整个元素已进入浏览器视图，否则不要触发回调。

例如，如果要在一半元素进入页面后触发交集，可以使用 `.threshold.50`：

```html

<div x-intersect.threshold.50="shown = true">...</div> // when 50% of the element is in the viewport
```

如果只想在 5% 的元素进入视口时触发，你可以使用：`.threshold.05`，等等。

### `.margin`


允许控制根元素的 [IntersectionObserver](https://developer.mozilla.org/zh-CN/docs/Web/API/Intersection_Observer_API#intersection_observer_%E7%9A%84%E6%A6%82%E5%BF%B5%E5%92%8C%E7%94%A8%E6%B3%95) 的外边距 rootMargin 属性 。

可以用于调整了浏览器视图边界的大小。正值将边界扩展到视口之外，而负值将其向内缩小。

这些值的作用类似于 CSS 边距：所有边一个值，顶部/底部、左/右两个值，或顶部、右侧、底部、左侧四个值。

可以使用 `px` 传递具体像素质或 `%` 百分比值，或使用数字来获取像素值。

```html
<div x-intersect.margin.200px="loaded = true">...</div> // Load when the element is within 200px of the viewport
```

```html
<div x-intersect:leave.margin.10%.25px.25.25px="loaded = false">...</div> // Unload when the element gets within 10% of the top of the viewport, or within 25px of the other three edges
```

```html
<div x-intersect.margin.-100px="visible = true">...</div> // Mark as visible when element is more than 100 pixels into the viewport.
```