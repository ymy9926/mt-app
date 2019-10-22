<template>
  <div class="split" :style="sstyle"></div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {};
  },
  props: {
    sstyle: {
      type: Object,
      default: {
        margin: "30px 0"
      }
    }
  },
  components: {}
};
</script>

<style scoped lang="stylus">
.split {
  height: 1px;
  border-top: 1px solid #E5E5E5;
}
</style>
