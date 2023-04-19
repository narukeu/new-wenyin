<template>
    <div class="card-space">
        <el-card class="box-card" alignment="true">
            <template #header>
                <div class="card-header">软件开发</div>
            </template>
            <div class="text item">
                <div><a href="http://dev.wenyinos.com/my">禅道管理</a></div>
                <div><a href="https://github.com/WenYin-Community">GitHub 项目</a></div>
                <div><a href="https://gitee.com/wenyinos">Gitee 仓库</a></div>
                <div><a href="https://zh.crowdin.com/profile/wenyinos">Crowdin 项目</a></div>
            </div>
        </el-card>
        <el-card class="box-card" alignment="true">
            <template #header>
                <div class="card-header">软件演示</div>
            </template>
            <div class="text item">
                <div><a href="https://forum.wenyinos.com/thread-33.htm">Preview 20160502</a></div>
                <div><a href="https://forum.wenyinos.com/thread-6.htm">Preview 20160424</a></div>
                <div><a href="https://forum.wenyinos.com/thread-34.htm">Preview 20150903</a></div>
                <div><a href="https://github.com/WenYin-Community/WenYinOS-Installer">WenYinOS-Installer</a></div>
            </div>
        </el-card>
        <el-card class="box-card" alignment="true">
            <template #header>
                <div class="card-header">进行项目</div>
            </template>
            <div class="text item">
                <div><a href="https://forum.wenyinos.com/thread-37.htm">参与开发测试</a></div>
                <div><a href="https://exmail.qq.com/login">域名邮箱（Wecom）</a></div>
                <div><a href="https://forum.wenyinos.com/thread-36.htm">致谢列表</a></div>
                <div><a href="https://forum.wenyinos.com/thread-35.htm">社区留言</a></div>
            </div>
        </el-card>
    </div>
    <el-space wrap>
    </el-space>
</template>

<script setup lang="ts">

</script>

<style scoped>
.box-card {
    width: 300px;
    margin: 10px;
    border-radius: 4px;
}

.card-space {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.card-header {
    display: flex;
    align-items: center;
    font-weight: bolder;
}

.text {
    font-size: 14px;
    line-height: 24px;
}

.item {
    margin: 0 auto;
}
</style>