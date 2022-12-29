# Alpine.js 学习

[Alpine.js](https://alpinejs.dev/) 是一个轻量级的 JavaScript 框架，可以理解为 JavaScript 版本的 [Tailwind](https://tailwindcss.com/)。

`Alpine.js` 当前的版本是 `v3`，它包含 18 个指令、9 个属性和 3 个方法。分别是：

- [指令](./guide/directives/index.md)
  - [`x-data`](./guide/directives/x-data.md)
  - [`x-text`](./guide/directives/x-text.md)
  - [`x-html`](./guide/directives/x-html.md)
  - [`x-init`](./guide/directives/x-init.md)
  - [`x-show`](./guide/directives/x-show.md)
  - [`x-cloak`](./guide/directives/x-cloak.md)
  - [`x-transition`](./guide/directives/x-transition.md)
  - [`x-if`](./guide/directives/x-if.md)
  - [`x-for`](./guide/directives/x-for.md)
  - [`x-bind`](./guide/directives/x-bind.md)
  - [`x-on`](./guide/directives/x-on.md)
  - [`x-model`](./guide/directives/x-model.md)
  - [`x-effect`](./guide/directives/x-effect.md)
  - [`x-ignore`](./guide/directives/x-ignore.md)
  - [`x-ref`](./guide/directives/x-ref.md)
  - [`x-teleport`](./guide/directives/x-teleport.md)
  - [`x-modelable`](./guide/directives/x-modelable.md)
  - [`x-id`](./guide/directives/x-id.md)

- [魔法属性](./guide/magics/index.md)
  - [`$el`](./guide/magics/el.md)
  - [`$refs`](./guide/magics/refs.md)
  - [`$store`](./guide/magics/store.md)
  - [`$watch`](./guide/magics/watch.md)
  - [`$dispatch`](./guide/magics/dispatch.md)
  - [`$nextTick`](./guide/magics/nextTick.md)
  - `$root`
  - `$data`
  - `$id`

- 方法
  - `Alpine.data()` 重用数据对象并使用 `x-data` 引用它
  - `Alpine.store()` 使用 `$store` 声明可以从任何地方访问的全局、反应性数据
  - `Alpine.bind()`