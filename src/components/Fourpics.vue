<template>
  <Transition name="slide-fade">
    <div class="fpic-global">
      <div class="fpic-item" v-for="(item, index) in jsonData" :key="index">
        <div class="fpic-item-img">
          <el-image style="width: 100px; height: 100px" :src="item.img" fit="fill"></el-image>
        </div>
        <div class="fpic-item-cont">
          <div class="fpic-item-cont-title">{{ item.title }}</div>
          <div class="fpic-item-cont-subtitle">{{ item.content }}</div>
        </div>
      </div>
    </div>
  </Transition>
</template>
  
<script setup lang="ts">
import jsonData from "@/data/Home/fourpics.json";
</script>

