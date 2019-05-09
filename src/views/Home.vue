<template>
  <div class="app">
    <nav>
      <h1>Welcome Home</h1>
      <router-link tag="a" :to="{path: '/passing'}">Passing</router-link>
      <router-link tag="a" :to="{path: '/quotes'}">Quotes</router-link>
      <router-link tag="a" :to="{path: '/app'}">app</router-link>
      <router-link tag="a" :to="{path: '/special/things', params: {stuff: 'my stuff'} }">special</router-link>
    </nav>
    <div id="app-body">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
nav {
  position: fixed;
  top: 0px;
  left: 0px;
  text-align: center;
}

#app-body {
  margin-top: 100px;
}
</style>
