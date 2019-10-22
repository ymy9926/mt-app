<template>
  <div class="m-menu">
    <dl class="nav">
      <dt>全部分类</dt>
      <dd
        v-for="(item,$index) in $store.state.home.menu"
        :key="$index"
        @mouseenter="mouseenter(item.type)"
        @mouseleave="mouseleave"
      >
        <i :class="item.type"/>
        {{item.name}}
        <span class="arrow"/>
      </dd>
    </dl>
    <div class="detail" v-if="type" @mouseenter="enter" @mouseleave="leave">
      <template v-for="(item,$index) in currentItem.child">
        <h4 :key="$index">{{item.title}}</h4>
        <span v-for="(v,$idx) in item.child">{{v}}</span>
      </template>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      type: "",
      menus: [
        {
          type: "food",
          name: "美食",
          childen: [
            {
              title: "我的美食",
              childen: [
                "我的美食",
                "我的美食",
                "我的美食",
                "我的美食",
                "我的美食",
                "我的美食"
              ]
            }
          ]
        },
        {
          type: "takeout",
          name: "外卖",
          childen: [
            {
              title: "外卖",
              childen: ["美团外卖"]
            }
          ]
        }
      ]
    };
  },
  computed: {
    currentItem() {
      return this.type
        ? this.$store.state.home.menu.filter(item => item.type == this.type)[0]
        : {};
    }
  },
  methods: {
    mouseenter(t) {
      clearTimeout(this._timeout);
      this.type = t;
    },
    mouseleave() {
      let _slef = this;
      this._timeout = setTimeout(() => {
        _slef.type = "";
      }, 200);
    },
    enter() {
      clearTimeout(this._timeout);
    },
    leave() {
      this.type = "";
    }
  },
  components: {}
};
</script>

<style scoped lang="stylus">
</style>
