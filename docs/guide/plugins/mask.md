# Mask

Alpine.js 的 Mask 插件允许用户在输入内容时自动格式化为指定格式。 比如：电话号码、信用卡卡号、美元金额、帐号、日期等。

## 安装

跟 Alpine.js 的安装一样， Mask插件同样支持从 `<scropt>` 脚本标签引用它或者将其作为模块导入。

### 通过 CDN 脚本

在 HTML 页面的头部包含以下 `<script>` 标签

```html
<html lang="en">
<head>
  <title>Alpine.js</title>
  <!--...-->
  <!-- Alpine Mask Plugins -->
  <script defer src="https://unpkg.com/@alpinejs/mask@3.x.x/dist/cdn.min.js"></script> // [!code focus]
  
  <script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script> // [!code focus]
</head>
<!--...-->
</html>
```

生产环境中，建议在链接中锁定特定版本号，以避免新版本中的变更造成问题。

例如，锁定版本为 3.10.5 (最新版本):

```html
<!-- Alpine Plugins -->
<script defer src="https://unpkg.com/@alpinejs/mask@3.10.5/dist/cdn.min.js"></script>
```

### 作为 NPM 模块

可以通过 `npm` / `yarn` 安装 Mask 并将其导入到一个包中。 运行以下命令来安装它：

::: code-group

```bash [yarn]
yarn add @alpinejs/mask
```

```bash [npm]
npm install @alpinejs/mask
```

:::

现在将 Mask 导入到包中并像这样初始化它：

```javascript
import Alpine from 'alpinejs'
import mask from '@alpinejs/mask' // [!code focus]
 
Alpine.plugin(mask) // [!code focus]
Alpine.start()
```
