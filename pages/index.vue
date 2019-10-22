<template>
  <div class="page-index">
    <el-row class="no-full">
      <el-col :span="5">
        <emenu/>
      </el-col>
      <el-col :span="19">
        <life></life>
      </el-col>
    </el-row>
    <el-row class="no-full">
      <el-col :span="24">3</el-col>
    </el-row>
  </div>
</template>

<script>
import Emenu from "~/components/index/meun.vue";
import Life from "~/components/index/life.vue";

export default {
  components: {
    Emenu,
    Life
  }
};
</script>

<style lang="stylus">
@import '../assets/css/index/index.styl';

.page-index {
  .no-full {
    width: 1190px;
    margin: 0 auto;
  }
}
</style>
