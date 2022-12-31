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