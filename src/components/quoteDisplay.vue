<template>
  <div id="display">
    <div class="quote" @click="sendEvent(i)" :key="i" v-for="(quote, i) in quotes">{{quote}}</div>
  </div>
</template>
<script>
export default {
  props: ["quotes"],
  methods: {
    sendEvent(index) {
      this.$emit("delete", index);
    }
  }
};
</script>
<style lang="scss" scoped>
@mixin quote() {
  border-radius: 5px;
  display: inline-block;
  border: solid 2px lightgray;
  box-sizing: border-box;
  text-align: center;
  padding: 30px 10px;
}
#display {
  width: 100%;
}
@media (max-width: 640px) {
  div.quote {
    @include quote();
    width: 100%;
    margin: 5px auto;
  }
}
@media (min-width: 641px) and (max-width: 800px) {
  div.quote {
    width: 48%;
    @include quote();
    margin: 5px 1%;
  }
}
@media (min-width: 801px) {
  div.quote {
    width: 31.333%;
    @include quote();
    margin: 5px 1%;
  }
}
</style>
