#回放
<template>
  <div class="all">
    <div class="tops">
      <div class="margins">摄像头</div>
      <div class="margins">
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <div class="margins">日期</div>
      <div class="margins">
        <el-date-picker v-model="value1" type="date" placeholder="选择日期">
        </el-date-picker>
      </div>
      <div class="margins">日期</div>
      <div class="margins">
        <el-date-picker v-model="value2" type="date" placeholder="选择日期">
        </el-date-picker>
      </div>
      <div class="margins">
        <el-button type="primary" @click.native="getdata()">确定</el-button>
      </div>
    </div>
    <div class="bottoms">
      <div class="left">
        <iframe
          :src="url"
          style="width: 100%;height: 99%;align: right"
          scrolling="auto"
        ></iframe>
      </div>
    </div>
  </div>
</template>
<script>
// import PersonList from "../../components/personList";
export default {
  data() {
    return {
      url: "http://www.baidu.com", //"http://192.168.50.200:8080/web/"
      value1: "", //日期值
      value2: "", //日期值
      options: [
        {
          value: "选项1",
          label: "摄像头1"
        },
        {
          value: "选项2",
          label: "摄像头2"
        },
        {
          value: "选项3",
          label: "摄像头3"
        },
        {
          value: "选项4",
          label: "摄像头4"
        },
        {
          value: "选项5",
          label: "摄像头5"
        }
      ],
      value: "" // 类型值
    };
  },
  components: {
    // PersonList
  },
  methods: {
    getdata() {
      // this.$store.commit("changtraTime", this.value1);
    }
  }
};
</script>

<style lang="scss" scoped>
.el-button {
  padding-top: 8px;
  padding-right: 12px;
  padding-bottom: 8px;
  padding-left: 12px;
  font-size: 14px;
}
/deep/ .el-input__inner {
  height: 33px;
}
/deep/ .el-input__icon {
  line-height: 33px;
}
.all {
  width: 100%;
  height: 100vh;
}
.tops {
  // height: 6.7%;
  height: 68px;
  width: 100%;
  background-color: white;
  display: flex;
  align-items: center; //垂直居中  justify-content: center; 水平居中 基于flex
}
.bottoms {
  // height: 82%;
  height: calc(100vh - 185px);
  width: 100%;
}
.left {
  height: 99%;
}
.right {
  height: 49%;
}
.margins {
  margin-left: 20px; // 外边距
}
</style>
