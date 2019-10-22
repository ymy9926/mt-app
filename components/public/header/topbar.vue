<template>
  <el-row :gutter="0" class="m-topbar">
    <el-col :span="5">
      <geo></geo>
    </el-col>
    <el-col :span="6">
      <user></user>
    </el-col>
    <el-col :span="13">
      <my-nav></my-nav>
    </el-col>
  </el-row>
</template>

<script type="text/ecmascript-6">
import Geo from "./geo.vue";
import User from "./user.vue";
import MyNav from "./nav.vue";
export default {
  data() {
    return {};
  },
  components: {
    Geo,
    User,
    MyNav
  }
};
</script>

<style scoped lang="stylus">
.m-topbar {
  width: 1190px;
  margin: 0 auto;
}
</style>
