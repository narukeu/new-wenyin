<!-- 
玟茵开源社区 Vue 前台静态页面
基于 Vue 3 + Vite + SCSS +  TypeScript + Element Plus

更新日期：
Luke Na  2023 年 4 月 21 日
-->

<script lang="ts">
import Mainmenu from './components/Mainmenu.vue'
import PageFooter from './components/PageFooter.vue'

export default {
  components: {
    Mainmenu,
    PageFooter
  },
}
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-affix>
        <el-header>
          <Mainmenu />
        </el-header>
      </el-affix>

      <el-main>
        <Transition>
          <RouterView />
        </Transition>
      </el-main>
      <el-footer>
        <PageFooter />
      </el-footer>
    </el-container>
  </div>
</template>

