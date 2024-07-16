# Resize

Resize 插件是[Resize Observer](https://developer.mozilla.org/en-US/docs/Web/API/Resize_Observer_API)的便捷包装器，可让在元素大小改变时轻松做出反应。

基于自定义大小的动画、智能粘性定位、根据元素大小有条件地添加属性等。


## 安装

跟 Alpine.js 的安装一样， Resize 插件同样支持从 `<script>` 脚本标签引用它或者将其作为模块导入。

### 通过 CDN 脚本


在 HTML 页面的头部包含以下 `<script>` 标签

```html
<html lang="en">
<head>
  <title>Alpine.js</title>
  <!--...-->
  <!-- Alpine Resize Plugins -->
  <script defer src="https://unpkg.com/@alpinejs/resize@3.x.x/dist/cdn.min.js"></script> // [!code focus]
  
  <script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script> // [!code focus]
</head>
<!--...-->
</html>
```

生产环境中，建议在链接中锁定特定版本号，以避免新版本中的变更造成问题。

例如，锁定版本为 3.14.1 (最新版本):

```php
<!-- Alpine Plugins -->
<script defer src="https://unpkg.com/@alpinejs/resize@3.14.1/dist/cdn.min.js"></script>
```

## 作为 NPM 模块

可以通过 `npm` / `yarn` 安装 Resize 并将其导入到一个包中。 运行以下命令来安装它：

::: code-group

```bash [yarn]
yarn add @alpinejs/resize
```

```bash [npm]
npm install @alpinejs/resize
```

:::

现在将 Resize 导入到包中并像这样初始化它：

```javascript
import Alpine from 'alpinejs'
import resize from '@alpinejs/resize' // [!code focus]
 
Alpine.plugin(resize) // [!code focus]
Alpine.start()
```


## x-resize

使用 `x-resize` 插件的主要 API 是可以添加到 Alpine 组件中的任何元素，并且当该元素由于任何原因调整大小时，提供的表达式将使用两个魔术属性：`$width` 和 `$height`。

```html
<div
    x-data="{ width: 0, height: 0 }"
    x-resize="width = $width; height = $height"
>
    <p x-text="'Width: ' + width + 'px'"></p>
    <p x-text="'Height: ' + height + 'px'"></p>
</div>
```

当元素大小改变时，`width` 和 `height` 将更新为元素的当前大小。

## 修饰符

### `.document`

默认情况下，`x-resize` 只会在元素大小改变时触发。如果需要在文档大小改变时触发，你可以添加 `.document` 修饰符。

```html
<div x-resize.document="...">
```
