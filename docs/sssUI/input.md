---
title: Input 输入框
publish: false
autoGroup-1: base
---



# input 输入框

显示输入字符

::: tip
使用时需要通过v-model绑定data

input默认具有**200ms**

防抖支持v-model修饰符

:::



## 基础用法

`input`默认宽度是父元素100%

::: demo

~~~vue

<template>
    <sss-input 
            v-model="str" 
            placeholder="input something"
    >
        
    </sss-input>
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

## 禁用状态

设置 `disabled`实现禁用 `input`
::: demo

~~~vue

<template>
    <sss-input
        v-model="str"
        style="width: 40%"
        placeholder="input something"
        disabled
    >

    </sss-input>
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

## 可清空

设置 `clear-able`实现可清空
::: demo

~~~vue

<template>
    <sss-input
        v-model="str"
        style="width: 40%"
        placeholder="input something"
        clear-able
    >

    </sss-input>
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

## 密码框

设置 `tepe`为password、并设置 `show-password` 实现一个可切换显示和隐藏的密码框
::: demo

~~~vue

<template>
    <sss-input
        v-model="str"
        style="width: 40%"
        placeholder="input something"
        type="password"
        show-password
    >

    </sss-input>
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

## 显示图标

`prefix-icon`设置首部图标、 `suffix-icon`设置尾部图标
::: demo

~~~vue

<template>
    <sss-input
        v-model="str"
        style="width: 40%"
        placeholder="input something"
        prefix-icon="sss-email"
    >

    </sss-input>

    <div style="margin-bottom: 20px"></div>

    <sss-input
        v-model="str"
        style="width: 40%"
        placeholder="input something"
        suffix-icon="sss-email"
    >

    </sss-input>
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

## 字数限制

`maxlength`限制最长文本长度、 `minlength`限制最短文本长度、`show-word-limit`设置显示字数限制
::: demo

~~~vue

<template>
    <sss-input
        v-model="str"
        style="width: 40%"
        placeholder="input something"
        minlength="5"
        maxlength="30"
        show-word-limit
    >

    </sss-input>
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

## 复合型输入框

`prefix`槽添加在输入框首部
`suffix`槽添加在输入框尾部
::: demo

~~~vue

<template>
    <sss-input
        v-model="str1"
        style="width: 40%"

        placeholder="input something"
    >
        <sss-tag type="main" dark slot="prefix">https://</sss-tag>
    </sss-input>

    <div style="margin-bottom: 20px"></div>

    <sss-input
        v-model="str2"
        style="width: 40%"

        placeholder="input something"
    >
        <sss-tag slot="suffix">.com</sss-tag>
    </sss-input>

</template>
<script>
export default {
    data() {
        return {
            str1: '',
            str2: '',
            str3: '',

        }
    }
}
</script>
~~~

:::

## 文本校验

- `check-func`指定校验函数，该函数接收val形参，代表输入框文本
- 在 `blur`回调中通过调用输入框的 `check()`方法,判断是否通过`check-func`的校验
- 通过 `showLabel(text, icon)`显示校验失败的提示信息
- 通过 `hiddenLabel()`可以清除提示信息，输入框聚焦会自动清除提示信息

::: demo

~~~vue

<template>
    <sss-input
        ref="input"
        v-model.number="str"
        placeholder="input something"
        style="width: 40%"
        :check-func="(val) => {
                return val === 114514
            }"
        @blur="handleInputBlur()"
    >
    </sss-input>

</template>

<script>
export default {
    data() {
        return {
            str: undefined,
        }
    },
    methods: {
        handleInputBlur() {
            if (!this.$refs.input.check()) {
                this.$refs.input.showLabel();
            }
        }
    }
}
</script>
~~~

:::

## attributes

| 参数名        | 描述             | 类型            | 可选值          | 默认值 |
| ------------- | ---------------- | --------------- | --------------- | ------ |
| v-model       | 绑定value        | string / number | ---             | ---    |
| clear-able    | 展示清空图标     | boolean         | ---             | false  |
| showPassword  | 展示密码切换图标 | boolean         | ---             | false  |
| showWordLimit | 展示字数限制     | boolean         | ---             | false  |
| suffixIcon    | 尾部图标         | string          | ---             | ---    |
| prefixIcon    | 头部图标         | string          | ---             | ---    |
| readonly      | 只读             | boolean         | ---             | false  |
| checkFunc     | 校验函数         | function        | ---             | ---    |
| maxlength     | 文本最大长度     | string / number | ---             | ---    |
| minlength     | 文本最小长度     | string / number | ---             | ---    |
| placeholder   | 占位文本         | string          | ---             | ---    |
| disabled      | 禁用             | boolean         | ---             | false  |
| autofocus     | 自动获取焦点     | boolean         | ---             | false  |
| type          | 输入框类型       | string          | text / password | text   |
| id            | 输入框id         | string          | ---             | ---    |

## slots

| 槽名   | 描述                                                      |
| ------ | --------------------------------------------------------- |
| prefix | input头部内容，强制限制了高度和input框高相等、边界为none. |
| suffix | input尾部内容，强制限制了高度和input框高相等、边界为none. |

## events

| 事件名 | 描述                                                        | 回调参数                |
| ------ | ----------------------------------------------------------- | ----------------------- |
| input  | 输入内容时触发                                              | value: string \| number |
| blur   | input失去焦点时触发                                         | event:Event             |
| focus  | input获取焦点时触发                                         | event:Event             |
| change | 在input内容发生了变化 且 （input失去焦点或者按下enter之后） | event:Event             |
| click  | 在input被点击时触发                                         | event:Event             |
| clear  | 点击了清空图标后触发                                        | ---                     |

## methods

| 方法名      | 描述                                                 | 参数                                              |
| ----------- | ---------------------------------------------------- | ------------------------------------------------- |
| focus       | 使得input获取焦点                                    | ---                                               |
| blur        | 使得input失去焦点                                    | ---                                               |
| select      | 选择input的文本                                      | ---                                               |
| clear       | 情况输入框文本                                       | ---                                               |
| check       | 在传入了校验函数的情况下，判断输入框文本是否通过校验 | ---                                               |
| showLabel   | 展示提示信息                                         | text:String \| 提示文本， icon:String \| 提示图标 |
| hiddenLabel | 隐藏提示信息                                         | ---                                               |