<template>
  <div class="carHome">
    <div class="top">
      <div class="top-left">
        <img class="img1"
             src="../assets/img/logo.png"
             alt="">
        <div class="top-left-title">
          <img class="img2"
               src="../assets/img/title2.jpg"
               alt="">
          <img class="img3"
               src="../assets/img/title1.jpg"
               alt="">
        </div>
      </div>
      <img class="left-menu"
           src="../assets/img/menu.png"
           alt="">
    </div>
    <div class="navigations">
      <div class="nav"
           v-for="(item,index) in nav"
           :key="index">{{ item }}</div>
    </div>
    <van-swipe :autoplay="3000"
               :height="200">
      <van-swipe-item v-for="(image, index) in images"
                      :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
    <redBgc></redBgc>
    <div class="advantage">
      <div class="blackBox">
        <img src="../assets/img/Productdisplay.png"
             alt=""
             srcset="">
        <div class="four">4大优势</div>
        <div class="whiteBox">让您的交易无后顾之忧</div>
      </div>
      <div class="introduction">
        <img src="../assets/img/car1.png"
             alt="">
        <div class="redBox">
          <div class="title">01　车源稳定</div>
          <div class="info">车型丰富、长期稳定的车源，多年专注于豪车销售与服务，并拥有正规渠道体系</div>
        </div>
      </div>
      <div class="introduction">
        <div class="redBox">
          <div class="title">02　车源稳定</div>
          <div class="info">车型丰富、长期稳定的车源，多年专注于豪车销售与服务，并拥有正规渠道体系</div>
        </div>
        <img src="../assets/img/car1.png"
             alt="">
      </div>
      <div class="introduction">
        <img src="../assets/img/car1.png"
             alt="">
        <div class="redBox">
          <div class="title">03　车源稳定</div>
          <div class="info">车型丰富、长期稳定的车源，多年专注于豪车销售与服务，并拥有正规渠道体系</div>
        </div>
      </div>
      <div class="introduction">
        <div class="redBox">
          <div class="title">02　车源稳定</div>
          <div class="info">车型丰富、长期稳定的车源，多年专注于豪车销售与服务，并拥有正规渠道体系</div>
        </div>
        <img src="../assets/img/car1.png"
             alt="">
      </div>
    </div>
    <div class="successExample">
      <div class="success-top">
        <span>成功案例</span>
        <span class="more">MORE+</span>
      </div>
      <div class="redSquare">
        <img src="../assets/img/redicon.png"
             alt=""
             srcset="">
        <img src="../assets/img/redicon.png"
             alt=""
             srcset="">
      </div>
      <div class="redBorder">
        <van-swipe :autoplay="3000"
                   :height="200">
          <van-swipe-item v-for="(image, index) in images"
                          :key="index">
            <img v-lazy="image" />
          </van-swipe-item>
        </van-swipe>
        <span class="customerExample">客户案例</span>
      </div>
    </div>
    <redBgc></redBgc>
    <div class="lateral-sliding">
      <div class="lateral-sliding-item"
           v-for="(item,index) in 3"
           :key="index">
        <div class="each-img"></div>
      </div>
    </div>
  </div>
</template>
<script>
import redBgc from '../components/redBgc'
export default {
  components: {
    redBgc
  },
  data () {
    return {
      nav: ['网站首页', '关于鸿程', '车型大全', '最新车型',
        '成功案例', '新闻动态', '常见问题', '联系我们'],
      images: [
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572673002624&di=f27b36af520cdc856115facef00ff460&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01c3f255456f4d0000019ae9507919.jpg%401280w_1l_2o_100sh.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572673018065&di=e28fba9b2e76c2ee71d50a3897a331f9&imgtype=0&src=http%3A%2F%2Fwww1.m.autoimg.cn%2Fnewspic%2F2013%2F12%2F10%2F640x0_0_q30_2013121014552116751.jpg',
        'http://img0.imgtn.bdimg.com/it/u=569933304,1379976702&fm=11&gp=0.jpg'
      ]
    }
  },
  methods: {

  }
}
</script>
<style lang="scss" scope>
.carHome {
  // 顶部logo
  .top {
    position: relative;
    .top-left {
      display: flex;
      justify-content: flex-start;
      padding: 10px;
      .img1 {
        width: 52px;
        height: 40px;
      }
      .top-left-title {
        display: flex;
        flex-direction: column;
        padding: 8px;
        .img2 {
          height: 14px;
          width: 180px;
        }
        .img3 {
          margin-top: 12px;
          height: 7px;
          width: 180px;
        }
      }
    }
    .left-menu {
      position: absolute;
      right: 10px;
      top: 24px;
      width: 26px;
      height: 19px;
    }
  }
  // 导航
  .navigations {
    display: flex;
    flex-wrap: wrap;
    .nav {
      height: 40px;
      width: 24.69%;
      background-color: black;
      color: white;
      line-height: 40px;
      text-align: center;
      font-size: 13px;
      border-left: 1px solid rgb(71, 70, 70);
      border-bottom: 1px solid rgb(71, 70, 70);
    }
  }
  // 优势
  .advantage {
    width: 100%;
    height: 670px;
    background-image: url("../assets/img/blackBgc.png");
    background-size: 100% 670px;
    background-repeat: no-repeat;
    .blackBox {
      background-color: black;
      width: 100%;
      height: 160px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      img {
        position: absolute;
        width: 90%;
        height: 20px;
        top: 42px;
        z-index: 1;
      }
      .four,
      .whiteBox {
        color: white;
        z-index: 2;
      }
      .four {
        font-size: 18px;
      }
      .whiteBox {
        margin-top: 10px;
        border: 1px solid white;
        padding: 2px 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 10px;
      }
    }
    .introduction {
      display: flex;
      padding: 0 5px;
      img {
        height: 100px;
        width: 50%;
      }
      .redBox {
        height: 100px;
        width: 50%;
        background-color: #dc0a1f;
        color: white;
        .title {
          margin: 10px 0 0 5px;
          font-weight: 500;
        }
        .info {
          padding: 5px;
          font-size: 10px;
          letter-spacing: 3px;
          line-height: 18px;
        }
      }
    }
  }
  // 成功案例
  .successExample {
    margin: 40px 0 40px 0;
    padding: 0 10px;
    .success-top {
      height: 40px;
      width: 100%;
      background-color: #dc0a1f;
      display: flex;
      align-items: center;
      justify-content: space-between;
      box-sizing: border-box;
      padding: 0 10px;
      color: white;
      border-radius: 8px;
      .more {
        font-size: 13px;
      }
    }
    .redSquare {
      width: 100%;
      display: flex;
      justify-content: space-between;
      box-sizing: border-box;
      padding: 0 70px;
      img {
        width: 20px;
        height: 20px;
      }
    }
    .redBorder {
      border: 2px solid #dc0a1f;
      height: 280px;
      width: 100%;
      border-radius: 8px;
      overflow: hidden;
      .customerExample {
        display: block;
        text-align: center;
        margin-top: 30px;
        font-size: 18px;
        font-weight: 600;
      }
    }
  }
  // 最新车型
  .lateral-sliding {
    display: flex;
    overflow-y: hidden;
    overflow-x: scroll;
    .lateral-sliding-item {
      display: flex;
      margin-right: 8px;
      background-color: yellow;
      .each-img {
        width: 150px;
        height: 88px;
      }
    }
  }
}
</style>