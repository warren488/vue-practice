<template>
  <div class="counter">
      <input v-model="inc" type="number">
    <div class="counter">My Global counter: {{counter}}</div>
    <button @click="increment(inc)">Increment</button>
    <button @click="decrement(inc)">Decrement</button>
  </div>
</template>
<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {
        inc: 0
      //   count: this.$store.state.counter
    };
  },
  methods: {
    ...mapActions(["increment", "decrement"]),
    increment(by) {
        // calling the action
        this.$store.dispatch('increment', parseInt(by))
    },
    decrement(by) {
        // calling the action
        this.$store.dispatch('decrement', parseInt(by))
    }
  },
  computed: {
    counter() {
      return this.$store.getters.doubleCounter;
    }
  }
};
</script>
<style lang="scss" scoped>
 .counter {
     width: auto;
    //  display: inline-block;
 }
</style>
