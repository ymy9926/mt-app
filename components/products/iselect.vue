<template>
  <div class="iselect">
    <dl class="tab">
      <dt class="title">
        <span class="name">{{name}}</span>
        <i class="el-icon-caret-bottom"/>
      </dt>
      <dd>
        <h3>{{name}}</h3>
        <span v-for="item in list">{{item}}</span>
      </dd>
    </dl>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      isShow: false
    };
  },
  props: {
    name: {
      type: String
    },
    list: {
      type: Array
    }
  },
  methods: {
    enter() {
      this._time = setTimeout(() => {
        this.isShow = true;
      }, 500);
    },
    leave() {
      this._time = setTimeout(() => {
        this.isShow = false;
      }, 500);
    },
    listEnter() {
      if (this._time) {
        clearTimeout(this._time);
      }
    },
    listLeave() {
      this._time = setTimeout(() => {
        this.isShow = false;
      }, 500);
    }
  },
  components: {}
};
</script>

<style scoped lang="stylus">
.iselect {
  min-width: 80px;

  .tab {
    position: relative;

    dt {
      font-size: 0;

      .name, .el-icon-caret-bottom {
        font-size: 14px;
      }
    }

    dd {
      position: absolute;
      top: 24px;
      display: none;
      width: 480px;
      background: #fff;
      border: 1px solid #e5e5e5;
      border-radius: 4px;
      padding: 15px;
      z-index: 999;

      span {
        padding-right: 5px;
      }

      &:before {
        content: ' ';
        position: absolute;
        display: block;
        width: 0;
        height: 0;
        border-color: transparent transparent #E5E5E5;
        border-style: solid;
        border-width: 5px;
        top: -11px;
      }

      &:after {
        content: ' ';
        position: absolute;
        top: -8px;
        left: 16px;
        display: block;
        width: 0;
        height: 0;
        border-color: transparent transparent #fff;
        border-style: solid;
        border-width: 4px;
      }

      h3 {
        font-size: 16px;
        margin-bottom: 15px;
        color: #ccc;
      }

      span {
        display: inline-block;
        font-size: 12px;
        min-width: 110px;
        line-height: 16px;
      }
    }

    &:hover {
      dd {
        display: block;
      }
    }
  }
}
</style>
