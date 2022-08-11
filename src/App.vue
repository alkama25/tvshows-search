<template>
  <main>
    <div id="app">
      <header-bar></header-bar>
      <search-bar @getMovies="getMovies"></search-bar>
      <shows-list :movieListRecords="movieListRecords"></shows-list>
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
    ShowsList,
  },
  data() {
    return {
      movieListRecords: [],
    };
  },
  methods: {
    getMovies(records) {
      this.movieListRecords = records;
    },
  },
};
</script>

<style lang="scss">
@import "./assets/scss/app.scss";
</style>
