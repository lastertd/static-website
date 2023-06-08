---
title: Message 基组件
publish: false
autoGroup-4: message
autoSort: 99999
---

# message 基组件

::: tip
在这个分类下的所有组件都将是 `message`的衍生组件。

衍生组件具有的prop、methods、slot等若是与基组件相同将会在下文省略

:::
`message`类组件和`popper`类组件很相似，都是脱离了文档流的漂浮元素。不同的是，`message`没有固定于文档流当中的触发器，
它更倾向于通过js函数式触发。

像常见的如: 弹窗，消息，通知等组件都可以被归类为 `message`组件。

现在将 `message`组件抽象为两部分:

- mark: 全屏遮罩, 用于在整个视口形成一个遮罩层，禁止其他元素的点击
- box: 消息本体:
    - header: 消息头
    - content: 消息体
    - footer: 消息尾

## 基本用法

消息基组件提供 `show`、 `hide` 、 `toggle` 三个方法控制组件的展示

`show-mark`用于创建遮罩

`forbidden-scroll`用于禁止页面滚动

::: demo

~~~vue

<template>
    <sss-button
        type="main"
        @click="() => {
                this.$refs.test.show();
            }"
    >
        click me
    </sss-button>

    <sss-message-box
        ref="test"
        show-mark
        forbidden-scroll
    >

    </sss-message-box>
</template>

~~~

:::

## 关闭消息的方法

消息基组件默认可以通过footer中的按钮组、header中的close图标、ESC、点击mark关闭

`show-footer` 设置隐藏footer

`close-by-esc`设置可以通过按下esc关闭，默认开启

`close-by-click-mark` 设置可以通过点击mark关闭，默认开启

::: demo

~~~vue

<template>
    <sss-button
        type="main"
        @click="() => {
                this.$refs.test.show();
            }"
    >
        click me
    </sss-button>

    <sss-message-box
        ref="test"
        show-mark
        forbidden-scroll
        :close-by-esc="false"
        :close-by-click-mark="false"
        :show-footer="false"

    >

    </sss-message-box>
</template>

~~~

:::

:::

## 不同的关闭类型

header中的close图标、ESC、点击mark 这三个触发的关闭为close 将会触发 `close`事件

footer中的按钮中的 `取消按钮`触发的关闭为cancel 将会触发 `cancel`事件

footer中的按钮中的 `确认按钮`触发的关闭为confirm 将会触发 `confirm`事件

::: demo

~~~vue

<template>
    <sss-button
        type="main"
        @click="() => {
                this.$refs.test.show();
            }"
    >
        click me
    </sss-button>

    <sss-message-box
        ref="test"
        show-mark
        forbidden-scroll
        @close="handleClose()"
        @cancel="handleCancel()"
        @confirm="handleConfirm()"

    >

    </sss-message-box>
</template>
<script>
export default {
    methods: {
        handleClose() {
            this.$notify({
                title: '触发了close事件',
                type: 'success'
            })
        },
        handleCancel() {
            this.$notify({
                title: '触发了cancel事件',
                type: 'success'

            })
        },
        handleConfirm() {
            this.$notify({
                title: '触发了confirm事件',
                type: 'success'

            })
        },
    }
}

</script>

~~~

:::

## `close`事件执行前的回调

由于ESC、点击mark、点击close图标都会触发close事件, 有可以会因为误触而意外关闭，
因此设置了 `beforeClose`函数作为`close`事件执行前的回调函数

`beforeClose`函数接受一个`next`参数,调用`next()`才会继续执行`close`事件

::: demo

~~~vue

<template>
    <sss-button
        type="main"
        @click="() => {
                this.$refs.test.show();
            }"
    >
        click me
    </sss-button>

    <sss-message-box
        ref="test"
        show-mark
        forbidden-scroll
        :before-close="func"
    >
        <span slot="content">消息体</span>
    </sss-message-box>
</template>
<script>
export default {
    methods: {
        func(next) {
            this.$confirm({
                title: '确定不是误触么？',
                type: 'info'
            }).then(() => next()).catch(() => {
            })
        }
    }
}
</script>

~~~

:::

## attributes

| 参数名           | 描述                             | 类型     | 可选值                        | 默认值                            |
| ---------------- | -------------------------------- | -------- | ----------------------------- | --------------------------------- |
| showMark         | 是否形成遮罩                     | boolean  | ---                           | false                             |
| forbiddenScroll  | 是否禁用页面滚动                 | boolean  | ---                           | false                             |
| showHeader       | 是否展示header                   | boolean  | ---                           | true                              |
| title            | 消息标题                         | string   | ---                           | title                             |
| content          | 消息内容（会被slot=content）覆盖 | string   | ---                           | hi this is msgBox default content |
| showFooter       | 是否展示footer                   | boolean  | ---                           | true                              |
| canclBtnType     | `取消按钮`的类型                 | string   | sss-button的所有类型          | default                           |
| cancelBtnText    | `取消按钮`的文本                 | string   | ---                           | 取消                              |
| confirmBtnType   | `确认按钮`的类型                 | string   | sss-button的所有类型          | main                              |
| confirmBtnText   | `确认按钮`的文本                 | string   | ---                           | 确认                              |
| top              | 消息盒子距离视口的高度           | string   | ---                           | 30vh                              |
| width            | 消息盒子的宽度                   | string   | ---                           | 320px                             |
| beforeClose      | 在触发`close`事件前的回调函数    | function | ---                           | ---                               |
| closeByEsc       | 是否可以通过ESC关闭              | boolean  | ---                           | true                              |
| closeByClickMark | 是否可以通过点击mark关闭         | boolean  | ---                           | true                              |
| transition       | 消息盒子出现的过渡动画           | string   | ---                           | sss-transition-msg-fadeDown       |
| type             | 消息盒子类型                     | string   | success / info / warn / error | ---                               |

## slots

| 槽名    | 描述   |
| ------- | ------ |
| header  | 消息头 |
| content | 消息体 |
| footer  | 消息尾 |

## events

| 事件名  | 描述                           | 回调参数 |
| ------- | ------------------------------ | -------- |
| close   | 消息基组件关闭后的回调         | ---      |
| cancel  | 点击消息尾中`取消按钮`后的回调 | ---      |
| confirm | 点击消息尾中`确认按钮`后的回调 | ---      |

## methods

| 方法名 | 描述                            | 参数 |
| ------ | ------------------------------- | ---- |
| show   | 用于展示消息基组件              | ---  |
| hide   | 用于关闭消息基组件              | ---  |
| toggle | 自动控制消息基组件的展示 / 关闭 | ---  |