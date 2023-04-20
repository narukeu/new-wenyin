<!-- 介绍页从主页中分离，这样更简洁 -->

<template>
    <div>
        <div class="introhead-global">
            <div class="introhead-item" v-for="(item, index) in jsonData" :key="index">
                <div>{{ item.title }}</div>
                <div>{{ item.subtitle }}</div>
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
</style>
