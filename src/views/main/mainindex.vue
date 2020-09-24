#主页
<template>
  <div class="container">
    <div class="tops">
      <el-card class="lefts" :body-style="{ padding: '0px', height: '100%' }">
        <div class="left-top">
          <div class="left-top-left">
            <div class="content-title1">到店人数</div>
            <div class="left-bottom">
              <div class="left-bottom-left">
                <div class="content-text2">
                  <div class="text-top2">{{ content1 }}人</div>
                </div>
                <div class="content-text2">
                  <div class="text-top3">今日到店人数</div>
                </div>
              </div>
              <div class="left-bottom-left">
                <div class="content-text2">
                  <div class="text-top2">{{ content2 }}人</div>
                </div>
                <div class="content-text2">
                  <div class="text-top3">昨日到店人数</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="divider--horizontal"></div>
        <div class="left-bottom">
          <div class="left-bottom-left">
            <div class="content-title">其他顾客</div>
            <div class="content-text">
              <img class="images" src="../../assets/image/home1-1.png" />
              <div class="left-bottom-left">
                <div class="content-text3">
                  <div class="text-top">{{ content2 }}人</div>
                </div>
                <div class="content-text3">
                  <div class="text-top3">今日到店人数</div>
                </div>
              </div>
            </div>
            <div class="content-text">
              <img class="images" src="../../assets/image/home1-2.png" />
              <div class="left-bottom-left">
                <div class="content-text3">
                  <div class="text-top">{{ content2 }}人</div>
                </div>
                <div class="content-text3">
                  <div class="text-top3">昨日到店人数</div>
                </div>
              </div>
            </div>
          </div>
          <div class="divider--vertical" />
          <div class="left-bottom-center">
            <div class="content-title">到店VIP</div>
            <div class="content-text">
              <img class="images" src="../../assets/image/home2-1.png" />
              <div class="left-bottom-left">
                <div class="content-text3">
                  <div class="text-top">{{ content2 }}人</div>
                </div>
                <div class="content-text3">
                  <div class="text-top3">今日到店人数</div>
                </div>
              </div>
            </div>
            <div class="content-text">
              <img class="images" src="../../assets/image/home2-2.png" />
              <div class="left-bottom-left">
                <div class="content-text3">
                  <div class="text-top">{{ content2 }}人</div>
                </div>
                <div class="content-text3">
                  <div class="text-top3">昨日到店人数</div>
                </div>
              </div>
            </div>
          </div>
          <div class="divider--vertical" />
          <div class="left-bottom-right">
            <div class="content-title">黑名单</div>
            <div class="content-text">
              <img class="images" src="../../assets/image/home3-1.png" />
              <div class="left-bottom-left">
                <div class="content-text3">
                  <div class="text-top">{{ content2 }}人</div>
                </div>
                <div class="content-text3">
                  <div class="text-top3">今日到店人数</div>
                </div>
              </div>
            </div>
            <div class="content-text">
              <img class="images" src="../../assets/image/home3-2.png" />
              <div class="left-bottom-left">
                <div class="content-text3">
                  <div class="text-top">{{ content2 }}人</div>
                </div>
                <div class="content-text3">
                  <div class="text-top3">昨日到店人数</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </el-card>
      <div class="rights">
        <el-card class="card" :body-style="{ padding: '0px', height: '100%' }">
          <div class="text-right">广告设备统计</div>
          <div class="iframe-top">
            <iframe
              :src="url1"
              style="width: 100%;height: 99%;align: right"
              scrolling="auto"
            ></iframe>
          </div>
        </el-card>
      </div>
      <div class="rights">
        <el-card class="card" :body-style="{ padding: '0px', height: '100%' }">
          <div class="text-right">广告设备统计</div>
          <div class="iframe-top">
            <iframe
              :src="url1"
              style="width: 100%;height: 99%;align: right"
              scrolling="auto"
            ></iframe>
          </div>
        </el-card>
      </div>
    </div>
    <div class="bottoms">
      <iframe
        :src="url3"
        style="width: 100%;height: 99%;align: right"
        scrolling="auto"
      ></iframe>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      url1: "http://www.baidu.com",
      url2: "http://www.baidu.com",
      url3: "http://www.baidu.com",
      content1: "999",
      content2: "999"
    };
  },
  components: {}
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  background: #e8f2fc;
}
.tops {
  height: 50%;
  width: 100%;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
  -webkit-justify-content: center;
  justify-content: center;
  text-align: center;
}
.bottoms {
  height: 50%;
  flex: 1;
  margin-left: 5px;
  margin-right: 5px;
}
.lefts {
  flex: 6;
  height: 95%;
  margin: 5px;
  border-radius: 20px;
}
.rights {
  flex: 2;
  height: 95%;
  margin: 5px;
  border-radius: 20px;
}
.left-top {
  height: 40%;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
  -webkit-justify-content: center;
  justify-content: center;
  text-align: center;
}
.left-top-left {
  flex: 1;
  height: 97%;
  margin-right: 10px;
  margin-bottom: 5px;
}

.left-bottom {
  height: 60%;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
  -webkit-justify-content: center;
  justify-content: center;
  text-align: center;
}
.left-bottom-center {
  flex: 1;
  height: 97%;
  padding-top: 5px;
}
.left-bottom-left {
  flex: 1;
  height: 97%;
  padding-right: 0.5%;
  padding-top: 0.3%;
  text-align: left;
}
.left-bottom-right {
  flex: 1;
  height: 97%;
  padding-left: 10px;
  padding-top: 5px;
}
.content-title1 {
  margin-left: 20px;
  margin-top: 20px;
  margin-bottom: 10px;
  text-align: left;
  font-weight: bold;
}
.content-title {
  margin-left: 10%;
  margin-top: 10%;
  margin-bottom: 6%;
  text-align: left;
  font-weight: bold;
}
.content-text {
  display: flex;
  -webkit-align-items: center;
  align-items: center;
  -webkit-justify-content: center;
  justify-content: center;
  text-align: left;
}
.content-text2 {
  margin-bottom: 5%;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
  -webkit-justify-content: center;
  justify-content: center;
  text-align: left;
}
.content-text3 {
  margin-bottom: 5%;
  margin-left: 5%;
  display: flex;
  -webkit-align-items: left;
  align-items: left;
  -webkit-justify-content: left;
  justify-content: left;
  text-align: left;
}
.text-top {
  padding-right: 30px;
  font-size: 18px;
  font-weight: bold;
}
.text-top2 {
  padding-right: 30px;
  font-size: 30px;
  font-weight: bold;
}
.text-top3 {
  padding-right: 35px;
  font-size: 10px;
  color: #000000;
}
.text-right {
  margin-top: 10px;
  height: 20%;
  text-align: left;
  font-weight: bold;
  font-size: 20px;
}
.iframe-top {
  height: 70%;
  width: 90%;
  margin: 0 auto;
}
.card {
  height: 100%;
  width: 100%;
  padding: 10px;
  border-radius: 20px;
}
.divider--horizontal {
  background-color: #dde8f2;
  margin: 0 auto;
  height: 1px;
  width: 95%;
  margin-top: 10px;
}
.divider--vertical {
  background-color: #dde8f2;
  margin: 0 auto;
  height: 50%;
  width: 1px;
}
.images {
  width: 18%;
  height: 18%;
  margin-left: 10%;
  margin-bottom: 4%;
}
</style>
