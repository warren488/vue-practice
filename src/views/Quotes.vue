<template>
  <div id="Quotes">
    <progress-component :progData="progression"></progress-component>
    <!-- <button @click="addStuff">add stuff</button>
    <button @click="removeStuff">remove stuff</button>-->
    <div id="text">
      <h2>Quote</h2>
      <textarea @keydown.ctrl.enter="addQuote" ref="quote" id="quote" cols="30" rows="10"></textarea>
    </div>
    <component @delete="removeQuote" :is="quoteDisplay" :quotes="quotes"></component>
    <!-- <color-picker></color-picker> -->
  </div>
</template>
<script>
import ProgressComponent from "../components/progress.vue";
import quoteDisplay from "../components/quoteDisplay.vue";
import colorPicker from '../components/colorPicker.vue';
export default {
  components: {
    ProgressComponent,
    colorPicker
  },
  data() {
    let __this = this
    
    return {
      progression: {
        name: "Stuff",
        limit: 40,
        amount: 0
      },
      quotes: [],
      quoteDisplay
    };
  },
  methods: {
    addQuote() {
      this.progression.amount = this.quotes.push(this.$refs.quote.value);
      this.$refs.quote.value = ''
    },
    removeQuote(index) {
      this.quotes.splice(index, 1);
      this.progression.amount--;
    }
  }
};
</script>
<style lang="scss" scoped>
textarea {
  display: block;
  margin: 0 auto;
  width: 100%;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 5px;
}
#text {
  margin: 0 auto;
  width: 40%;
}
#Quotes {
  box-sizing: border-box;
  color: gray;
  width: 100%;
  padding: 10px;
}
</style>
