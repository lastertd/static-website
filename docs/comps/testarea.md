---
title: Textarea 文本框
publish: false
---

# textarea 文本框

::: tip
与输入框类似
:::


## 基础用法

`textarea`默认宽度是父元素100%

`rows`指定文本框显示行数,`height`样式也可以指定，但是不建议

::: demo

~~~vue

<template>
    <sss-textarea 
            v-model="str" 
            placeholder="input something"
            rows="5"
    >
        
    </sss-textarea>
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



## 禁用文本框

设置 ''

::: demo

~~~vue

<template>
    <sss-textarea 
            v-model="str" 
            placeholder="input something"
            rows="5"
            disabled
    >
        
    </sss-textarea>
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





## 限制文本长度
`minlength`设置最少文本长度

`maxlength`设置最多文本长度


::: demo

~~~vue

<template>
    <sss-textarea 
            v-model="str" 
            placeholder="input something"
            rows="5"
            minlength="20"
            maxlength="256"
            show-word-limit
    >
        
    </sss-textarea>
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




## attributes

| 参数名        | 描述             | 类型            | 可选值          | 默认值 |
| ------------- | ---------------- | --------------- | --------------- | ------ |
| v-model       | 绑定value        | string / number | ---             | ---    |
| showWordLimit | 展示字数限制     | boolean         | ---             | false  |
| readonly      | 只读             | boolean         | ---             | false  |
| maxlength     | 文本最大长度     | string / number | ---             | ---    |
| minlength     | 文本最小长度     | string / number | ---             | ---    |
| placeholder   | 占位文本         | string          | ---             | ---    |
| disabled      | 禁用             | boolean         | ---             | false  |
| autofocus     | 自动获取焦点     | boolean         | ---             | false  |
| type          | 输入框类型       | string          | text / password | text   |
| id            | 输入框id         | string          | ---             | ---    |


## events

| 事件名 | 描述                                                        | 回调参数                |
| ------ | ----------------------------------------------------------- | ----------------------- |
| input  | 输入内容时触发                                              | value: string \| number |
| blur   | input失去焦点时触发                                         | event:Event             |
| focus  | input获取焦点时触发                                         | event:Event             |
| change | 在input内容发生了变化 且 （input失去焦点或者按下enter之后） | event:Event             |

## methods

| 方法名      | 描述                                                 | 参数                                              |
| ----------- | ---------------------------------------------------- | ------------------------------------------------- |
| focus       | 使得input获取焦点                                    | ---                                               |
| blur        | 使得input失去焦点                                    | ---                                               |
| select      | 选择input的文本                                      | ---                                               |