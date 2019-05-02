<template>
  <div>
    <h1>{{progData.name}}</h1>
    <div id="progress" :class="status">
      <div
        :style="{width: width+ '%'}"
        :class="status"
      >{{this.progData.amount}}/{{this.progData.limit}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    progData: {
      type: Object
    }
  },
  computed: {
    width() {
      return (this.progData.amount / this.progData.limit) * 100;
    },
    status() {
      return this.width > 55 ? (this.width > 85 ? "bad" : "okay") : "good";
    }
  }
};
</script>
<style lang="scss" scoped>
h1 {
  text-align: center;
}
#progress {
  width: 80%;
  text-align: center;
  background-color: rgb(248, 248, 248);
  border-radius: 5px;
  margin: 0 auto;
  box-sizing: border-box;
  transition: box-shadow 0.5s;
  border: thin solid lightgrey;
  div {
    transition: width 0.5s, background-color 0.5s;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  &.good {
    // border: thin solid darkgreen;
    box-shadow: inset 1px 0px 2px 1px rgba(50, 255, 50, 0.541);
  }
  &.okay {
    // border: thin solid darkorange;
    box-shadow: inset 1px 0px 2px 1px rgba(255, 170, 66, 0.541);
  }
  &.bad {
    // border: thin solid darkred;
    box-shadow: inset 1px 0px 2px 1px rgba(255, 64, 64, 0.541);
  }
}
.good {
  background-color: lightgreen;
}
.okay {
  background-color: yellow;
}
.bad {
  background-color: red;
}
</style>

