<template>
  <el-row class="m-header-searchbar">
    <el-col :span="6">
      <div class="img-warpper">
        <a href="/">
          <img src="http://s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png">
        </a>
      </div>
    </el-col>
    <el-col :span="12" class="center">
      <div class="input-warpper">
        <el-input
          v-model="searchText"
          placeholder="搜索商家或地点"
          @focus="focus"
          @blur="blur"
          @input="input"
        ></el-input>
        <el-button type="primary" class="search">
          <i class="el-icon-search"></i>
        </el-button>
        <dl class="hotPlace" v-show="isHotPalce">
          <dt>热门搜索</dt>
          <dd v-for="(item,$index) in hotList" :key="$index">
            <nuxt-link :to="'/products?keyword='+encodeURIComponent(item.name)">{{item.name}}</nuxt-link>
          </dd>
        </dl>
        <dl class="searchList" v-show="isSearchList">
          <dd v-for="(item,$index) in searchList" :key="$index">
            <a :href="'/products?keyword='+encodeURIComponent(item.name)">{{item.name}}</a>
          </dd>
        </dl>
      </div>
      <div class="suggest">
        <nuxt-link
          :to="'/products?keyword='+encodeURIComponent(item.name)"
          v-for="(item,$index) in suggestList"
          :key="$index"
        >{{item.name}}</nuxt-link>
      </div>
      <ul class="nav">
        <li>
          <nuxt-link to="/">美团外卖</nuxt-link>
        </li>
        <li>
          <nuxt-link class="takeout" to="/">美团外卖</nuxt-link>
        </li>
        <li>
          <nuxt-link class="apartment" to="/">美团外卖</nuxt-link>
        </li>
        <li>
          <nuxt-link class="business" to="/">美团外卖</nuxt-link>
        </li>
        <li>
          <nuxt-link class="takeout" to="/">美团外卖</nuxt-link>
        </li>
      </ul>
    </el-col>
    <el-col :span="6">1</el-col>
  </el-row>
</template>

<script type="text/ecmascript-6">
import _ from "lodash";
import axios from "axios";
export default {
  data() {
    return {
      isFocus: false,
      searchText: "",
      hotList: [],
      searchList: [],
      suggestList: []
    };
  },
  computed: {
    isHotPalce() {
      return this.isFocus && !this.searchText;
    },
    isSearchList() {
      return this.isFocus && this.searchText;
    }
  },
  mounted() {
    let self = this;
    let city = self.$store.state.geo.position.city.replace("市", "");
    self.hotList = [];
    axios
      .get("/search/hotPlace", {
        params: {
          city: city
        }
      })
      .then(({ status, data: { result } }) => {
        self.hotList = result.slice(0, 5);
        self.suggestList = result.slice(0, 5);
      });
  },
  methods: {
    focus() {
      this.isFocus = true;
    },
    blur() {
      setTimeout(() => {
        this.isFocus = false;
      }, 200);
    },
    input: _.debounce(function() {
      let self = this;
      let city = self.$store.state.geo.position.city.replace("市", "");
      self.searchList = [];
      axios
        .get("/search/top", {
          params: {
            input: self.searchText,
            city: city
          }
        })
        .then(({ status, data: { top } }) => {
          self.searchList = top;
        });
    }, 300)
  },
  components: {}
};
</script>

<style scoped lang="stylus">
.m-header-searchbar {
  width: 1190px;
  margin: 0 auto;
  height: 157px;
  padding-top: 13px;

  .img-warpper {
    width: 280px;
    padding-top: 15px;

    img {
      width: 126px;
      height: 46px;
    }
  }

  .center {
    position: relative;

    .input-warpper {
      margin-top: 16px;
      border: 1px solid #13D1BE;
      border-radius: 4px;
      width: 552px;
      box-sizing: border-box;
      position: relative;
      white-space: nowrap;
      font-size: 0;

      .el-input {
        width: 462px;
        display: inline-block;

        >>>.el-input__inner {
          border: none !important;
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
        }
      }

      .el-button {
        width: 88px;
        display: inline-block;
        border: none;
        background: #13D1BE;
        font-size: 16px;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        vertical-align: -1px;

        i {
          font-weight: bold;
        }
      }

      .hotPlace, .searchList {
        position: absolute;
        top: 43px;
        left: 0;
        background: #fff;
        padding: 10px;
        font-size: 12px;
        width: 462px;
        box-sizing: border-box;
        border: 1px solid #E5E5E5;
        border-top: none;
        z-index: 999;
        box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;

        dt {
          color: #999;
          font-weight: bold;
        }

        dd {
          display: inline-block;
          color: #666;
          margin-right: 10px;
          margin-bottom: 3px;
          margin-top: 5px;
          cursor: pointer;

          &:hover {
            background: #F8F8F8;
            color: #31BBAC;
          }
        }

        &.searchList {
          padding: 0;
          margin: 0;

          dd {
            margin: 0;
            padding: 3px 10px;
            display: block;
            line-height: 1.6;
          }
        }
      }
    }

    .suggest {
      width: 552px;
      overflow: hidden;
      padding-left: 16px;
      line-height: 1;
      margin-top: 8px;
      height: 14px;

      a {
        color: #999;
        margin-right: 10px;
        margin-bottom: 3px;
        display: inline-block;
        font-size: 12px;

        &:hover {
          color: #31BBAC;
        }
      }
    }

    .nav {
      list-style: none;
      display: flex;
      margin-top: 25px;

      li {
        font-weight: 700;
        font-size: 16px;
        margin: 0 20px;
        cursor: pointer;
        position: relative;

        a {
          color: #222;

          &:hover {
            color: #f04d4e;
          }

          &.takeout:hover {
            color: #fbc700;
          }

          &.apartment:hover {
            color: #FDC411;
          }

          &.business:hover {
            color: #31BBAC;
          }
        }
      }
    }
  }

  .right {
    text-align: right;
    padding-top: 15px;

    .security {
      li {
        display: inline-block;
        text-align: center;
        padding: 0 5px;
      }

      i {
        font-style: normal;

        &:after {
          font-family: iconfont;
          font-size: 36px;
          color: #13D1BE;
        }
      }

      .refund {
        &:after {
          content: '\e65f';
        }
      }

      .single {
        &:after {
          content: '\e652';
        }
      }

      .overdue {
        &:after {
          content: '\e65e';
        }
      }

      .txt {
        color: #999;
        font-size: 12px;
        line-height: 1;
        margin: 0;
        text-align: center;
      }
    }
  }
}

input {
  border: none;
}
</style>
