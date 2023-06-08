---
title: Confirm 确认
publish: false
autoGroup-4: message
---

# confirm 确认

::: tip
完全继承自message基组件，需要注意的是，可选参数减少了许多
:::

和 `popconfirm`这个组件非常类似, 不同的是，由于`confirm`组件时函数式触发，没办法和`popconfirm`组件那样
通过v-bind来指定回调函数，而是返回一个promise实例来指定close、cancel、confrim的回调。

## 基础用法

`title`指定确认框的内容

`type`指定确认框的类型

::: warning
在调用$confirm时由于返回的是promise实例，请务必加上catch捕获promise抛出的异常

因为无论是按下ESC、点击mark，点击close图标触发的 `close`事件，又或者是按下`取消按钮`触发的`cancel`事件
，都会触发promise执行器中的reject函数
:::

::: demo

~~~vue

<template>

    <sss-button @click="handleClick()">触发消息</sss-button>

</template>
<script>
export default {
    methods: {
        handleClick() {
            this.$confirm({
                title: '这是一个一个一个消息框',
                type: 'info'
            }).catch(() => {
            })
        }
    }
}
</script>

~~~

:::

## 带有偏移量

`offset`设置通知距离**顶部**的偏移量，默认是20vh

::: demo

~~~vue

<template>

    <sss-button @click="handleClick('35vh')">具有偏移量的确认框</sss-button>

</template>
<script>
export default {
    methods: {
        handleClick(offset) {
            this.$confirm({
                title: '这是一个一个一个消息框',
                offset
            }).catch(() => {
            })
        }
    }
}
</script>

~~~

:::

## 不同的关闭类型

$confirm会返回一个promise实例

::: demo

~~~vue

<template>

    <sss-button @click="handleClick()">区分不同的关闭类型</sss-button>

</template>
<script>
export default {
    methods: {
        handleClick() {
            this.$confirm({
                title: '这是一个一个一个消息框',
            }).then(() => {
                this.$notify({
                    title: 'close!',
                    content: '点击了confirm按钮导致的关闭。',
                    type: 'success'
                })
            }).catch(e => {
                if (e === 'cancel') {
                    this.$notify({
                        title: 'close!',
                        content: '点击了cancel按钮导致的关闭。',
                        type: 'success'
                    })
                } else if (e === 'close') {
                    this.$notify({
                        title: 'close!',
                        content: 'ESC、click mark、close icon导致的关闭',
                        type: 'success'
                    })
                }
            })
        }
    }
}
</script>

~~~

:::

## options

| 参数名         | 描述             | 类型   | 可选值                        | 默认值       |
| -------------- | ---------------- | ------ | ----------------------------- | ------------ |
| title          | `确认框`的标题   | string | ---                           | default text |
| type           | `确认框`的类型   | string | success / info / warn / error | ---          |
| offset         | `确认框`的偏移量 | string | ---                           | 20vh         |
| cancelBtnType  | `取消按钮`的类型 | string | ---                           | default      |
| cancelBtnText  | `取消按钮`文本   | string | ---                           | 取消         |
| confirmBtnType | `确认按钮`类型   | string | ---                           | main         |
| confirmBtnText | `确认按钮`文本   | string | ---                           | 确认         |