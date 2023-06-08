---
title: Tag 标签
publish: false
autoGroup-1: base
---

# tag 标签

## 基础用法

`type`设置标签类型

`dark`设置标签为暗色

::: demo

~~~vue

<template>
    <sss-row>
        <sss-tag>默认标签</sss-tag>
        <sss-tag type="main">主要标签</sss-tag>
        <sss-tag type="info">信息标签</sss-tag>
        <sss-tag type="warn">警告标签</sss-tag>
        <sss-tag type="error">错误标签</sss-tag>
    </sss-row>
    <sss-row>
        <sss-tag dark>默认标签</sss-tag>
        <sss-tag type="main" dark>主要标签</sss-tag>
        <sss-tag type="info" dark>信息标签</sss-tag>
        <sss-tag type="warn" dark>警告标签</sss-tag>
        <sss-tag type="error" dark>错误标签</sss-tag>
    </sss-row>
</template>
<script>
export default {
    data() {
        return {
            str: ''
        }
    }
}
</script>
~~~

:::

## 可删除

`delete-able`设置显示close图标, 点击该图标会触发一个delete事件

::: demo

~~~vue

<template>
    <sss-row>
        <sss-tag v-for="(item, index) in dataList"
                 :key="item"
                 delete-able
                 @delete="delItem(index)"
        >
            {{item}}
        </sss-tag>
    </sss-row>
    <sss-row>
        <sss-tag type="main" dark @click="pushItem()"> +</sss-tag>
    </sss-row>

</template>
<script>
export default {
    data() {
        return {
            dataList: [
                'hello',
                'world',
                'nihao',
                'shijie',
            ],
            count: 0
        }
    },
    methods: {
        delItem(index) {
            this.dataList.splice(index, 1)
            console.log(index)
            console.log(this.dataList)
        },
        pushItem() {
            this.dataList.push(`${++this.count}号`)
        }
    }
}
</script>
~~~

:::

## attributes

| 参数名     | 描述              | 类型    | 可选值                               | 默认值  |
| ---------- | ----------------- | ------- | ------------------------------------ | ------- |
| type       | 标签类型          | string  | default / main / info / warn / error | default |
| deleteAble | 是否展示close图标 | boolean | ---                                  | false   |
| dark       | 是否暗色          | boolean | ---                                  | false   |

## events

| 事件名 | 描述                    | 回调参数  |
| ------ | ----------------------- | --------- |
| delete | 点击close图标触发的事件 | evt:Event |



