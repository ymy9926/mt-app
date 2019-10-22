<template>
  <div class="m-province">
    <h3>请选择省份：</h3>
    <div class="choose">
      <el-select v-model="pvalue" placeholder="省份">
        <el-option v-for="item in province" :key="item.id" :label="item.name" :value="item.id"></el-option>
      </el-select>
      <el-select v-model="cvalue" placeholder="城市">
        <el-option v-for="item in city" :key="item.id" :label="item.name" :value="item.id"></el-option>
      </el-select>
    </div>
    <h3>直接搜索：</h3>
    <el-autocomplete
      v-model="input"
      :fetch-suggestions="querySearchAsync"
      placeholder="请输入内容"
      @select="handleSelect"
    ></el-autocomplete>
  </div>
</template>

<script type="text/ecmascript-6">
import axios from "axios";
import _ from "lodash";
export default {
  data() {
    return {
      province: [],
      pvalue: "",
      city: [],
      cvalue: "",
      input: "",
      cities: []
    };
  },
  watch: {
    pvalue(newPvalue) {
      let self = this;
      self.cvalue = "";
      axios
        .get(`/geo/province/${newPvalue}`)
        .then(({ status, data: { city } }) => {
          self.city = city || [];
        });
    }
  },
  mounted() {
    axios.get("/geo/province").then(({ status, data }) => {
      this.province = data.province;
    });
  },
  methods: {
    querySearchAsync: _.debounce(function(query, cb) {
      let self = this;
      if (self.cities.length) {
        cb(
          self.cities.filter(item => {
            return item.value.indexOf(query) > -1;
          })
        );
      } else {
        axios.get("/geo/city").then(({ status, data: { city } }) => {
          if (status === 200) {
            self.cities = city.map(item => {
              return { value: item.name };
            });
            console.log(self.cities);
            cb(
              self.cities.filter(item => {
                return item.value.indexOf(query) > -1;
              })
            );
          } else {
            self.cities = [];
          }
        });
      }
    }),
    handleSelect() {}
  },
  components: {}
};
</script>

<style scoped lang="stylus">
.m-province {
  h3 {
    width: 100px;
    display: inline-block;
  }

  .choose {
    display: inline-block;
    margin-right: 40px;

    .el-select {
      width: 150px;
      margin: 0 5px;
    }
  }

  .el-autocomplete {
    display: inline-block;
    width: 280px;
  }
}
</style>
