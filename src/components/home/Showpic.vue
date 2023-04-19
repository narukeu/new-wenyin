<template>
    <div class="showpic-global">
        <div class="showpic-item">
            <div class="showpic-item-title">
                <div>玟茵开源社区</div>
                <div>Wenyin Open Source Community</div>
            </div>
            <div class="showpic-item-cont">
                <div>简约不失优美，实用美学主义，让桌面操控成为一种享受。</div>
                <div>为桌面用户提供商业操作系统之外的选择。</div>
            </div>
            <div class="showpic-item-footer">
                <a href="https://forum.wenyinos.com/thread-37.htm">
                    <div>Getting Started <el-icon size="14px" color="#337ecc">
                            <ArrowRight />
                        </el-icon></div>
                </a>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.showpic-global {
    display: flex;
    flex-direction: column;
    /* margin-top: 10px; */
    margin-bottom: 10px;
    align-items: center;
}

.showpic-item {
    display: flex;
    flex-wrap: nowrap;
    margin-left: 10px;
    margin-right: 10px;
    align-items: center;
    width: 60vw;
    height: 250px;
    flex-direction: column;
    text-align: center;
    justify-content: center;
}

.showpic-item-title {
    margin: 5px;
}

.showpic-item-title div:nth-child(1) {
    font-size: 30px;
    font-weight: bolder;
}

.showpic-item-title div:nth-child(2) {
    font-size: 16px;
    color: #606266;
}

.showpic-item-cont {
    color: #606266;
    font-size: 14px;
}

.showpic-item-cont div {
    margin-top: 10px;
    margin-bottom: 10px;
}

.showpic-item-footer {
    margin: 10px;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    height: 20px;
}

.showpic-item-footer>a>div {
    margin: 10px;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    color: #337ecc;
    font-size: 16px;
    line-height: 20px;
}
</style>