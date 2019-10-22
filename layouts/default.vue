<template>
  <el-container class="layout-default">
    <el-header height="197px" :gutter="0">
      <my-header></my-header>
    </el-header>
    <el-main>
      <nuxt/>
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>
<script>
import myHeader from "@/components/public/header/index.vue";
export default {
  components: {
    myHeader
  }
};
</script>
<style lang='stylus'>
body {
  background: #F8F8F8;
}

.el-header {
  color: #999;
  width: 100%;
  font-size: 12px;
  height: 197px;
  padding: 0px;
}

.el-main {
  padding: 0px;
  overflow: visible;
}
</style>
