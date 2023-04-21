<template>
  <el-timeline v-for="(item, index) in jsonData" :key="index">
      <el-timeline-item :timestamp="item.time" placement="top">
        <el-card>
          <h4>{{ item.title }}</h4>
          <p>{{ item.paragraph }}</p>
        </el-card>
      </el-timeline-item>
    </el-timeline>
</template>

<script setup lang="ts">
import jsonData from '@/data/About/timelines.json'
</script>
