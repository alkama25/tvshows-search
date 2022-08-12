<template>
  <header>
    <img src="../assets/icons/action.svg" class="action-icon" />
    <input
      type="search"
      placeholder="Type and search any TV Show"
      v-model="searchTerm"
      @keyup="fetchMovieList($event)"
    />
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
    };
  },
  methods: {
    async fetchMovieList(event) {
      try {
        if (event.keyCode === 13 && this.searchTerm.length >= 2) {
          this.movieList = await getMovieList(this.searchTerm);
          this.$emit("getMovies", this.movieList, this.searchTerm);
        }
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style></style>
