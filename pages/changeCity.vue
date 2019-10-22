<template>
  <div class="m-changecity">
    <div class="province">
      <province></province>
    </div>
    <split/>
    <div class="hotcity">
      <hot-city/>
    </div>
    <split/>
    <div class="categary">
      <category/>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Split from "~/components/public/split.vue";
import Province from "~/components/public/changeCity/province.vue";
import HotCity from "~/components/public/changeCity/hotCity.vue";
import Category from "~/components/public/changeCity/category.vue";
export default {
  data() {
    return {};
  },
  components: {
    Province,
    Split,
    HotCity,
    Category
  }
};
</script>

<style scoped lang="stylus">
.m-changecity {
  width: 1160px;
  margin: 15px auto;
  padding: 15px;
  border: 1px solid #E5E5E5;
  background: #fff;
  border-radius: 4px;
}
</style>
