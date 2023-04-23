<!-- 
Home 页面仍然使用模块化的设计，这样才能避免随着网站内容的增多，出现难以维护的问题。
-->

<script setup lang="ts">
import Showview from '@/components/Showview.vue'
import Advantages from '@/components/Advantages.vue'
import Fourpics from '@/components/Fourpics.vue'
import Detailtext from '@/components/Detailtext.vue'
</script>

<template>
  <div>
    <Showview />
    <Fourpics />
    <Detailtext />
    <Advantages />
  </div>
</template>
