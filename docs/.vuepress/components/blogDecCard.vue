<!--文章描述卡片-->

<template>
    <div class="article-des-card">
        <div class="img-box">
            <img :src="item.imgUrl" alt="">
        </div>

        <div class="content-box ">
            <h1 class="title">{{ item.title }}</h1>
            <p class="describe">{{ item.des }}</p>

            <div class="footer">
                <span>
                    <i class="iconfont sss-user-fill"></i>
                    {{item.author}}
                </span>
                <span>
                    <i class="iconfont sss-time-fill"></i>
                    {{item.createTime}}
                </span>
                <span class="tag-list">
                    <i class="iconfont sss-tag-fill"></i>
                    <span class="tag" v-for="tag in item.tagList">
                        {{tag}}
                    </span>
                </span>

            </div>
        </div>
    </div>
</template>

<script>
export default {
     name: "blogDecCard",
    props: {
        item: Object,
    },
    methods: {
    }
}
</script>

<style scoped lang="less">
@import "sss-ui/src/style/variable.less";
.article-des-card {
    width: 100%;
    height: auto;
    min-height: 200px;
    border: 1px solid @color-gray;
    box-shadow: 1px 1px 8px @color-gray;
    display: flex;
    flex-flow: row wrap;
    position: relative;
    margin: 10px 0;
    background: linear-gradient(to right, #ffffff, @color-white3);
    color: #2f3542;

    .img-box {
        min-width: 200px;
        flex: 1;
        width: auto;
        border-radius: 10px;
        overflow: hidden;
        position: relative;
        top: -10px;
        left: -5px;
        height: 200px;
        box-shadow: 1px 1px 8px #675454;

        img {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            object-fit: cover;
            transition: all 0.2s ease;

            &:hover {
                transform: scale(1.1);
            }
        }

    }

    .content-box {
        height: auto;
        width: auto;
        flex: 2;
        user-select: none;
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-evenly;

        padding-left: 10px;
        padding-right: 10px;


        .title {
            text-shadow: 1px 1px 4px #695353;
            transition: all 0.2s ease;
            margin: 0;

            &:hover {
                transform: translate(-2px, -2px);
            }
        ;

            &:hover:active {
                transform: scale(99%);
            }

        }

        .describe {
            margin: 0;
            text-indent: 2em;
            word-wrap: break-word;
            color: #57606f;

            &:first-letter {
                font-size: 25px;
            }
        }

        .tag-list {
            font-size: 15px;
            display: flex;
            align-items: center;
            & > *{
                margin: 0 5px;
            }

        }

        .footer {
            margin-bottom: 5px;
            width: 100%;
            display: flex;
            flex-flow: row nowrap;
            justify-content: end;
            align-items: center;
            & > *{
                margin: 0 10px;
                color: #db5b6c;
            }
            .tag:hover{
                color: darken(#db5b6c,30%);
            }



        }
    }
}
</style>