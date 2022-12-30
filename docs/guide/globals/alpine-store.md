# Alpine.store

Alpine 通过 `Alpine.store()` API 提供全局状态管理。

## 注册状态

在 `alpine:init` 事件监听器中定义一个 `Alpine.store()`，或者可以在手动调用 `Alpine.start()` 之前定义它：

### 使用脚本标签

如果[使用脚本标签](../install.md#使用脚本标签)的形式使用 Alpine.JS。则可以这样使用 `Alpine.store()`

```javascript
document.addEventListener('alpine:init', () => {
  Alpine.store('darkMode', {
    on: false,

    toggle() {
      this.on = ! this.on
    }
  })
})
```

### 作为模块

如果是[作为模块](../install.md#作为模块)的形式使用 Alpine.JS。则可以这样使用 `Alpine.store()`

```typescript
import Alpine from 'alpinejs'
 
Alpine.store('darkMode', {
    on: false,
 
    toggle() {
        this.on = ! this.on
    }
})
 
Alpine.start()
```

## 访问状态

使用魔法属性 [$store](../magics/store.md) 从 Alpine.js 表达式中访问任意的状态数据：

```html
<div x-data :class="$store.darkMode.on && 'bg-black'">
  <button type="button" @click="$store.darkMode.toggle()">Toggle Dark Mode</button>
</div>
```

此外，如果是在 `JavaScript`/`TypeScript` 可以通过省略 `Alpine.store()` 的第二个参数来访问外部存储，如下所示：

```javascript
Alpine.store('darkMode').toggle()
```

## 初始化状态

如果在 Alpine.js 状态中提供 `init()` 方法，它将在商店注册后立即执行。这对于使用合理的起始值初始化的任何状态很有用。

::: code-group

```javascript
 document.addEventListener('alpine:init', () => {
    Alpine.store('darkMode', {
        init() {
            this.on = window.matchMedia('(prefers-color-scheme: dark)').matches
        },

        on: false,

        toggle() {
            this.on = ! this.on
        }
    })
})
```

```typescript
export default (() => {
    Alpine.store('darkMode', {
        init() {
            this.on = window.matchMedia('(prefers-color-scheme: dark)').matches
        },

        on: false,

        toggle() {
            this.on = ! this.on
        }
    })
})
```
:::

示例中通过在 `Alpine.store()` 内添加 `init()` 方法，并在 `init()` 方法逻辑中添加对 `on` 状态的修改逻辑并在页面内容呈现之前应用上。

## 单值状态

如果不需要整个对象作为状态存储，仅仅需要一个简单的值作为状态存储，也可以设置和使用任何简单类型的数据作为状态存储。

比如下面使用简单的布尔值作为状态存储：

```html
<button x-data @click="$store.darkMode = ! $store.darkMode">Toggle Dark Mode</button>
<div x-data :class="$store.darkMode && 'bg-black'"></div>

<script>
    document.addEventListener('alpine:init', () => {
        Alpine.store('darkMode', false)
    })
</script>
```

[点击这里阅读更多有关 `$store` 的信息](../magics/store.md)