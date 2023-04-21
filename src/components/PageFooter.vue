<template>
    <!-- 本来想直接用 Element UI 的组件的，现在看来还是自己手写页脚内容自由度更大一点。 -->
    <div class="footer-global">
        <div class="footer-info">
            <div class="footer-item">
                <div class="footer-item-title"></div>
                <div class="footer-item-info">
                    <div>玟茵开源社区不仅仅是一个开源技术社区，更是广大爱好者交流之地。</div>
                    <div>本站由 Vue.js 强力驱动。</div>
                    <div></div>
                    <div><img style="width:180px; height:20px;" :src="Qiniu"></div>
                </div>
            </div>
            <div class="footer-item">
                <div class="footer-item-title">联系方式</div>
                <div class="footer-item-info">
                    <div>QQ：376834707</div>
                    <div><a target="_blank"
                            href="https://shang.qq.com/wpa/qunwpa?idkey=1a4a3865e196be793e6ed6ed5ea9d7d8dc6c3b7bc2141f514292f5ca96d12adc">
                            <img src="https://pub.idqqimg.com/wpa/images/group.png" alt="玟茵开源社区交流群" title="玟茵开源社区交流群"></a>
                    </div>
                    <div><a href="mailto:ruojiner@hotmail.com">ruojiner@hotmail.com</a></div>
                    <div><a href="mailto:ruojiner@163.com">ruojiner@163.com</a></div>
                    <div><a href="https://work.weixin.qq.com/join/6uZOgyGDqkFJ1vmO3CISIw/hb_share_mng_contacts"
                            target="_blank">WeCom（企业微信）</a></div>
                </div>
            </div>
            <div class="footer-item">
                <div class="footer-item-title">友情链接</div>
                <div class="footer-item-info">
                    <div><a href="https://www.zsite.com/">臻网建站平台</a></div>
                    <div><a href="http://lotrc.com/">夕阳下的草垛</a></div>
                    <div><a href="https://nthxsz.top/">濑·栖·屋 Microsoft NK</a></div>
                    <div><a href="https://narukeu.cc/">Luke Na - Blog</a></div>
                    <div><a href="https://hikaricalyx.com/">光卡科技（仮）</a></div>
                    <div><a href="https://fuchsia-china.com/">Fuchsia 中文社区</a></div>
                </div>
            </div>

        </div>
        <div class="footer-copyright">
            <div style="text-align: center; font-size:14px;">Copyleft &copy; 玟茵开源社区 2013 - {{ currentYear }}</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Qiniu from '@/assets/qiniu-transparent.png'
let currentYear = new Date().getFullYear()

</script>

<style scoped lang="scss">
.footer-info {
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    justify-content: space-around;
}

.footer-item {
    width: 210px;
    display: flex;
    height: 250px;
    flex-direction: column;
    margin-left: 20px;
    margin-right: 20px;

    &-title {
        font-size: 16px;
        font-weight: bolder;
    }

    &-info {
        display: flex;
        flex-direction: column;
        height: 200px;

        div {
            font-size: 14px;
            margin-top: 5px;
            margin-bottom: 5px;
        }
    }
}
</style>
