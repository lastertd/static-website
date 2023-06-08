---
title: Popconfirm 气泡确认框
publish: false
autoGroup-3: popper
---

# popconfirm 气泡确认框
::: tip
气泡确认框组件完全继承自popper基组件

相同的各种用法不在赘述
:::

## 基本用法

`title`指定指定确认框文本内容

`type`指定确认框图标类型

::: demo

~~~vue

<template>
    <sss-popconfirm
        title="这是删除操作，确定要执行么？"
        type="info"
        @cancel="handleCancel"
        @confirm="handleConfirm"
    >
        <sss-button empty>删除</sss-button>
    </sss-popconfirm>

</template>
<script>
export default {
    methods: {
        handleCancel() {
            this.$notify({
                title: '删除失败',
                content: '用户取消了删除',
                type: 'error'
            })
        },
        handleConfirm() {
            this.$notify({
                title: '删除成功',
                content: '用户确认了删除',
                type: 'success',
            })

        }
    }
}
</script>
~~~

:::

## 自定义

`cancel-btn-text`设置`取消按键`的文本
`confirm-btn-text`设置`确认按键`的文本

::: demo

~~~vue

<template>
    <sss-popconfirm 
        title="憨八嘎 🍔" 
        type="success"
        cancel-btn-text="v 50"
        confirm-btn-text="50? v 500!"
    >
        <sss-button empty>crazy thursday v me 50</sss-button>
    </sss-popconfirm>

</template>

~~~

:::

## attributes

| 属性名         | 描述             | 类型   | 可选值                        | 默认值     |
| -------------- | ---------------- | ------ | ----------------------------- |---------|
| type           | 图标类型         | string | success / info / warn / error | info    |
| title          | 确认框的标题     | string | ---                           | ---     |
| cancelBtnType  | `取消`按钮的类型 | string | ---                           | default |
| cancelBtnText  | `取消`按钮的文本 | string | ---                           | 取消      |
| confirmBtnType | `确认`按钮类型   | string | ---                           | main    |
| confirmBtnText | `确认`按钮文本   | string | ---                           | 确认      |


## events

| 事件名  | 描述                     | 回调参数 |
| ------- | ------------------------ | -------- |
| cancel  | 点击`取消`按钮之后的回调 | ---      |
| confirm | 点击`确认`按钮之后的回调 | ---      |