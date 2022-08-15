<template>
  <header>
    <!-- action icon -->
    <img src="../assets/icons/action.svg" class="action-icon" />
    <!-- search input -->
    <input
      type="search"
      placeholder="Type and search any TV Show"
      v-model="searchTerm"
      @keyup.enter="fetchMovieList()"
    />
    <!-- github icon linked to repo -->
    <a target="_blank" href="https://github.com/alkama25/tvshows-search" class="gitLink">
      <img src="../assets/icons/github.svg" alt="github-logo" class="gitIcon" />
    </a>
  </header>
</template>

<script>
import { getMovieList } from "../services/movieListService";
export default {
  data() {
    return {
      movieList: [],
      searchTerm: "",
      loader: false,
    };
  },
  methods: {
    async fetchMovieList() {
      try {
        if (this.searchTerm && this.searchTerm.length >= 2) {
          this.loader = true;
          this.movieList = await getMovieList(this.searchTerm);
          this.loader = false;
          this.$emit("getMovies", this.movieList, this.searchTerm, this.loader);
        }
      } catch (e) {
        console.log(e);
        this.loader = false;
      }
    },
  },
};
</script>

<style></style>
