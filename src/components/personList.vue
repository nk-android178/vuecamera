<template>
  <div class="container">
    <div class="list" v-if="dataList.length > 0">
      <el-card
        class="box-card"
        v-for="(item, index) in dataList"
        :key="item.id"
      >
        <el-row @click.native="getCaremes(item.user_id, index)">
          <div class="items">
            <div class="img">
              <img :src="item.avatar" />
            </div>
            <div class="info">
              <h3>用户{{ item.user_id }}</h3>
              <p>类型：{{ timeFormatChange(item.create_time) }}</p>
            </div>
            <div :class="{ active: active == index }"></div>
          </div>
        </el-row>
      </el-card>
    </div>
    <div class="noList" v-else>
      <div class="tip">没有人员数据.......</div>
    </div>
    <div class="pagination">
      <p>
        共 {{ total }} 条，每页 {{ pageSize }} 条，页码 {{ pageNo }} /{{
          pages
        }}
      </p>
      <div class="page">
        <el-pagination
          @current-change="handleCurrentChange"
          :page-size="pageSize"
          layout="prev, next, jumper"
          :total="total"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import moment from "moment";
export default {
  data() {
    return {
      dataList: [],
      pageSize: 10,
      pageNo: 0,
      total: 0,
      pages: 0,
      userId: 0,
      active: 0,
      traTime: 0
    };
  },
  computed: {
    //当数据变化后才会触发，如果是一样的数据不会触发
    ...mapState({
      traTimes: state => state.traTime
    })
    // traTimes() {
    //   return this.$store.state.traTime
    // }
  },
  watch: {
    // 在监听data和计算属性 数据变化了就会触发
    traTimes() {
      this.getDataList(1);
      this.$forceUpdate();
      console.log(this.$store.state.traTime);
    }
  },
  methods: {
    handleCurrentChange(val) {
      this.pageNo = val;
      this.getDataList(val);
    },
    timeFormatChange(time) {
      return moment(time).format("YYYY-MM-DD HH:mm:ss");
    },
    async getDataList(page = 1) {
      const { data } = await this.$axios.get(
        `https://ftestapi.skyids.com:20000/smart/api/v1/faces?pageNo=${page}&pageSize=${this.pageSize}`
      );
      const { total, page_size, page_num, pages, list } = data.data;
      this.total = total;
      this.pageSize = page_size;
      this.pageNo = page_num;
      this.pages = pages;
      this.dataList = list;
      this.$store.commit("defaultId", this.dataList[0].user_id);
      this.getCaremes(this.dataList[0].user_id, 0);
      console.log("bbb");
    },
    getCaremes(id, index) {
      if (this.userId === id) return;
      this.userId = id;
      this.active = index;
      console.log("aaaa");
      // this.$store.commit("changeUseId", id);
    }
  },
  created() {
    this.getDataList();
  }
};
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  background-color: #dde8f2;
  .list {
    height: calc(100% - 90px);
    overflow: auto;
    .box-card {
      background-color: #fff;
      // margin: 5px 0;
      // margin-right: 10px;
      border: 1px solid rgba(235, 238, 245, 0.22);
      /deep/ .el-card__body {
        display: flex;
        position: relative;
        padding: 0px 0px;
        .img {
          img {
            width: 60px;
            height: 60px;
            border-radius: 10px;
          }
        }
        .info {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          margin-left: 10px;
          color: black;
          cursor: pointer;
          h3 {
            margin-top: 5px;
            font-size: 20px;
          }
          p {
            font-size: 14px;
            padding-bottom: 15px;
          }
        }
        .active {
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          background-color: #0081e452;
        }
      }
    }
  }
  .list::-webkit-scrollbar {
    border-radius: 5px;
    width: 5px;
    background-color: #343c46;
  }
  .list::-webkit-scrollbar-thumb {
    background-color: #838c98;
  }
  .noList {
    height: calc(100% - 120px);
    color: black;
    font-size: 14px;
  }
  .pagination {
    .page {
      text-align: center;
      margin-top: 8px;
      /deep/ .btn-prev,
      /deep/ .btn-next {
        color: black;
        background-color: #0081e4;
        padding: 2px;
        font-size: 12px;
        height: 30px;
        width: 50px;
        margin-right: 15px;
        border-radius: 5px;
      }
      /deep/ .el-icon.el-icon-arrow-left:before {
        content: "上一页";
        color: #fff;
      }
      /deep/ .el-icon.el-icon-arrow-right:before {
        content: "下一页";
        color: #fff;
      }
      /deep/ .el-pagination__jump {
        margin-left: 3px;
        color: black;
        font-size: 15px;
        height: 20px;
        line-height: 20px;
      }
      /deep/ .el-input__inner {
        margin-top: 5px;
        height: 20px;
        width: 40px;
        padding: 0;
        border: none;
        color: #606266;
        // background-color: #343c46;
      }
    }
    p {
      font-size: 15px;
      text-align: center;
      color: black;
      margin-top: 14px;
    }
  }
}
.el-row {
  box-sizing: border-box;
  width: 100%;
}
.items {
  display: flex;
  padding: 5px;
}
</style>
