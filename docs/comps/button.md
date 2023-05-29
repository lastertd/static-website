---
title: Button 按钮
publish: false
---


# button 按钮

## 基本用法


通过 `type`指定类型、 `round`指定圆角、 `circle`指定圆形

::: demo

~~~vue

<template>
    <sss-row>
        <sss-button>默认按钮</sss-button>
        <sss-button type="main">主要按钮</sss-button>
        <sss-button type="info">信息按钮</sss-button>
        <sss-button type="warn">警告按钮</sss-button>
        <sss-button type="error">错误按钮</sss-button>
    </sss-row>
    <sss-row>
        <sss-button type="main" round>主要按钮</sss-button>
        <sss-button type="info" round>信息按钮</sss-button>
        <sss-button type="warn" round>警告按钮</sss-button>
        <sss-button type="error" round>错误按钮</sss-button>
    </sss-row>
    <sss-row>
        <sss-button type="main" empty>主要按钮</sss-button>
        <sss-button type="info" empty>信息按钮</sss-button>
        <sss-button type="warn" empty>警告按钮</sss-button>
        <sss-button type="error" empty>错误按钮</sss-button>
    </sss-row>
    <sss-row>
        <sss-button cricle left-icon="sss-editor"></sss-button>
        <sss-button type="main" cricle left-icon="sss-home"></sss-button>
        <sss-button type="info" cricle left-icon="sss-medal"></sss-button>
        <sss-button type="warn" cricle left-icon="sss-option"></sss-button>
        <sss-button type="error" cricle left-icon="sss-title"></sss-button>
    </sss-row>
</template>
~~~

:::

## 禁用状态

`disabled` 禁用按钮、`loading`在禁用的基础上增加个`sss-loading`图标

::: demo 在 `loading`状态下，按钮的原本图标会被隐藏

~~~html

<template>
    <sss-row>
        <sss-button disabled>默认按钮</sss-button>
        <sss-button type="main" disabled>主要按钮</sss-button>
        <sss-button type="info" disabled>信息按钮</sss-button>
        <sss-button type="warn" disabled>警告按钮</sss-button>
        <sss-button type="error" disabled>错误按钮</sss-button>
    </sss-row>
    <sss-row>
        <sss-button disabled empty>默认按钮</sss-button>
        <sss-button type="main" disabled empty>主要按钮</sss-button>
        <sss-button type="info" disabled empty>信息按钮</sss-button>
        <sss-button type="warn" disabled empty>警告按钮</sss-button>
        <sss-button type="error" disabled empty>错误按钮</sss-button>
    </sss-row>
    <sss-row>
        <sss-button type="main" loading>主要按钮</sss-button>
        <sss-button type="info" loading>信息按钮</sss-button>
        <sss-button type="warn" loading>警告按钮</sss-button>
        <sss-button type="error" loading>错误按钮</sss-button>
    </sss-row>

</template>
~~~

:::

## 图标按钮

`left-icon`指定左图标, `right-icon`指定右图标

::: demo

~~~html

<template>
    <sss-row>
        <sss-button type="main" left-icon="sss-home"></sss-button>
        <sss-button type="main" left-icon="sss-home">主要按钮</sss-button>
        <sss-button type="main" right-icon="sss-gerenzhongxin-zhihui">信息按钮</sss-button>
        <sss-button type="main" left-icon="sss-home" right-icon="sss-gerenzhongxin-zhihui">警告按钮</sss-button>
    </sss-row>
</template>
~~~

:::

## 不同尺寸

`size`通过控制font-size来控制按钮尺寸

::: demo 当然，可以通过给button添加style或者class来控制尺寸

~~~html

<template>
    <sss-row>
        <sss-button size="l" type="main">大型按钮</sss-button>
        <sss-button size="m" type="main">中型按钮</sss-button>
        <sss-button size="s" type="main">小型按钮</sss-button>
        <sss-button type="main">默认大小</sss-button>
    </sss-row>
</template>
~~~

:::

## attributes

| 参数名      | 描述     | 类型    | 可选值                              | 默认值 |
| ----------- | -------- | ------- | ----------------------------------- | ------ |
| type        | 类型     | string  | normal / main / info / warn / error | normal |
| size        | 尺寸     | string  | s / m / l                           | m      |
| round       | 圆角     | boolean | ---                                 | false  |
| circle      | 圆       | boolean | ---                                 | false  |
| disabled    | 禁用     | boolean | ---                                 | false  |
| loading     | 加载中   | boolean | ---                                 | false  |
| empty       | 镂空     | boolean | ---                                 | false  |
| left-icon   | 左图标   | string  | any                                 | ---    |
| right-icon  | 右图标   | 图标    | any                                 | ---    |
| native-type | 原生type | string  | button / submit / reset             | button |

## events

| 事件名 | 描述                 | 回调参数    |
| ------ | -------------------- | ----------- |
| click  | 点击button后触发     | enent:Event |
| focus  | button聚焦后触发     | enent:Event |
| blur   | button失去焦点后触发 | enent:Event |

## methods

| 方法名 | 描述               | 参数 |
| ------ | ------------------ | ---- |
| click  | 点击button         | ---  |
| focus  | 使得button聚焦     | ---  |
| blur   | 使得button失去焦点 | ---  |