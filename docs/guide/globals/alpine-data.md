# Alpine.data

`Alpine.data()` 提供了一种在代码中重用 [x-data](../directives/x-data.md) 上下文的方法。

```html
<div x-data="dropdown">
    <button type="button" x-on:click="toggle">Toggle</button>
    <div x-show="isOpen">Content</div>
</div>

<script>
    document.addEventListener('alpine:init', function () {
        Alpine.data('dropdown', function () {
            return {
                open: false,
                get isOpen() {
                    return this.open
                },
                toggle() {
                    this.open = ! this.open
                }
            }
        })
    });
</script>
```

通常将直接在内部 [x-data](../directives/x-data.md) 定义的属性和方法使用 `Alpine.data()` 提取到一个单独的 Alpine 组件对象中。

## 作为模块安装

如果使用的是[模块化安装的 Alpine.js](../install.md#作为模块)，上面的代码逻辑可以按下面的方式注册组件：

::: code-group
```typescript [app.ts]
import Alpine from 'alpinejs'
import dropdown from './dropdown.ts'
 
Alpine.data('dropdown', dropdown)
 
Alpine.start()
```

```typescript [dropdown.ts]
export default () => ({
    open: false,
    get isOpen() {
        return this.open
    },
    
    toggle() {
        this.open = ! this.open
    }
})
```
:::

## 初始化参数

`Alpine.data()` 除了通过名称明确引用数据提供者（如 `x-data="dropdown"` 中的 `dropdown`）之外，还可以将它们作为函数 ( `x-data="dropdown()"`) 引用。

通过直接将它们作为函数调用，同时也可以传入额外的参数以在创建初始数据对象时使用。如下所示：

::: code-group
```html [传递自定义参数]
<div x-data="dropdown(true)"></div>
```

```javascript [接收自定义参数 .js]
// 同时设置默认值
Alpine.data('dropdown', (initialOpenState = false) => ({
    open: initialOpenState
}))
```

```typescript [接收自定义参数 .ts]
// 同时设置默认值
export default (initialOpenState = false) => ({
    open: initialOpenState
})
```
:::

现在可以重新使用该 `dropdown` 对象，但可以根据实际业务需要为其提供不同的参数，已完成更加复杂的业务逻辑。

## 初始化函数

如果组件中包含一个 `init()` 方法，Alpine 会在渲染组件之前自动执行它，就像 [x-init](../directives/x-init.md#自动执行-init-方法) 一样。例如：

::: code-group

```javascript [JavaScript]
Alpine.data('dropdown', () => ({
    init() {
      // 这段代码将在 Alpine 初始化组件的其他逻辑前执行
    }
}))
```

```ts [TypeScript]
export default () => ({
    init() {
        // 这段代码将在 Alpine 初始化组件的其他逻辑前执行 
    }
})
```
:::

## 使用魔法属性

如果需要从组件对象访问魔法方法或属性，可以使用 `this` 上下文来实现：
::: code-group
```javascript [JavaScript]
Alpine.data('dropdown', () => ({
    open: false,
 
    init() {
        this.$watch('open', () => { })
    }
}))
```

```ts [TypeScript]
export default () => ({
    open: false,

    init() {
        this.$watch('open', () => { })
    }
})
```

:::

## 封装 `x-bind` 指令

如果希望重用的不仅仅是组件的数据对象，可以使用 [x-bind](../directives/x-bind.md) 指令封装整个 Alpine 模板。

以下是使用 [x-bind](../directives/x-bind.md) 提取之前的下拉组件的模板详细信息的示例：

::: code-group
```html [HTML] {2-3}
<div x-data="dropdown">
    <button x-bind="trigger"></button> // [!code focus]
    <div x-bind="dialogue"></div> // [!code focus]
</div>
```

```javascript [JavaScript]
Alpine.data('dropdown', () => ({
    open: false,
 
    trigger: {
        ['@click']() {
            this.open = ! this.open
        },
    },
 
    dialogue: {
        ['x-show']() {
            return this.open
        },
    },
}))
```

```ts [TypeScript]
export default () => ({
    open: false,
 
    trigger: {
        ['@click']() {
            this.open = ! this.open
        },
    },
 
    dialogue: {
        ['x-show']() {
            return this.open
        },
    },
})
```
:::