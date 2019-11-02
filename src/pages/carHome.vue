<template>
  <div class="carHome">
    <!-- logo图标 -->
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
    <!-- 导航栏 -->
    <div class="navigations">
      <div class="nav"
           v-for="(item,index) in nav"
           :key="index"
           :class="{ red: index == isActive}"
           @click="changeColor(index)">{{ item }}</div>
    </div>
    <!-- 轮播图 -->
    <van-swipe :autoplay="3000"
               :height="200">
      <van-swipe-item v-for="(image, index) in images"
                      :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
    <redBgc></redBgc>
    <!-- 4大优势 -->
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
    <!-- 成功案例 -->
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
    <!-- 新车型 -->
    <div class="newCar">
      <div class="newCar-text">最新车型</div>
      <img src="../assets/img/icon3.png"
           alt=""
           srcset="">
    </div>
    <!-- 左右滑动看车 -->
    <div class="lateral-sliding">
      <div class="lateral-sliding-item"
           v-for="(item,index) in images"
           :key="index">
        <img :src="item"
             class="each-img" />
        <span class="name">鸿程进口车</span>
      </div>
    </div>
    <!-- 车型大全 -->
    <div class="moreModels">
      <div class="blackBox">
        <img src="../assets/img/Productdisplay.png"
             alt=""
             srcset="">
        <div class="more">车型大全</div>
        <div class="whiteBox">品质保障，值得选购</div>
      </div>
      <div class="models">
        <div class="model"
             v-for="(item,index) in 6"
             :key="index">
          <img src="../assets/img/car3.png"
               alt=""
               srcset="">
          <span>鸿程进口车</span>
        </div>
      </div>
      <div class="showMore">
        查看更多>>
      </div>
    </div>
    <redBgc></redBgc>
    <!-- 公司简介 -->
    <div class="companyIntroduction">
      <div class="company-top">
        <span>鸿程简介</span>
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
        <img src="../assets/img/car3.png"
             alt=""
             srcset="">
        <span>&nbsp;&nbsp;&nbsp;&nbsp;{{ introduction }}</span>
      </div>
    </div>
    <!-- 新闻动态 -->
    <div class="news">
      <div class="news-top">
        <span>新闻动态</span>
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
        <div class="newList" v-for="(item,index) in 6" :key="index">
          <div class="left">
            <span class="redBox">
              <img src="../assets/img/triangle.png"
                   alt="">
            </span>
            <span>二手车如何挑选发动机?</span>
          </div>
          <div class="right">[2019-10-22]</div>
        </div>
      </div>
    </div>
    <redBgc></redBgc>
    <div class="bottom">东莞市鸿程汽车销售有限公司 © COPYRIGHT 2019</div>
    <div class="fixedBottom">
      <div class="fixed-box">
        <img src="../assets/img/phone.png"
             alt=""
             srcset="">
        <span>拨打电话</span>
      </div>
      <div class="fixed-box">
        <img src="../assets/img/wechat.png"
             alt=""
             srcset="">
        <span>复制微信号</span>
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
      ],
      isActive: 0,
      introduction: '东莞市鸿程汽车销售有限公司东莞市鸿程汽车销售有限公司东莞市鸿程汽车销售有限公司东莞市鸿程汽车销售有限公司东莞市鸿程汽车销售有限公司东莞市鸿程汽车销售有限公司'
    }
  },
  methods: {
    changeColor(index) {
      this.isActive = index
    }
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
    .red {
      background-color: #dc0a1f;
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
      height: 110px;
      img {
        height: 100%;
        width: 50%;
      }
      .redBox {
        height: 100%;
        width: 50%;
        background-color: #dc0a1f;
        color: white;
        .title {
          margin: 10px 0 0 5px;
          font-weight: 500;
        }
        .info {
          padding: 5px;
          font-size: 0.7rem;
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
  .newCar {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 30px 0;
    .newCar-text {
      font-weight: 600;
      font-size: 18px;
      letter-spacing: 4px;
    }
    img {
      margin-top: 6px;
      width: 60px;
    }
  }
  .lateral-sliding {
    display: flex;
    overflow-y: hidden;
    overflow-x: scroll;
    .lateral-sliding-item {
      display: flex;
      flex-direction: column;
      margin-right: 8px;
      .name {
        text-align: center;
        font-size: 14px;
      }
      .each-img {
        width: 150px;
        height: 88px;
      }
    }
  }
  // 车型大全
  .moreModels {
    width: 100%;
    min-height: 840px;
    background-image: url("../assets/img/blackBgc.png");
    background-size: 100% 840px;
    background-repeat: no-repeat;
    margin-top: 30px;
    margin-bottom: 30px;
    .blackBox {
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
        top: 70px;
        z-index: 1;
      }
      .more,
      .whiteBox {
        color: white;
        z-index: 2;
      }
      .more {
        margin-top: 70px;
        font-size: 18px;
      }
      .whiteBox {
        margin-top: 10px;
        border: 1px solid white;
        padding: 6px 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
      }
    }
    .models {
      box-sizing: border-box;
      padding: 0 8px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .model {
        background-color: #dedcdf;
        width: 48%;
        height: 160px;
        box-sizing: border-box;
        padding: 2px;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 18px;
        img {
          height: 80%;
          width: 100%;
        }
        span {
          margin-top: 5px;
          font-size: 14px;
        }
      }
    }
    .showMore {
      width: 96%;
      height: 40px;
      background-color: #dc0a1f;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 20px auto;
      border-radius: 6px;
    }
  }
  // 公司简介
  .companyIntroduction {
    margin: 40px 0 40px 0;
    padding: 0 10px;
    .company-top {
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
      min-height: 280px;
      width: 100%;
      border-radius: 8px;
      overflow: hidden;
      img {
        height: 180px;
        width: 100%;
      }
      span {
        font-family: "Courier New", Courier, monospace;
        font-size: 11px;
        letter-spacing: 2px;
      }
    }
  }
  // 新闻动态
  .news {
    margin: 40px 0 40px 0;
    padding: 0 10px;
    .news-top {
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
      min-height: 280px;
      width: 100%;
      border-radius: 8px;
      overflow: hidden;
      .newList {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        margin-top: 10px;
        .left {
          display: flex;
          align-items: center;
          font-size: 15px;
          .redBox {
            display: block;
            background-color: #dc0a1f;
            height: 15px;
            width: 15px;
            position: relative;
            margin-right: 8px;
            img {
              position: absolute;
              left: 5px;
              top: 4px;
              width: 5px;
              height: 8px;
            }
          }
        }
        .right {
          font-family: 'Courier New', Courier, monospace;
          color: #969595;
        }
      }
    }
  }
  // 底部
  .bottom {
    background-color: #f7f7f7;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #8b8b8b;
    font-size: 13px;
    margin-bottom: 60px;
  }
  // 固定底部
  .fixedBottom {
    height: 60px;
    width: 100%;
    position: fixed;
    bottom: 0;
    z-index: 100;
    display: flex;
    background-color: white;
    justify-content: space-between;
    .fixed-box {
      background-color: black;
      width: 49.8%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      img {
        width: 25px;
        height: 20px;
      }
      span {
        color: white;
        font-size: 15px;
      }
    }
  }
}
</style>