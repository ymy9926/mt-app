<template>
  <div class="m-header">
    <el-row class="top-warpper">
      <el-col>
        <top-bar/>
      </el-col>
    </el-row>
    <el-row class="search-warpper">
      <el-col>
        <search-bar></search-bar>
      </el-col>
    </el-row>
  </div>
</template>

<script type="text/ecmascript-6">
import topBar from "./topbar.vue";
import searchBar from "./searchBar.vue";
export default {
  data() {
    return {};
  },
  components: {
    topBar,
    searchBar
  }
};
</script>

<style scoped lang="stylus">
.m-header {
  box-shadow: 0 2px 27px 0 rgba(0, 0, 0, 0.1);

  .top-warpper {
    background: #F8F8F8;
  }

  .search-warpper {
    background: #fff;
  }
}
</style>
