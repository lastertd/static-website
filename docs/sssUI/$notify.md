---
title: Notify 通知
publish: false
autoGroup-4: message
---

# notify 通知

::: tip
完全继承自message基组件，需要注意的是，可选参数减少了许多
:::

## 基础用法

`title`指定通知的标题

`content`指定通知的内容

`timeout`指定通知存活时间，默认时间是 4000 (ms)

::: demo

~~~vue

<template>

    <sss-button @click="handleClick()">触发notify</sss-button>

</template>
<script>
export default {
    methods: {
        handleClick() {
            this.$notify({
                title: '标题名称',
                content: '肯德基疯狂星期四，v me 50!🍔'
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

    <sss-button @click="handleClick('success','成功','这是一条成功的通知')">成功</sss-button>
    <sss-button @click="handleClick('info','提示','这是一条提示的通知')">提示</sss-button>
    <sss-button @click="handleClick('warn','警告','这是一条警告的通知')">警告</sss-button>
    <sss-button @click="handleClick('error','错误','这是一条错误的通知')">错误</sss-button>

</template>
<script>
export default {
    methods: {
        handleClick(type, title, content) {
            this.$notify({
                title,
                content,
                type,
            })
        }
    }
}
</script>

~~~

:::

## 自定义通知的位置

`position`可以定义通知的位置，默认是`top`

::: tip
位置只有右上角和右下角哦

:::

::: demo

~~~vue

<template>

    <sss-button @click="handleClick('top','右上角通知')">右上角</sss-button>
    <sss-button @click="handleClick('bottom','右下角通知')">右下角</sss-button>

</template>
<script>
export default {
    methods: {
        handleClick(pos, content) {
            this.$notify({
                title: '自定义位置',
                content,
                position: pos
            })
        }
    }
}
</script>

~~~

:::

## 带有偏移量

`offset`设置通知距离 顶部 / 底部 的偏移量，默认是10 (px)

::: demo

~~~vue

<template>

    <sss-button @click="handleClick(70,'右上角通知')">具有偏移量的通知</sss-button>

</template>
<script>
export default {
    methods: {
        handleClick(offset, content) {
            this.$notify({
                title: '设置偏移量',
                content,
                offset,
            })
        }
    }
}
</script>

~~~

:::

## options

| 参数名   | 描述                       | 类型   | 可选值                        | 默认值 |
| -------- | -------------------------- | ------ | ----------------------------- | ------ |
| title    | `通知`的标题               | string | ---                           | title  |
| content  | `通知`的内容               | string | ---                           | ---    |
| type     | `通知`的类型               | string | success / info / warn / error | ---    |
| position | `通知`的位置               | string | top / bottom                  | top    |
| offset   | `通知`的偏移量，单位是px   | number | ---                           | 10     |
| timeout  | `通知`的存活时间，单位是ms | number | ---                           | 4000   |

