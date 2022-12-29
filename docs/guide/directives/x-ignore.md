# x-ignore

默认情况下，Alpine 将获取并初始化包含 [`x-init`](/x-init.md) 或 [`x-data`](/x-data.md) 元素的整个 DOM 树。

如果出于某种原因，不希望 Alpine 接触 HTML 的特定部分，可以使用 `x-ignore` 指令。

```html
<div x-data="{ label: 'From Alpine' }">
    <div x-ignore>
        <span x-text="label">Normal Text</span>
    </div>
</div>
```

上面的代码运行完之后会在 HTML 渲染完毕后显示 `Normal Text`。