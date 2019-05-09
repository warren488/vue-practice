<template>
  <h1>This is my special route {{stuff}}</h1>
</template>
<script>
export default {
  props: ["stuff"],
  beforeRouteEnter(to, from, next) {
    console.log(from);
    next();
  }
};
</script>
