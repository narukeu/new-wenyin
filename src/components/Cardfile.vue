<template>
    <div class="card-space">
        <el-card class="box-card" alignment="true" v-for="(item, index) in jsonData" :key="index">
            <template #header>
                <div class="card-header">{{ item.title }}</div>
            </template>
            <div class="text item" v-for="(subitem,subindex) in item.subject" :key ="subindex">
                <div><a :href="subitem.link">{{ subitem.name }}</a></div>
            </div>
        </el-card>
    </div>
    <el-space wrap>
    </el-space>
</template>

<script setup lang="ts">
import jsonData from '@/data/Dev/cardfile.json'
</script>

<style scoped lang="scss">
.card-space {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .box-card {
        width: 300px;
        margin: 10px;
        border-radius: 4px;

        .card-header {
            display: flex;
            align-items: center;
            font-weight: bolder;
        }

        .text {
            font-size: 14px;
            line-height: 24px;
        }

        .item {
            margin: 0 auto;
        }

    }
}
</style>