<template>
  <div id="col">
    <div :key="ind+'g'" v-for="(col, ind) in colArray" id="ver">
      <div 
      :style="`background-color: ${getCol(ind, i)}`" 
      v-for="i in col" 
      :key="i+'c'" 
      id="hor"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      colArray: [],
      cols: {
        red: true,
        green: true,
        blue: false
      }
    };
  },
  created() {
      console.log(this.getCol(10,20))
    let temp = [];
    for (let i = 0; i < 256; i++) {
      temp.push(i);
    }
    for (let i = 0; i < 256; i++) {
      this.colArray.push(temp);
    }
  },
  methods: {
    getCol(y, x) {
      let colArr;
      if (this.cols.red) {
        if (this.cols.green) {
          colArr = [y, x, 0];
        } else {
          colArr = [y, 0, x];
        }
      } else {
        colArr = [0, y, x];
      }
      return `rgb(${colArr.join(",")})`;
    }
  }
};
</script>
<style lang="scss" scoped>
div#hor {
  width:  0.390624%;
  height: 23px;
  display: inline-block;
  background-color: red;
}
</style>
