<template>
    <!-- 英文错误提示暂不启用 -->
    <div class="not-found" v-for="(item, index) in jsonData" :key="index">
        {{ item.title }}
    </div>
</template>

<script setup lang="ts">
import jsonData from '@/data/NotFound/notfound.json'
</script>