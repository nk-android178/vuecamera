#热力
<template>
  <div class="all">
    <div class="tops">
      <div class="margins">日期</div>
      <div class="margins">
        <el-date-picker v-model="value1" type="date" placeholder="选择日期">
        </el-date-picker>
      </div>
      <div class="margins">类型</div>
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
      <div class="margins">时间段</div>
      <div class="margins">
        <el-date-picker v-model="value1" type="date" placeholder="选择日期">
        </el-date-picker>
      </div>
      <div class="margins">
        <el-button type="primary" @click.native="getdata()">确定</el-button>
      </div>
    </div>
    <div class="bottoms" ref="map">
      <div class="left2">
        <canvas id="BaCanvas" class="draw"></canvas>
        <div style="display:none">
          <img ref="image" src="../../assets/image/map.png" />
        </div>
      </div>
      <div class="left">
        <canvas id="myCanvas" class="draw"></canvas>
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
      options: [
        {
          value: "选项1",
          label: "类型1"
        },
        {
          value: "选项2",
          label: "类型2"
        },
        {
          value: "选项3",
          label: "类型3"
        },
        {
          value: "选项4",
          label: "类型4"
        },
        {
          value: "选项5",
          label: "类型5"
        }
      ],
      dataList: [
        { x: 100, y: 50, value: 100 },
        { x: 200, y: 100, value: 100 },
        { x: 300, y: 150, value: 100 },
        { x: 400, y: 200, value: 100 },
        { x: 500, y: 250, value: 100 },
        { x: 600, y: 300, value: 100 },
        { x: 700, y: 350, value: 100 },
        { x: 800, y: 400, value: 100 },
        { x: 900, y: 450, value: 100 },
        { x: 1000, y: 500, value: 100 },
        { x: 1100, y: 550, value: 100 }
      ],
      value: "", // 类型值
      ctx: null,
      canvas: null,
      screenWidth: document.body.clientWidth
    };
  },
  components: {
    // PersonList
  },
  mounted() {
    const self = this;
    self.initCanvas();
    //自适应
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth;
        self.screenWidth = window.screenWidth;
      })();
    };
  },
  watch: {
    screenWidth() {
      this.loads();
      this.initCanvas();
    }
  },
  methods: {
    getdata() {
      // this.$store.commit("changtraTime", this.value1);
      // this.tocanvas();
      this.loads();
      this.initCanvas();
    },
    //绘制背景
    initCanvas() {
      const canvas = document.getElementById("BaCanvas");
      this.ctx = canvas.getContext("2d");
      let w = this.$refs.map.offsetWidth;
      let h = this.$refs.map.offsetHeight;
      canvas.setAttribute("width", w);
      canvas.setAttribute("height", h);
      let img = this.$refs.image;
      //第一次图片加载
      img.onload = () => {
        this.ctx.drawImage(img, 0, 0, w, h);
      };
      // this.clearInterval();
      this.ctx.clearRect(0, 0, w, h);
      this.ctx.drawImage(img, 0, 0, w, h);
    },
    loads() {
      // 0. 创建Canvas并获取上下文
      let canvas = document.getElementById("myCanvas");
      let context = canvas.getContext("2d");
      let w = this.$refs.map.offsetWidth;
      let h = this.$refs.map.offsetHeight;
      canvas.setAttribute("width", w);
      canvas.setAttribute("height", h);
      // 1.2.3. 根据热力值绘制辐射圆
      let min = 0;
      let max = this.dataList.reduce((max, data) => {
        return Math.max(max, data.value);
      }, 0);
      this.dataList.forEach(data =>
        this.drawRadiation(context, {
          x: data.x,
          y: data.y,
          radius: 40,
          weight: Math.max(Math.min((data.value - min) / (max - min), 1), 0)
        })
      );

      // 4. 颜色映射
      let palette = this.createPalette();
      // document.body.appendChild(palette.canvas);

      let { width, height } = canvas;
      let imageData = context.getImageData(0, 0, width, height);
      let data = imageData.data;
      for (let i = 3; i < data.length; i += 4) {
        let alpha = data[i];
        let color = palette.pickColor(alpha);
        data[i - 3] = color[0];
        data[i - 2] = color[1];
        data[i - 1] = color[2];
      }
      context.putImageData(imageData, 0, 0);
    },
    // 绘制辐射圆
    drawRadiation(context, opts) {
      let { x, y, radius, weight } = opts;
      radius = Math.round(radius * weight);

      // 设置填充色
      let rGradient = context.createRadialGradient(x, y, 0, x, y, radius);
      rGradient.addColorStop(0, "rgba(0, 0, 0, 1)");
      rGradient.addColorStop(1, "rgba(0, 0, 0, 0)");
      context.fillStyle = rGradient;

      // 设置globalAlpha
      context.globalAlpha = weight;

      // 绘制圆形
      context.beginPath();
      context.arc(x, y, radius, 0, 2 * Math.PI);
      context.closePath();

      // 填充
      context.fill();
    },
    // 创建调色盘
    createPalette() {
      let colorStops = {
        0: "#0ff",
        0.2: "#0f0",
        0.4: "#ff0",
        1: "#f00"
      };
      let width = 256;
      let height = 10;

      // 创建canvas
      let palatteCanvas = document.createElement("Canvas");
      palatteCanvas.width = width;
      palatteCanvas.height = height;
      let ctx = palatteCanvas.getContext("2d");

      // 创建线性渐变色
      let linearGradient = ctx.createLinearGradient(0, 0, width, 0);
      for (const key in colorStops) {
        linearGradient.addColorStop(key, colorStops[key]);
      }

      // // 绘制渐变色条
      ctx.fillStyle = linearGradient;
      ctx.fillRect(0, 0, width, height);

      // // 读取像素值
      let imageData = ctx.getImageData(0, 0, width, 1).data;

      return {
        canvas: palatteCanvas,
        pickColor: function(position) {
          let image = imageData.slice(position * 4, position * 4 + 3);
          return image;
        }
      };
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
  height: 68px;
  // height: 6.8%;
  // height: calc(100vh - 940px);
  width: 100%;
  background-color: white;
  display: flex;
  align-items: center; //垂直居中  justify-content: center; 水平居中 基于flex
}
.bottoms {
  // height: 81%;
  height: calc(100vh - 192px);
  width: 100%;
  position: relative;
  overflow: auto;
}
.left {
  width: 100%;
  height: 100%;
  position: absolute;
}
.left2 {
  width: 100%;
  height: 100%;
  position: absolute;
  // background-image: url(../../assets/image/map.png);
  // background-size: 100% 100%;
}
.right {
  height: 49%;
}
.margins {
  margin-left: 20px; // 外边距
}
.draw {
  // width: 1600px;
  // height: 800px;
  width: 100%;
  height: 99%;
  // background-image: url(../../assets/image/map.png);
  // background-size: 100% 100%;
}
</style>
