<template>
    <div>
        <div class="introhead-global">
            <div class="introhead-item" v-for="(item, index) in jsonData" :key="index">
                <div>{{ item.title }}</div>
                <div>{{ item.subtitle }}</div>
            </div>
        </div>
        <Cardfile></Cardfile>
    </div>
</template>

<script setup lang="ts">
import jsonData from '@/data/Dev/introhead.json'
import Cardfile from '@/components/dev/Cardfile.vue'
</script>

<style scoped>
</style>