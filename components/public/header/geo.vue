<template>
  <div class="m-geo">
    <i class="el-icon-location"></i>
    {{$store.state.geo.position.city}}
    <nuxt-link class="changeCity" to="/changeCity">切换城市</nuxt-link>[香河 廊坊 天津]
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {};
  },
  components: {}
};
</script>

<style scoped lang="stylus">
.m-geo {
  line-height: 40px;
  height: 40px;
  color: #999;
  font-size: 12px;

  .changeCity {
    background: #F4F4F4;
    border: 1px solid #E5E5E5;
    border-radius: 2px;
    color: #666;
    margin: 0 4px;
    padding: 0 2px;

    &:hover {
      color: #31BBAC;
    }
  }
}
</style>
