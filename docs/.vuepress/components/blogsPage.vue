<template>
<div class="blogs-outer">
    <blog-dec-card :item="item" @click.native="func()"></blog-dec-card>
    <blog-dec-card :item="item"></blog-dec-card>



</div>
</template>

<script>
export default {
    name: "blogsPage",

    data() {
        return {
            item:{
                imgUrl:"https://pic1.imgdb.cn/item/646c451ee03e90d874d80c16.jpg",
                title: "hello world!",
                des:"dioadiqhiui1hiudbasdubadbawdhwquyg21yu3g12udgwgdHDIUAHDUIA好歹武汉21212你好大好hiudahsiuh23h21uih121h1单独哈的是否是否发送发送和数据合法说的合法技术附件好舒服就师范生的的必·1",
                tagList:['vue','test','nihao1'],
                createTime:"2020/5/21",
                author:'laster'

            }
        }
    },
    methods:{
        func(){
            console.log("ttt")
            this.$router.push({
                path:"/test",
            })
        }
    }

}
</script>

<style scoped lang="less">
.blogs-outer{
    min-width: 600px;
    max-width: 900px;
    position: absolute;
    left: 200px;
    right: 350px;
    @media(max-width: 900px){
        left: 50px;
        right: 50px;
    }
    @media(min-width: 1800px){
        left: initial;
        right: inherit;
    }

}

</style>