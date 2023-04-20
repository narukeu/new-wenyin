<!-- Showview 展示文件模块 -->

<template>
  <div class="showview-global">
    <div class="showview-item" v-for="(item, index) in jsonData" :key="index">
      <div class="showview-item-title">
        <div>{{ item.title1 }}</div>
        <div>{{ item.title2 }}</div>
      </div>
      <div class="showview-item-cont">
        <div>{{ item.content1 }}</div>
        <div>{{ item.content2 }}</div>
      </div>
      <div class="showview-item-footer">
        <RouterLink :to="item.link">
          <div>{{ item.footer }} <el-icon size="14px" color="#337ecc">
              <ArrowRight />
            </el-icon></div>
        </RouterLink>
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

    &-title {
      margin: 5px;

      div:nth-child(1) {
        font-size: 40px;
        font-weight: bolder;
      }

      div:nth-child(2) {
        font-size: 24px;
        color: #606266;
      }
    }

    &-cont {
      color: #606266;
      font-size: 16px;

      div {
        margin-top: 10px;
        margin-bottom: 10px;
      }
    }

    &-footer {
      margin: 10px;
      display: flex;
      flex-wrap: nowrap;
      justify-content: center;
      align-items: center;
      height: 20px;

      >a>div {
        margin: 10px;
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
}</style>