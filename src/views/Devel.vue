<template>
    <div>
        <div class="ih-global">
            <div class="ih-item" v-for="(item, index) in jsonData" :key="index">
                <div>{{ item.title }}</div>
                <div>{{ item.subtitle }}</div>
            </div>
        </div>
        <Cardfile />
    </div>
</template>

<script setup lang="ts">
import jsonData from '@/data/Devel/introhead.json'
import Cardfile from '@/components/Cardfile.vue'
</script>
