<template>
    <div class="item-container" @click="handleClick()">
        <div class="iconfont" :class="icon"></div>
        <div class="content"> {{ icon }}</div>

    </div>
</template>

<script>
export default {
    name: "iconItem",
    props: {
        icon: String,
    },
    methods:{
        handleClick(){
            navigator.clipboard.writeText(this.icon).then(() => {
                            this.$notify({
                title:'复制成功 💟',
                type:"success",
                timeout:1000
            })
            })


        }
    }
}
</script>

<style scoped lang="less">
.item-container {
    margin-bottom: 20px;
    width: 150px;
    height: 100px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    //border: solid 1px black;
    position: relative;
    box-sizing: border-box;
    transition: all .3s ease;
    color: #4c5567;


    .iconfont {
        font-size: 30px;
            user-select: none;



    }

    .content {
        margin-top: 10px;
        font-size: 12px;

    }
    &:hover{
        color: #db5b6c;
box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;

    }


}
.sss-loading{
        animation: sss-rotate 2s infinite linear;

}
</style>