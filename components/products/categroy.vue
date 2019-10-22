<template>
  <div class="categroy">
    <dl class="cate">
      <dt>
        <span>分类</span>
      </dt>
      <dt class="all">
        <a href="javascript:void(0)">
          <span>全部</span>
        </a>
      </dt>
      <dd>
        <div class="item" v-for="(item,key) in types">
          <iselect :name="item.type" :list="item.module"/>
        </div>
      </dd>
    </dl>
    <split :sstyle="{margin:'10px 0',marginLeft:'160px'}"/>
    <dl class="area">
      <dt>
        <span class="title">分类</span>
      </dt>
      <dt class="all">
        <a href="javascript:void(0)">
          <span>全部</span>
        </a>
      </dt>
      <dd>
        <div class="item" v-for="(item,key) in areas">
          <iselect :name="item.type" :list="item.module"/>
        </div>
      </dd>
    </dl>
  </div>
</template>

<script type="text/ecmascript-6">
import Split from "~/components/public/split.vue";
import Iselect from "~/components/products/iselect.vue";
export default {
  data() {
    return {};
  },
  props: {
    types: {
      type: Array,
      default() {
        return [];
      }
    },
    areas: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: { Split, Iselect }
};
</script>

<style scoped lang="stylus">
.categroy {
  background: #fff;
  padding: 15px;
  border: 1px solid #E5E5E5;
  border-radius: 4px;
  color: #666;

  dl {
    display: flex;

    dd {
      flex: 1;
      font-size: 0;

      .item {
        display: inline-block;
        min-width: 120px;
        line-height: 24px;
        height: 24px;
        font-size: 0;
        cursor: pointer;
        padding-right: 5px;
      }
    }

    dt {
      flex: 0 0 80px;
      width: 80px;
      line-height: 24px;
      height: 24px;
      font-size: 14px;

      a {
        display: inline-block;
        background: #13D1BE;
        color: #fff;
        padding: 0 10px;
        border-radius: 16px;
      }
    }
  }
}
</style>
