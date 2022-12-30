# Alpine.bind

`Alpine.bind()` 提供了一种在应用程序中重用 [x-bind](../directives/x-bind.md#直接绑定-alpine-指令) 对象的方法。

::: code-group
```html [Before]
<button :disabled="shouldDisable"
        type="button"
        x-data="{
         shouldDisable: false,
         doSomething() {
            console.log('Before');
         }
        }"
        @click="doSomething()">Click Me
</button>
```

```html [After]
<button x-bind="SomeButton" x-data></button>

<script>
document.addEventListener('alpine:init', () => {
  Alpine.bind('SomeButton', () => ({
    'x-data'() {
      return {
        shouldDisable: false,
        doSomething() {
          console.log('After')
        }
      };
    },


    type: 'button',
    'x-text'() {
      return 'Click Me';
    },

    '@click'() {
      this.doSomething()
    },

    ':disabled'() {
      return this.shouldDisable
    },
  }))
})
</script>
```
:::