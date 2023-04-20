<!-- 介绍页从主页中分离，这样更简洁 -->

<template>
    <div>
        <div class="introhead-global">
            <div class="introhead-item" v-for="(item, index) in jsonData" :key="index">

                <div>{{ item.title1 }}</div>
                <div>{{ item.title2 }}</div>

            </div>
        </div>
        <Fourpics></Fourpics>
        <Detailtext></Detailtext>
    </div>
</template>

<script setup lang="ts">
import jsonData from '@/data/Intro/introhead.json'
import Fourpics from '@/components/Fourpics.vue'
import Detailtext from '@/components/Detailtext.vue'
</script>

<style lang="scss">
.introhead-global {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    align-items: center;

    .introhead-item {
        display: flex;
        flex-wrap: nowrap;
        margin: 20px;
        align-items: center;
        width: 60vw;
        flex-direction: column;
        text-align: center;
        justify-content: center;

        div:nth-child(1) {
            font-size: 40px;
            font-weight: bolder;
        }

        div:nth-child(2) {
            font-size: 24px;
            color: #606266;
        }
    }
}

</style>
