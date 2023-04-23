<!-- Detailtext 正文介绍模块 -->

<template>
    <div class="dt-global">
        <div class="dt-item" v-for="(item, index) in jsonData" :key="index">
                <img class="dt-item-plate" :src="imgUrls[index]" />
            <div class="dt-item-w">
                <div class="dt-item-title">
                    <div>{{ item.title }}</div>
                    <div>{{ item.subtitle }}</div>
                </div>
                <div class="dt-item-cont">
                    <div>{{ item.content1 }}</div>
                    <div>{{ item.content2 }}</div>
                </div>
                <div class="dt-item-footer">
                    <a :href="item.link">
                        <div>{{ item.footer }} <el-icon size="15px" color="#337ecc">
                                <ArrowRight />
                            </el-icon></div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import jsonData from '@/data/Home/detailtext.json'
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

