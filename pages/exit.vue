<template>
  <div class="m-exit"></div>
</template>

<script type="text/ecmascript-6">
import axios from "axios";
import { async } from "q";
export default {
  layout: "blank",
  data() {
    return {};
  },
  middleware: async ctx => {
    let { status, data } = await axios.get("/users/exit");
    if (status == 200 && data && data.code === 0) {
      window.location.href = "/";
    } else {
      console.log(status);
      console.log(data);
    }
  },
  components: {}
};
</script>

<style scoped lang="stylus"></style>
