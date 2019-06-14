<template>
  <div>
    <slot></slot>  
    <h1>You may view your details here</h1>
    <p>Many details</p>
    <p>user name: {{name}}</p>
    <button @click="resetName">reset name</button>
  </div>
</template>
<script>
import { vBus } from '../main.js'

export default {
  props: {
    name: { types: ["String"] }
  },
  methods: {
    resetName() {
      vBus.changeName("gala");
      this.$emit("edited", this.name);
    }
  },
  created() {
    vBus.$on("nameChange", name => {
      this.name = name;
    });
  }
};
</script>

<style lang="scss" scoped>
div {
  display: inline-block;
  min-height: 200px;
  background-color: lightblue;
  padding: 15px;
  border: none;
  border-radius: 5px;
  box-shadow: 1px 1px 5px darkblue;
  width: 38%;
  margin: 5px;
}
button {
  border: none;
  background-color: blue;
  color: white;
  padding: 5px;
  border-radius: 3px;
  &:hover {
    background-color: darkblue;
    cursor: pointer;
  }
}
</style>

