# Collapse

Alpine.js 的 Collapse 插件允许使用流畅的动画展开和折叠元素。

因为这个行为和实现不同于 Alpine 的标准转换系统，所以这个功能被制作成一个专用插件。

## 安装

跟 Alpine.js 的安装一样， Collapse 插件同样支持从 `<script>` 脚本标签引用它或者将其作为模块导入。

### 通过 CDN 脚本


在 HTML 页面的头部包含以下 `<script>` 标签

```html
<html lang="en">
<head>
  <title>Alpine.js</title>
  <!--...-->
  <!-- Alpine Collapse Plugins -->
  <script defer src="https://unpkg.com/@alpinejs/collapse@3.x.x/dist/cdn.min.js"></script> // [!code focus]
  
  <script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script> // [!code focus]
</head>
<!--...-->
</html>
```

生产环境中，建议在链接中锁定特定版本号，以避免新版本中的变更造成问题。

例如，锁定版本为 3.10.5 (最新版本):

```html
<!-- Alpine Plugins -->
<script defer src="https://unpkg.com/@alpinejs/collapse@3.10.5/dist/cdn.min.js"></script>
```


### 作为 NPM 模块

可以通过 `npm` / `yarn` 安装 Collapse 并将其导入到一个包中。 运行以下命令来安装它：

::: code-group

```bash [yarn]
yarn add @alpinejs/collapse
```

```bash [npm]
npm install @alpinejs/collapse
```

:::

现在将 Mask 导入到包中并像这样初始化它：

```javascript
import Alpine from 'alpinejs'
import collapse from '@alpinejs/collapse' // [!code focus]
 
Alpine.plugin(collapse) // [!code focus]
Alpine.start()
```

## `x-collapse`

`x-collapse` 只能存在于已经有 `x-show` 指令的元素上。

当添加到一个 `x-show` 元素时，当通过 `x-collapse` 指令改变高度属性切换元素的可见性时，将平滑地“折叠”和“展开”元素。

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Alpine.js Collapse Plugin.</title>
  <script defer src="https://unpkg.com/@alpinejs/collapse@3.x.x/dist/cdn.min.js"></script>

  <script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
</head>
<body>
    <div x-data="{ expanded: false }">  // [!code focus]
        <button @click="expanded = ! expanded">Toggle Content</button>  // [!code focus]
     
        <p x-show="expanded" x-collapse>  // [!code focus]
            ...  // [!code focus]
        </p>  // [!code focus]
    </div>  // [!code focus]
</body>
</html>
```

## 修饰符

### `.duration` 

可以通过附加修饰符 `.duration` 来自定义折叠/展开过渡的持续时间：

```html {17}
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Alpine.js Collapse Plugin.</title>
  <script defer src="https://unpkg.com/@alpinejs/collapse@3.x.x/dist/cdn.min.js"></script>

  <script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
</head>
<body>
    <div x-data="{ expanded: false }">  // [!code focus]
        <button @click="expanded = ! expanded">Toggle Content</button> // [!code focus]
     
        <p x-show="expanded" x-collapse.duration.1000ms>  // [!code focus]
            ...  // [!code focus]
        </p>  // [!code focus]
    </div>  // [!code focus]
</body>
</html>
```

### `.min`

默认情况下，`x-collapse` 的“折叠”状态是将元素的高度设置为 `0px` 并设置 `display: none;` 属性

一些场景下，“切断”元素比完全隐藏它更有帮助。通过使用 `.min` 修饰符可以为“折叠”状态的元素设置最小高度。

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Alpine.js Collapse Plugin.</title>
  <script defer src="https://unpkg.com/@alpinejs/collapse@3.x.x/dist/cdn.min.js"></script>

  <script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
</head>
<body>
    <div x-data="{ expanded: false }">  // [!code focus]
        <button @click="expanded = ! expanded">Toggle Content</button>  // [!code focus]
     
        <p x-show="expanded" x-collapse.min.50px>  // [!code focus]
            ...  // [!code focus]
        </p>  // [!code focus]
    </div>  // [!code focus]
</body>
</html>
```