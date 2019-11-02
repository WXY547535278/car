<template>
  <div class="redBgc">
    <span class="yellow"
          style="margin-top:20px;margin-bottom:10px;">严格杜绝一切泡水车！事故车！调表车！</span>
    <span class="yellow"
          style="margin-bottom:14px">没有中间商挣差价！</span>
    <span class="addWechat"><img src="../assets/img/phone1.png"
           alt=""
           srcset=""> 更多资讯请添加微信:</span>
    <span class="yellow"
          style="margin-top:16px;display:flex;align-item:center;">{{ wechatNum }}<img src="../assets/img/Arrow.png"
           alt=""
           srcset="">
      <span class="copy"
            :data-clipboard-text="wechatNum"
            @click="copy">(点击复制微信号)</span></span>
  </div>
</template>
<script>
import Clipboard from 'clipboard'
export default {
  data () {
    return {
      wechatNum: '13592728882'
    }
  },
  methods: {
    /**
   * 复制功能
   */
    copy () {
      var clipboard = new Clipboard('.copy')
      clipboard.on('success', e => {
        console.log('复制成功', e)
        this.$dialog.alert({
          title: '复制成功',
          message: '已复制，请在微信粘贴中使用'
        }).then(() => {
          // on close
        })
        // 释放内存
        clipboard.destroy()
      })
      clipboard.on('error', e => {
        // 不支持复制
        this.$toast({
          message: '手机权限不支持复制功能'
        })
        console.log('该浏览器不支持自动复制')
        // 释放内存
        clipboard.destroy()
      })
    }
  }
}
</script>
<style lang="scss" scope>
.redBgc {
  width: 100%;
  height: 180px;
  background-image: url("../assets/img/redBgc.png");
  background-size: 100% 180px;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
  img {
    width: 20px;
    height: 20px;
  }
  .yellow {
    color: #f3ad37;
    font-weight: 600;
    .copy {
      color: white;
      font-size: 13px;
    }
    img {
      height: 16px;
      width: 24px;
      margin: 0 10px;
    }
  }
  .addWechat {
    img {
      transform: translateY(6px);
    }
    font-size: 15px;
    font-weight: 600;
    color: white;
  }
}
</style>