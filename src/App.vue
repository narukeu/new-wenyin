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
          <el-menu ellipsis="true"
            unique-opened="true" :default-active="activeIndex" class="el-menu-demo" mode="horizontal"
            @select="handleSelect">
            <el-menu-item>
              玟茵开源社区
            </el-menu-item>
            <el-menu-item index="0">
              <!-- 路由指向 -->
              <RouterLink to="/">首页</RouterLink>
            </el-menu-item>
            <el-menu-item index="1">
              <!-- 路由指向 -->
              <RouterLink to="/dev">软件开发</RouterLink>
            </el-menu-item>
            <!-- 页面导航子菜单 -->
            <el-sub-menu index="2">
              <template #title>页面导航</template>
              <el-menu-item index="2-1">item 1</el-menu-item>
              <el-menu-item index="2-2">item 2</el-menu-item>
              <el-sub-menu index="2-3">
                <template #title>item 3</template>
                <el-menu-item index="2-4-1">item one</el-menu-item>
                <el-menu-item index="2-4-2">item two</el-menu-item>
                <el-menu-item index="2-4-3">item three</el-menu-item>
              </el-sub-menu>
            </el-sub-menu>
            <el-sub-menu index="3">
              <template #title>技术支持</template>
              <el-menu-item index="3-1"><a href="http://dev.wenyinos.com/my">知识库</a></el-menu-item>
              <el-menu-item index="3-2"><a href="mailto:admin@wenyinos.com">邮件联系</a></el-menu-item>
            </el-sub-menu>
            <el-menu-item index="4"><a href="">知识库</a></el-menu-item>
            <el-menu-item index="5">论坛讨论</el-menu-item>
            <el-menu-item index="6">
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

<style scoped>
</style>
