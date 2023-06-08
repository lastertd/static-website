---
title: Message 消息
publish: false
autoGroup-4: message
---

# message 消息

::: tip
完全继承自message基组件，需要注意的是，可选参数减少了许多
:::

类型与浏览器自带alert类似，用于提示用户一些简单的信息

## 基础用法

`text`指定消息的内容

`timeout`指定通知存活时间，默认时间是 4000 (ms)

::: demo

~~~vue

<template>

    <sss-button @click="handleClick()">触发消息</sss-button>

</template>
<script>
export default {
    methods: {
        handleClick() {
            this.$message({
                text: '普普通通平平淡淡的消息',

            })
        }
    }
}
</script>

~~~

:::

## 带有倾向性

`type`可以指定通知的类型

::: demo

~~~vue

<template>

    <sss-button @click="handleClick('success','这是一条成功的消息')">成功</sss-button>
    <sss-button @click="handleClick('info','这是一条提示的消息')">提示</sss-button>
    <sss-button @click="handleClick('warn','这是一条警告的消息')">警告</sss-button>
    <sss-button @click="handleClick('error','这是一条错误的消息')">错误</sss-button>

</template>
<script>
export default {
    methods: {
        handleClick(type, text) {
            this.$message({
                text,
                type,
            })
        }
    }
}
</script>

~~~

:::

## 带有偏移量

`offset`设置通知距离**顶部**的偏移量，默认是10 (px)

::: demo

~~~vue

<template>

    <sss-button @click="handleClick(70)">偏移量的消息</sss-button>

</template>
<script>
export default {
    methods: {
        handleClick(offset) {
            this.$message({
                text: '设置了偏移量',
                offset,
            })
        }
    }
}
</script>

~~~

:::

## options

| 参数名  | 描述                       | 类型   | 可选值                        | 默认值 |
| ------- | -------------------------- | ------ | ----------------------------- | ------ |
| text    | `消息`的内容               | string | ---                           | title  |
| type    | `消息`的类型               | string | success / info / warn / error | ---    |
| offset  | `消息`的偏移量，单位是px   | number | ---                           | 10     |
| timeout | `消息`的存活时间，单位是ms | number | ---                           | 4000   |