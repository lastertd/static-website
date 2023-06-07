<template>
<div>
    <sss-button @click="start()" type="main" round>快速开始</sss-button>

    <sss-popconfirm title="test?" :gpu-acceleration="false">
        <sss-button type="main" round empty>click me</sss-button>
    </sss-popconfirm>
</div>
</template>

<script>
export default {
    name: "homePage",
    methods:{
        start(){
           this.$router.push('/sssUI/')
        }
    }
}
</script>

<style lang="less">

</style>