<!-- 介绍页从主页中分离，这样更简洁 -->

<template>
    <div class="intro-global">
        <div class="intro-item">
            <div class="intro-item-img"></div>
            <div class="intro-item-cont">
                <div class="intro-item-cont-title">开源操作系统</div>
                <div class="intro-item-cont-subtitle">基于 GNU/Linux 开发</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss">
.intro-global {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    .intro-item {
        display: flex;
        margin:5px;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        text-align: center;
        height: 200px;
        width: 210px;
        &-img {
            height: 100px;
            width: 100px;
            background-color: grey;
        }

        &-cont {
            margin: 5px;
            &-title {
                margin: 2px;
                font-weight: bolder;
                font-size: 18px;
            }
            &-subtitle {
                margin: 2px;
                font-size: 14px;
            }
        }
    }
}
</style>