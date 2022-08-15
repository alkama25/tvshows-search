<template>
  <main>
    <div id="app">
      <search-bar @getMovies="getMovies"></search-bar>
      <shows-list :movieListRecords="movieListRecords" :searchTerm="searchTerm" :showLoader="showLoader"></shows-list>
    </div>
  </main>
</template>

<script>
import SearchBar from "./components/SearchBar.vue";
import ShowsList from "./components/ShowsList.vue";

export default {
  name: "App",
  components: {
    SearchBar,
    ShowsList,
  },
  data() {
    return {
      showLoader:false,
      movieListRecords: [],
      searchTerm: "",
    };
  },
  methods: {
    getMovies(records, searchString, loader) {
      this.movieListRecords = records;
      this.searchTerm = searchString;
      this.showLoader = loader;
    },
  },
};
</script>

<style lang="scss">
@import "./assets/scss/app.scss";
</style>
