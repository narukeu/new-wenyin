<!-- Showview 展示文件模块 -->

<template>
  <div class="showview-global">
    <div class="showview-item" v-for="(item, index) in jsonData" :key="index">
      <div class="showview-item-title">
        <div>{{ item.title }}</div>
        <div>{{ item.subtitle }}</div>
      </div>
      <div class="showview-item-cont" v-for="(subitem, subindex) in item.content" :key="subindex">
        <div>{{ subitem }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import jsonData from '@/data/Home/showview.json'
</script>

<style scoped lang="scss">
.showview-global {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  align-items: center;

  .showview-item {
    display: flex;
    flex-wrap: nowrap;
    margin: 20px;
    align-items: center;
    width: 60vw;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    height: 230px;

    &-title {
      margin: 20px;

      div:nth-child(1) {
        font-size: 42px;
        font-weight: bolder;
      }

      div:nth-child(2) {
        font-size: 26px;
      }
    }

    &-cont {
      display: flex;
      flex-direction: column;
      font-size: 16px;
    }
  }
}
</style>