<template>
  <div class="category">
    <dl class="py">
      <dt>按拼音首字母选择:</dt>
      <dd v-for="item in list" :key="item">
        <a :href="'#city-'+item">{{item}}</a>
      </dd>
    </dl>
    <dl v-for="p in blocks" :key="p.title" class="categroy-section">
      <dt :id="'city-'+p.title">{{p.title}}</dt>
      <dd>
        <span v-for="(c,k) in p.city" :key="k">{{c}}</span>
      </dd>
    </dl>
  </div>
</template>

<script type="text/ecmascript-6">
import axios from "axios";
import py from "js-pinyin";
export default {
  data() {
    return {
      list: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
      blocks: []
    };
  },
  mounted() {
    let self = this;
    axios.get("/geo/city").then(({ status, data: { city } }) => {
      let p;
      let c;
      let b = {};
      city.forEach(element => {
        p = py
          .getFullChars(element.name)
          .toLocaleLowerCase()
          .slice(0, 1);
        c = p.charCodeAt(0);
        if (c > 96 && c < 123) {
          if (!b[p]) {
            b[p] = [];
          }
          b[p].push(element.name);
        }
      });
      console.log(b);
      let block = [];
      for (let [k, v] of Object.entries(b)) {
        console.log(k);
        block.push({
          title: k.toUpperCase(),
          city: v
        });
      }
      block = block.sort(
        (a, b) => a.title.charCodeAt(0) - b.title.charCodeAt(0)
      );
      console.log(block);
      self.blocks = block;
    });
  },
  components: {}
};
</script>

<style scoped lang="stylus">
.category {
  color: #606266;

  .py {
    display: flex;
    margin-bottom: 30px;

    dt {
      flex: 0 0 160px;
      width: 120px;
      font-size: 16px;
      line-height: 28px;
      height: 28px;
    }

    dd {
      flex: 1;
      font-size: 14px;
      line-height: 28px;
      height: 28px;

      a {
        color: #606266;
      }
    }
  }

  .categroy-section {
    display: flex;
    margin-bottom: 30px;

    dt {
      flex: 0 0 40px;
      width: 40px;
      height: 40px;
      line-height: 40px;
      background: #13D1BE;
      font-size: 16px;
      color: #fff;
      text-align: center;
      vertical-align: middle;
      border-radius: 50%;
    }

    dd {
      flex: 1;

      span {
        display: inline-block;
        height: 40px;
        line-height: 40px;
        padding: 0 15px;
      }
    }
  }
}
</style>
