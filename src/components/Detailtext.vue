<!-- Detailtext 正文介绍模块 -->

<template>
    <div class="detailtext-global">
        <div class="detailtext-item" v-for="(item, index) in jsonData" :key="index">
            <div class="detailtext-item-plate">
                <el-image style="width: 320px; height: 280px" :src="imgUrls[index]" fit="fill"></el-image>
            </div>
            <div class="detailtext-item-w">
                <div class="detailtext-item-title">
                    <div>{{ item.title }}</div>
                    <div>{{ item.subtitle }}</div>
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
    </div>
</template>
  
<script setup lang="ts">
import jsonData from '@/data/Intro/detailtext.json'
</script>

<script lang="ts">
export default {
    data() {
        var imgUrls: string[] = [];
        for (let item of jsonData) {
            console.log(item)
            imgUrls.push(new URL(item.img, import.meta.url).href);
        }
        return {
            imgUrls,
        };
    },
};
</script>

<style scoped lang="scss">
.detailtext-global {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    justify-content: center;
    align-items: center;

    .detailtext-item {
        display: flex;
        padding: 10px;
        justify-content: space-between;
        flex-wrap: wrap;
        width: 70vw;
        height: 100%;
        align-items: center;
        margin-top: 10px;
        margin-bottom: 10px;

        &-plate {
            height: 100%;
            display: flex;
        }

        &-w {
            display: flex;
            flex-direction: column;
            height: 100%;
            width: 60%;
            justify-content: center;
        }

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
}

el-image{
  background-color: transparent !important;
}

</style>
