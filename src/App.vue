<!-- 
玟茵开源社区 Vue 前台静态页面
基于 Vue 3 + Vite + TypeScript + Element Plus

更新日期：
Luke Na  2023 年 4 月 19 日
-->

<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'
import PageFooter from './components/PageFooter.vue'

export default {
  components: { PageFooter },
  setup() {
    const activeIndex = ref('1')
    const handleSelect = (key: string, keyPath: string[]) => {
      console.log(key, keyPath)
    }
    return { activeIndex, handleSelect }
  }
}
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-affix><el-header>
          <el-menu ellipsis="true" unique-opened="true" :default-active="activeIndex" class="el-menu-demo"
            mode="horizontal" @select="handleSelect">
            <el-menu-item>
              玟茵开源社区
            </el-menu-item>
            <el-menu-item index="0">
              <!-- 路由指向 -->
              <RouterLink to="/">首页</RouterLink>
            </el-menu-item>
            <el-menu-item index="2">
              <!-- 路由指向 -->
              <RouterLink to="/intro">项目介绍</RouterLink>
            </el-menu-item>
            <el-menu-item index="3">
              <!-- 路由指向 -->
              <RouterLink to="/dev">软件开发</RouterLink>
            </el-menu-item>
            <!-- 页面导航子菜单 -->
            <el-sub-menu index="4">
              <template #title>页面导航</template>
              <el-menu-item index="4-1"><a href="http://paste.wenyinos.com/" target="_blank">代码粘贴板</a></el-menu-item>
              <el-menu-item index="4-2"><a href="http://bbs.wenyinos.com/" target="_blank">Legacy Computer
                  Forum</a></el-menu-item>
              <el-menu-item index="4-3"><a href="http://cloud.wenyinos.com/" target="_blank">KodBox</a></el-menu-item>
              <el-menu-item index="4-4"><a href="http://cloud.wenyinos.com/" target="_blank">GitHub
                  文件加速</a></el-menu-item>
              <el-menu-item index="4-5"><a href="http://ban.wenyinos.com/" target="_blank">游戏服务管理</a></el-menu-item>
            </el-sub-menu>
            <el-menu-item index="5"><a href="https://wiki.wenyinos.com/">知识库</a></el-menu-item>
            <el-menu-item index="6"><a href="https://forum.wenyinos.com/">论坛讨论</a></el-menu-item>
            <el-menu-item index="7">
              <RouterLink to="/about">关于</RouterLink>
            </el-menu-item>
          </el-menu>
        </el-header></el-affix>
      <el-main>
        <RouterView></RouterView>
      </el-main>
      <el-footer>
        <PageFooter></PageFooter>
      </el-footer>
    </el-container>
  </div>
</template>

<style scoped></style>
