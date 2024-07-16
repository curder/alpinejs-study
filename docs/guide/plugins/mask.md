# Mask

Alpine.js 的 Mask 插件允许用户在输入内容时自动格式化为指定格式。 比如：电话号码、信用卡卡号、美元金额、帐号、日期等。

## 安装

跟 Alpine.js 的安装一样， Mask插件同样支持从 `<script>` 脚本标签引用它或者将其作为模块导入。

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

例如，锁定版本为 3.14.1 (最新版本):

```html
<!-- Alpine Plugins -->
<script defer src="https://unpkg.com/@alpinejs/mask@3.14.1/dist/cdn.min.js"></script>
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

## `x-mask` 指令

此插件对外暴露了 `x-mask` 指令，通过它从来限定日期输入字段：

```html {4}
<input placeholder="YYYY/MM/DD"
       type="text"
       x-data=""
       x-mask="9999/99/99"> // [!code focus]
```
在输入字段中键入的文本如何必须遵守 `x-mask` 提供的格式。

上面的示例中除了强制使用数字字符外，如果用户没有先输入斜杠 `/`，Mask 插件也会自动添加斜杠。

掩码中支持以下通配符：

| 通配符 | 描述            |
|-----|---------------|
| `*` | 任意字符          |
| `a` | 仅字母字符(a-zA-Z) |
| `9` | 仅数字字符(0-9)    |

## 动态方法

当简单的掩码文字（比如 **`(999) 999-9999`** ）不能满足实际需求。

在这些情况下，`x-mask` 使用 `:dynamic` 允许根据用户输入时动态生成规则。

例如当用户输入的数字是以数字 **34** 或 **37** 开头来更改其动态规则。

```html
<input type="text"
       x-data=""
       x-mask:dynamic="$input.startsWith('34') || $input.startsWith('37')
          ? '9999 999999 99999' : '9999 9999 9999 9999'">
```

用户每次输入时，该值都会传递给表达式 `$input` ，该输入框通过表达式逻辑使用了不同的格式化规则。

`x-mask:dynamic` 也接受函数结果作为表达式作，并自动将其 `$input` 值作为第一个参数传递给函数。同样实现上面的业务逻辑，比如：

```html
<input x-mask:dynamic="creditCardMask">

<script>
function creditCardMask(input) {
    return input.startsWith('34') || input.startsWith('37')
        ? '9999 999999 99999'
        : '9999 9999 9999 9999'
}
</script>
```

## 金额格式

Mask 插件提供了一个预构建的表达式 `$money()` 用于编写相当复杂的金额规则。

```html
<input x-data="" x-mask:dynamic="$money($input)" placeholder="0.00" />
```

如果希望将分隔符句点换成逗号分隔符，可以使用第二个可选参数：

```html
<input x-data="" x-mask:dynamic="$money($input, ',')" placeholder="0,00" />
```