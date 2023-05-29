<template>
<div>
    <sss-button @click="start()" type="main" round>快速开始</sss-button>
</div>
</template>

<script>
export default {
    name: "homePage",
    methods:{
        start(){
           this.$router.push('/comps/')
        }
    }
}
</script>

<style lang="less">

</style>