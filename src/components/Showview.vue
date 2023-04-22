<!-- sv- 展示文件模块 -->

<template>
  <div class="sv-global">
    <div class="sv-item" v-for="(item, index) in jsonData" :key="index">
      <div class="sv-item-title">
        <div>{{ item.title }}</div>
        <div>{{ item.subtitle }}</div>
      </div>
      <div class="sv-item-cont" v-for="(subitem, subindex) in item.content" :key="subindex">
        <div>{{ subitem }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import jsonData from '@/data/Home/showview.json'
</script>
