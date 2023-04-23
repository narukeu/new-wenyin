<script lang="ts" setup>
let activeName = '1'
</script>

<template>
  <div class="demo-collapse">
    <el-collapse el-collapse v-model="activeName" accordion>
      <el-collapse-item title="玟茵开源社区开发目标是什么？" name="1">
        <div>
          玟茵开源社区是以 Linux 开源操作系统为主要研究对象的开源社区，主要参加对象为大中学生。 我们致力于发展 Linux 操作系统在国内的使用，以及提供更好的 Linux 操作体验。 我们的目标是，让 Linux
          操作进入个人电脑用户的视野，而不是局限于极客圈，让开源的思想真正发扬光大下去，为全人类最终用上适合自己的软件而奋斗。
          我们用“玟茵”这个名字，正是希望社区能像美玉一样，保持高洁志趣，枝繁叶茂发展下去，为开源软件造福人类贡献自己的一份力量！
        </div>
      </el-collapse-item>
      <el-collapse-item title="“玟茵”两个字有什么特殊含义？" name="2">
        <div style="font-weight: bolder;">
          “玟茵”这个充满柔美气息的名字，暗示了本开源社区的受众对象主要是女性用户，另外“茵”可做如下解释。
        </div>
        <div>
          宋叶梦得《石林诗话》卷中：“古诗有离合体，近人多不解。此体始於,孔北海:"余读《文类》，得 北海 四言一篇云：‘渔父屈节，水潜匿，玟琁隐曜，美玉韬光。’”
        </div>
        <div>茵，车重席也。——《说文》<br /></div>
        <div>交茵畅毂。——《秦风·小戎》。（传：“文茵虎皮也。”）</div>
        <div>茵席。——《礼记·少仪》。（注：“著褥也。”）</div>
        <div>同车未尝敢均茵冯。——《汉书·周阳由传》</div>
        <div>绿草如茵。——清·薛福成《观巴黎油画记》</div>
        <div>又如：茵伏(茵轼。车蓐和车轼)、茵冯(茵凭。车蓐与车轼)</div>
      </el-collapse-item>
      <el-collapse-item title="“玟茵”有什么自己的特色？" name="3">
        <div div style="font-weight: bolder;">1.优美界面设计</div>
        <div>简约不失优美，实用美学主义，让桌面操控成为一种享受，为桌面用户提供商业系统之外的选择。</div>
        <div div style="font-weight: bolder;">2.严格质量控制</div>
        <div>提高品质，保持和上游开源社区紧密合作；杜绝分裂主义，为开源社区发展做出应有贡献。</div>
        <div div style="font-weight: bolder;">3.完善项目管理</div>
        <div>用规定环节去完成项目开发。开发测试并重，用户反馈及时融入下一轮开发中。</div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<style scoped>
.demo-collapse {
  margin: 0 auto;
  width: 80vw;
}
</style>