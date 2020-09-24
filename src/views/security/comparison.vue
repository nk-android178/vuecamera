#人脸比对
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
      <div class="margins">
        <el-button type="primary" @click.native="getdata()">确定</el-button>
      </div>
    </div>
    <div class="bottoms">
      <div class="left">
        <person-list></person-list>
      </div>
      <div class="right">
        <el-table
          :data="tableData"
          style="width: 100%"
          max-height="90%"
          height="900"
          :header-cell-style="{ background: '#eef1f6', color: '#606266' }"
        >
          <el-table-column
            prop="index"
            label="序号"
            align="center"
            min-width="1"
          >
          </el-table-column>
          <el-table-column
            prop="time"
            label="时间"
            align="center"
            min-width="1"
          >
          </el-table-column>
          <el-table-column
            prop="camera"
            label="摄像头"
            align="center"
            min-width="1"
          >
          </el-table-column>
          <el-table-column
            fixed="right"
            label="更多"
            align="center"
            min-width="1"
          >
            <template slot-scope="scope">
              <el-button
                @click.native.prevent="deleteRow(scope.$index, tableData)"
                type="text"
                size="small"
              >
                查看视频
              </el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="pagination">
          <el-pagination
            background
            @current-change="handleCurrentChange"
            :page-size="100"
            layout="prev, pager, next, jumper"
            :total="1000"
          >
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import PersonList from "../../components/personList";
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
      tableData: [
        {
          index: "1",
          time: "2020-09-22 13:12:12",
          camera: "摄像头1"
        },
        {
          index: "2",
          time: "2020-09-23 13:12:12",
          camera: "摄像头2"
        },
        {
          index: "3",
          time: "2020-09-24 13:12:12",
          camera: "摄像头3"
        },
        {
          index: "4",
          time: "2020-09-25 13:12:12",
          camera: "摄像头4"
        }
      ],
      value: "", // 类型值
      pageNo: 0 // 页码
    };
  },
  components: {
    PersonList
  },
  methods: {
    getdata() {
      // this.$store.commit("changtraTime", this.value1);
    },
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
    handleCurrentChange(val) {
      this.pageNo = val;
      // this.getDataList(val);
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
  display: flex;
  // overflow: auto;
}
.left {
  flex: 2;
  height: 97.8%;
}
.right {
  flex: 8;
  height: 97.8%;
  padding-left: 10px;
  padding-right: 10px;
  background-color: white;
}
.margins {
  margin-left: 20px; // 外边距
}
.pagination {
  text-align: right;
  padding-right: 10px;
  padding-bottom: 20px;
  height: 80px;
}
</style>
