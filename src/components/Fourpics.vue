<!-- 介绍页从主页中分离，这样更简洁 -->

<template><Transition name="slide-fade">
    <div class="intro-global">
      <div class="intro-item" v-for="(item, index) in jsonData" :key="index">
        <div class="intro-item-img">
          <el-image style="width: 100px; height: 100px" :src="imgUrls[index]" fit="fill"></el-image>
        </div>
        <div class="intro-item-cont">
          <div class="intro-item-cont-title">{{ item.title }}</div>
          <div class="intro-item-cont-subtitle">{{ item.content }}</div>
        </div>
      </div>
    </div></Transition>

</template>
  
<script setup lang="ts">
import jsonData from "@/data/Intro/fourpics.json";
</script>
  
<script lang="ts">
export default {
  data() {
    var imgUrls: string[] = [];
    for (let item of jsonData) {
      console.log(item)
      imgUrls.push(new URL(item.img, import.meta.url).href);
    }
    return {
      imgUrls,
    };
  },
};
</script>
  
<style lang="scss">
.intro-global {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  .intro-item {
    display: flex;
    margin: 5px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    height: 200px;
    width: 210px;

    &-img {
      height: 100px;
      width: 100px;
    }

    &-cont {
      margin: 5px;

      &-title {
        margin: 2px;
        font-weight: bolder;
        font-size: 18px;
      }

      &-subtitle {
        margin: 2px;
        font-size: 14px;
      }
    }
  }
}
</style>