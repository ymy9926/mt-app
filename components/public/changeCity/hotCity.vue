<template>
  <div class="hot-city">
    <dl>
      <dt>热门城市：</dt>
      <dd v-for="(item,key) in cities" :key="key">
        <a :href="item.name">{{item.name}}</a>
      </dd>
    </dl>
  </div>
</template>

<script type="text/ecmascript-6">
import axios from "axios";
export default {
  data() {
    return {
      cities: []
    };
  },
  mounted() {
    let self = this;
    axios.get("/geo/hotCity").then(({ status, data: { hots } }) => {
      self.cities = hots;
    });
  },
  components: {}
};
</script>

<style scoped lang="stylus">
.hot-city {
  dt, dd {
    display: inline-block;
    color: #606266;
  }

  dt {
    width: 100px;
    font-size: 16px;
  }

  dd {
    width: 80px;

    a {
      color: #606266;
    }
  }
}
</style>
