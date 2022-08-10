<template>
  <main>
    <div id="app">
      <header-bar></header-bar>
      <search-bar></search-bar>
      <shows-list></shows-list>
    </div>
  </main>
</template>

<script>
import HeaderBar from "./components/HeaderBar.vue";
import SearchBar from "./components/SearchBar.vue";
import ShowsList from "./components/ShowsList.vue";

export default {
  name: "App",
  components: {
    HeaderBar,
    SearchBar,
    ShowsList
  },
};
</script>

<style lang="scss">
@import "./assets/scss/app.scss";
</style>
