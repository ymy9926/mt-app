<template>
  <div class="products">
    <el-row>
      <el-col :span="24">
        <crumb/>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="19">
        <categroy :types="cate.types" :areas="cate.areas"/>
      </el-col>
      <el-col :span="5">2</el-col>
    </el-row>
  </div>
</template>

<script type="text/ecmascript-6">
import axios from "axios";
import Crumb from "~/components/products/crumb.vue";
import Categroy from "~/components/products/categroy.vue";
export default {
  data() {
    return {
      cate: {}
    };
  },
  mounted() {
    let self = this;
    axios.get("/categroy/crumbs?city=宜昌").then(({ status, data }) => {
      self.cate = data;
    });
  },
  components: {
    Crumb,
    Categroy
  }
};
</script>

<style scoped lang="stylus">
.products {
  width: 1190px;
  margin: 0 auto;
}
</style>
