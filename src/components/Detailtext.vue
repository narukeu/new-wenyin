<!-- Detailtext 正文介绍模块 -->

<template>
    <div class="detailtext-global">
        <div class="detailtext-item" v-for="(item, index) in jsonData" :key="index">
            <div class="detailtext-item-title">
                <div>{{ item.title1 }}</div>
                <div>{{ item.title2 }}</div>
            </div>
            <div class="detailtext-item-cont">
                <div>{{ item.content1 }}</div>
                <div>{{ item.content2 }}</div>
            </div>
            <div class="detailtext-item-footer">
                <a :href="item.link">
                    <div>{{ item.footer }} <el-icon size="14px" color="#337ecc">
                            <ArrowRight />
                        </el-icon></div>
                </a>
            </div>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import jsonData from '@/data/Intro/detailtext.json'
</script>
  
<style scoped lang="scss">
.detailtext-global {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;

    .detailtext-item {
        display: flex;
        padding: 20px;
        height: 200px;
        flex-direction: column;
        justify-content: center;

        &-title {
            margin-top: 10px;
            margin-bottom: 10px;

            div:nth-child(1) {
                font-size: 30px;
                font-weight: bolder;
            }

            div:nth-child(2) {
                font-size: 16px;
                color: #606266;
            }
        }

        &-cont {
            color: #606266;
            font-size: 15px;
            margin-top: 10px;
            margin-bottom: 10px;
        }

        &-footer {
            display: flex;
            flex-wrap: nowrap;
            align-items: center;
            height: 20px;
            margin-top: 5px;
            margin-bottom: 5px;

            >a>div {
                display: flex;
                flex-wrap: nowrap;
                justify-content: center;
                align-items: center;
                color: #337ecc;
                font-size: 16px;
                line-height: 20px;
            }
        }
    }
}</style>