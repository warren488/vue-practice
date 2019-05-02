<template>
  <div>
    <h1 ref="header">Nothing touched as yet</h1>
    <view-details :name="'Skizzzle'" @edited="edited()">
      <h3>Parent property: {{myData[0]}}</h3>
    </view-details>
    <edit-details :name="'Skizzzle'" @edited="edited()"> <h3> Parent property: {{myData[1]}} </h3></edit-details>
  </div>
</template>
<script>
import viewDetails from "../components/viewDetails.vue";
import editDetails from "../components/editDetails.vue";
export default {
    data(){
        return {
            myData: ['first', 'second']
        }
    },
  components: {
    viewDetails,
    editDetails
  },
  methods: {
    edited() {
      this.$refs.header.innerHTML = "Something Touched!!!";
    }
  }
};
</script>
<style lang="scss" scoped>
div {
  width: 100%;
  box-sizing: border-box;
  background-color: greenyellow;
  border: solid thin darkgreen;
  padding: 15px;
  padding-top: 70px;
}
</style>
