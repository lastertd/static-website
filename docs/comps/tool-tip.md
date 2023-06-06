---
title: ToolTip 提示框
publish: false
---

# tool tip 提示框

## 基本用法

通过 `type`指定类型、 `round`指定圆角、 `circle`指定圆形




::: demo

~~~vue

<template>
    <sss-popconfirm title="hello world!" >
        <sss-button @click="pr('title', 'content', 'success')">hover me</sss-button>
    </sss-popconfirm>
</template>
<script>
export default {
    methods: {
        pr(title, content, type) {
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

