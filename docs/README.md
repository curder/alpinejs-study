# Alpine.js 学习

[Alpine.js](https://alpinejs.dev/) 是一个轻量级的 JavaScript 框架，可以理解为 JavaScript 版本的 [Tailwind](https://tailwindcss.com/)。

`Alpine.js` 当前的版本是 `v3`，它包含 18 个指令、9 个属性和 3 个方法。分别是：

- 指令：
  - [`x-data`](./guide/x-data.md)
  - [`x-text`](./guide/x-text.md)
  - [`x-html`](./guide/x-html.md)
  - [`x-init`](./guide/x-init.md)
  - [`x-show`](./guide/x-show.md)
  - `x-bind`
  - `x-on`
  - `x-model`
  - `x-modelable`
  - `x-for`
  - `x-transition`
  - `x-effect`
  - `x-ignore`
  - `x-ref`
  - `x-cloak`
  - `x-teleport`
  - `x-if`
  - `x-id`

- 属性
  - `$el`
  - `$refs`
  - `$store`
  - `$watch`
  - `$dispatch`
  - `$nextTick`
  - `$root`
  - `$data`
  - `$id`

- 方法
  - `Alpine.data()` 重用数据对象并使用 `x-data` 引用它
  - `Alpine.store()` 使用 `$store` 声明可以从任何地方访问的全局、反应性数据
  - `Alpine.bind()`

## 章节目录

- [安装](./guide/install.md)
- [x-data](./guide/x-data.md)
- [x-text](./guide/x-text.md)
- [x-html](./guide/x-html.md)
- [x-init](./guide/x-init.md)
- [x-show](./guide/x-show.md)