---
title: Popper 基组件
publish: false
autoGroup-3: popper
autoSort: 99999
---

# popper 基组件

::: tip
在这个分类下的所有组件都将是 `popper`的衍生组件。

衍生组件具有的prop、methods、slot等若是与基组件相同将会在下文省略

:::


基组件大致可以被分为两个部分 `reference` 和`popper`

- reference: 存在于文档流(一般情况)中的任何元素，作为“触发器”使得popper元素显现。

- popper: 它将定位从文档流中“弹出”并漂浮在目标元素附近的任何 UI 元素。 最常见的示例是工具提示，但它也包括弹出窗口、下拉菜单等。 所有这些都可以概括地描述为“popper”元素。

## 基本用法
::: warning
文本节点无法成为 `reference`元素
如何是文本节点请至少加上一层span或者其他

:::

通过 `trigger`设置触发方式

通过 `transition` 设置popper元素的出现动画

::: demo

~~~vue

<template>
    <sss-row justify="space-evenly">
        <sss-popper trigger="hover">
            <div slot="popper"> 我是popper元素</div>
            <span slot="reference">hover触发</span>
        </sss-popper>

        <sss-popper trigger="clickToOpen" transition="vertical-scroll">
            <div slot="popper"> 我是popper元素</div>
            <span slot="reference">click 触发</span>
        </sss-popper>

        <sss-popper trigger="clickToToggle" transition="vertical-scroll">
            <div slot="popper"> 我是popper元素</div>
            <span slot="reference">click 触发&关闭</span>
        </sss-popper>

        <sss-popper trigger="focus">
            <div slot="popper"> 我是popper元素</div>
            <div slot="reference">focus 触发</div>
        </sss-popper>

        <sss-popper trigger="manual">
            <div slot="popper"> 我是popper元素</div>
            <div slot="reference">手动 触发</div>
        </sss-popper>
    </sss-row>
</template>
<script>
export default {
    data() {
        return {
            str: undefined,
        }
    },
}
</script>
~~~

:::

## 函数式触发

popper组件将会提供两个函数 `show` 、 `hide`, 用来展示和关闭popper元素

::: demo

~~~vue

<template>
    <sss-popper trigger="clickToToggle" ref="test" placement="right">
        <div slot="popper">
            popper element
            <sss-button
                type="main"
                round
                @click="() => {
                    this.$refs.test.hide();
                }"
            >
                点击关闭
            </sss-button>
        </div>
        <sss-button type="main" round slot="reference">click me</sss-button>
    </sss-popper>
</template>
<script>

export default {

    mounted() {
        this.$refs.test.show();
    }


}
</script>

~~~

:::

## GPU加速

设置`gpu-acceleration`来决定popper元素的定位方式
::: warning
需要注意的是，开启GPU加速之后只能运用 `fade`这一个动画效果

:::

::: demo

~~~vue

<template>
    <sss-row justify="space-evenly">
        <sss-popper trigger="clickToToggle" transition="vertical-scroll">
            <div slot="popper">
                popper element
            </div>
            <span slot="reference">动画有效</span>
        </sss-popper>

        <sss-popper trigger="clickToToggle" transition="vertical-scroll" gpu-acceleration>
            <div slot="popper">
                popper element
            </div>
            <span slot="reference">动画无效</span>
        </sss-popper>

    </sss-row>
</template>

~~~

:::

## 添加到 body

设置`append-to-body`将popper元素添加到body标签中，相当于和默认的div.app同级别

::: tip
`append-to-body`默认是开启的, 这样做是为了更好的管理定位元素的层级关系。
:::


::: demo

~~~vue

<template>
    <sss-row justify="space-evenly">
        <sss-popper trigger="clickToToggle" >
            <div slot="popper">
                popper element
            </div>
            <span slot="reference">添加到body</span>
        </sss-popper>

        <sss-popper trigger="clickToToggle" :append-to-body="false">
            <div slot="popper">
                popper element
            </div>
            <span slot="reference">不添加</span>
        </sss-popper>

    </sss-row>
</template>

~~~

:::



## attributes

| 参数名          | 描述                                              | 类型    | 可选值                                                       | 默认值 |
| --------------- | ------------------------------------------------- | ------- | ------------------------------------------------------------ | ------ |
| placement       | popper元素的定位方向                              | string  | top / right / bottom / left  <br />(可追加-start / -end) eg: top-end | bottom |
| offset          | popper元素与reference元素的偏移量(px)             | number  | ---                                                          | 13     |
| trigger         | 触发popper元素出现的方式                          | string  | hover / clickToOpen / clickToToggle <br />focus / manual     | hover  |
| delayOnMouseOut | 当触发方式为hover时，popper元素出现之前的延时(ms) | number  | ---                                                          | 300    |
| delayOnMouseIn  | 当触发方式为hover时，popper元素消失之前的延时(ms) | number  | ---                                                          | 300    |
| showArrow       | popper元素是否带有小箭头                          | boolean | ---                                                          | true   |
| transition      | popper元素出现时所带有的过渡动画                  | string  | fade / scale<br />vertical-scroll / horizontal-scroll        | fade   |
| disabled        | 禁用popper元素的出现                              | boolean | ---                                                          | false  |
| dark            | popper元素背景颜色是否是暗色                      | boolean | ---                                                          | false  |
| maxwidth        | popper元素的最大宽度                              | string  | ---                                                          | 2000px |
| minwidth        | popper元素的最大小宽度                            | string  | ---                                                          | 0      |
| appendToBody    | popper元素是否追加到body中                        | boolean | ---                                                          | true   |
| gpuAcceleration | 启用GPU加速                                       | boolean | ---                                                          | false  |

## slots

| 槽名      | 描述          |
| --------- | ------------- |
| popper    | popper元素    |
| reference | reference元素 |

## event

| 事件名 | 描述                   | 参数 |
| ------ | ---------------------- | ---- |
| show   | popper元素出现后的回调 | ---  |
| hide   | popper元素消失后的回调 | ---  |

## methods

| 方法名 | 描述                            | 参数 |
| ------ | ------------------------------- | ---- |
| show   | 使popper元素出现                | ---  |
| hide   | 使popper元素消失                | ---  |
| toggle | 自动控制popper元素的出现 / 消失 | ---  |

