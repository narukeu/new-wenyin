<!-- 
  Project name : wenyin community home page
  Date : 
          2023-04-19 Luke Na
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
      <el-header>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false"
          @select="handleSelect" collapse-transition="true">
          <el-menu-item>
            玟茵开源社区
          </el-menu-item>
          <el-menu-item index="0">
            <RouterLink to="/">首页</RouterLink>
          </el-menu-item>

          <!-- 页面导航子菜单 -->
          <el-sub-menu index="1">
            <template #title>页面导航</template>
            <el-menu-item index="1-1"><a href="http://dev.wenyinos.com/my">项目管理系统（禅道）</a></el-menu-item>
            <el-menu-item index="1-2">item two</el-menu-item>
            <el-menu-item index="1-3">item three</el-menu-item>
            <el-sub-menu index="1-4">
              <template #title>item four</template>
              <el-menu-item index="1-4-1">item one</el-menu-item>
              <el-menu-item index="1-4-2">item two</el-menu-item>
              <el-menu-item index="1-4-3">item three</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
          <el-sub-menu index="2">
            <template #title>页面导航</template>
            <el-menu-item index="1-1"><a href="http://dev.wenyinos.com/my">知识库</a></el-menu-item>
            <el-menu-item index="1-2"><a href="mailto:admin@wenyinos.com">邮件联系</a></el-menu-item>
          </el-sub-menu>
          <el-menu-item index="3">
            <RouterLink to="/about">关于</RouterLink>
          </el-menu-item>
          <div class="flex-grow" />

          <!-- 开始分割到右菜单 -->
          <el-menu-item index="4"><a href="">知识库</a></el-menu-item>
          <el-menu-item index="5">论坛讨论</el-menu-item>
        </el-menu>
      </el-header>
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
.flex-grow {
  flex-grow: 3;
}
</style>
