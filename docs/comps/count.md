---
title: Count 计数器
publish: false
---



# count 计数器

::: tip
需要`v-model`绑定数据且绑定的数据需要是`number`类型

暂时没有对小数实现很好的支持
:::




## 基础用法
计数器默认宽度为父元素100%
 ,可以直接输入想要的数字

::: demo

~~~vue

<template>
    <sss-count v-model="count"
    ></sss-count>

</template>
<script>
    export default {
        data() {
            return {
                count:0
            }
        }
    }
</script>
~~~

:::

## 设置不能输入
禁用手动输入

::: demo

~~~vue

<template>
    <sss-count v-model="count"
               readonly
               
    ></sss-count>

</template>
<script>
    export default {
        data() {
            return {
                count:0
            }
        }
    }
</script>
~~~

:::


## 最小/大值
`min`设置数字的下界
`max`设置数字的上界

::: demo `min`、`max`两者均为数值型

~~~vue

<template>
    <sss-count v-model="count"
               :min="0"
               :max="20"
               
    ></sss-count>

</template>
<script>
    export default {
        data() {
            return {
                count:0
            }
        }
    }
</script>
~~~

:::


## 步数
`step`设置增长步数

::: demo `step`为数值类型

~~~vue

<template>
    <sss-count v-model="count"
               :step="2"
               
    ></sss-count>

</template>
<script>
    export default {
        data() {
            return {
                count:0
            }
        }
    }
</script>
~~~

:::


## attributes

| 参数名   | 描述           | 类型    | 可选值 | 默认值 |
| -------- | -------------- | ------- | ------ | ------ |
| readonly | 只读           | boolean | ---    | false  |
| min      | 数字的下界     | number  | ---    | ---    |
| max      | 数字的上界     | number  | ---    | ---    |
| step     | 数字的增长步数 | number  | ---    | 1      |
| disabled | 禁用计数器     | boolean | ---    | false  |



