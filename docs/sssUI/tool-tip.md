---
title: ToolTip 提示框
publish: false
autoGroup-3: popper
---

# tool tip 提示框
::: tip
提示框组件完全继承自popper基组件

相同的各种用法不在赘述
:::

## 基本用法

提供12种不同的方向，通过 `placement`指定

通过 `title`指定popper元素的文本内容

::: demo

~~~vue

<template>
    <div class="_box">
        <div class="_top">
            <sss-tool-tip placement="top-start" title="tool tip 上左" dark>
                <span type="main">上左</span>
            </sss-tool-tip>
            <sss-tool-tip placement="top" title="tool tip 上边" dark>
                <span type="main">上边</span>
            </sss-tool-tip>
            <sss-tool-tip placement="top-end" title="tool tip 上右" dark>
                <span type="main">上右</span>
            </sss-tool-tip>

        </div>

        <div class="_left">
            <sss-tool-tip placement="left-start" title="tool tip 左上" dark>
                <span type="main">左上</span>
            </sss-tool-tip>
            <sss-tool-tip placement="left" title="tool tip 左边" dark>
                <span type="main">左边</span>
            </sss-tool-tip>
            <sss-tool-tip placement="left-end" title="tool tip 左下" dark>
                <span type="main">左下</span>
            </sss-tool-tip>

        </div>

        <div class="_right">
            <sss-tool-tip placement="right-start" title="tool tip 右上" dark>
                <span type="main">右上</span>
            </sss-tool-tip>
            <sss-tool-tip placement="right" title="tool tip 右边" dark>
                <span type="main">右边</span>
            </sss-tool-tip>
            <sss-tool-tip placement="right-end" title="tool tip 右下" dark>
                <span type="main">右下</span>
            </sss-tool-tip>

        </div>


        <div class="_bottom">
            <sss-tool-tip placement="bottom-start" title="tool tip 下左" dark>
                <span type="main">下左</span>
            </sss-tool-tip>
            <sss-tool-tip placement="bottom" title="tool tip 下边" dark>
                <span type="main">下边</span>
            </sss-tool-tip>
            <sss-tool-tip placement="bottom-end" title="tool tip 下右" dark>
                <span type="main">下右</span>
            </sss-tool-tip>

        </div>
    </div>

</template>
~~~

:::

## 基调

通过`dark`指定暗色模式

::: demo

~~~vue

<template>
    <sss-row justify="space-evenly"> 
        <sss-tool-tip title="暗色 too tip" dark>
           <span>dark</span>
        </sss-tool-tip>

        <div style="width: 25px"></div>

        <sss-tool-tip title="亮色 too tip">
            <span>light</span>
        </sss-tool-tip>
    </sss-row>

</template>
~~~

:::

## attributes
| 参数名 | 描述               | 类型   | 可选值 | 默认值 |
| ------ | ------------------ | ------ | ------ | ------ |
| title  | popper元素文本内容 | string | ---    | ---    |