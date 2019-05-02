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
      vBus.changeName('gasa')
      this.$emit("edited", this.name);
    }
  },
  created(){
    vBus.$on('nameChange', name =>{
      this.name = name
    })
  }
};
</script>

<style lang="scss" scoped>
div {
  padding: 15px;
  display: inline-block;
  min-height: 200px;
  background-color: lightpink;
  border: thin solid darkred;
  width: 48%;
}
</style>

