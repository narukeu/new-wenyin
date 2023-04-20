<!-- 
Home 页面仍然使用模块化的设计，这样才能避免随着网站内容的增多，出现难以维护的问题。
Showview 是展示，介绍玟茵开源社区的产品。
Advantages 是可折叠页，介绍玟茵开源社区的的特色。
-->

<script setup lang="ts">
import Showview from '@/components/Showview.vue'
import Advantages from '@/components/Advantages.vue'
</script>

<template>
  <div>
    <Showview></Showview>
    <Advantages></Advantages>
  </div>
</template>
