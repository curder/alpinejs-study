# $data

**`$data`** 魔法属性可以访问当前的 Alpine 数据范围（通常由 `x-data` 提供数据）。

```html {3}
<div x-data="{ greeting: 'Hello' }">
  <div x-data="{ name: 'Curder' }">
    <button @click="sayHello($data)">Say Hello</button> // [!code focus]
  </div>
</div>
<script>
const sayHello = ({name, greeting}) => {
  console.log(`${greeting} ${name}!`);
};
</script>
```
当按下按钮时，浏览器将在控制台打印出 `Hello Curder!`，因为它传递了一个数据对象，该对象包含调用它的表达式的所有 Alpine 作用域。