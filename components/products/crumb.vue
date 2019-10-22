<template>
  <div class="crumb">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">{{city}}美团</el-breadcrumb-item>
      <el-breadcrumb-item>{{module}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      city: this.$store.state.geo.position.city.replace("市", "")
    };
  },
  props: {
    module: {
      type: String
    }
  },
  components: {}
};
</script>

<style scoped lang="stylus">
.crumb {
  margin: 30px 0;

  .el-breadcrumb {
    .el-breadcrumb__inner {
      &.is-link {
        font-size: 14px;
        font-font-weight: 300;
      }
    }
  }
}
</style>
