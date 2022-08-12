<template>
  <header>
    <img src="../assets/icons/action.svg" class="action-icon"/>
    <input
      type="search"
      @blur="fetchMovieList($event.target.value)"
      placeholder="Type and search any TV Show"
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
    };
  },
  methods: {
    async fetchMovieList(searchTerm) {
      try {
        this.movieList = await getMovieList(searchTerm);
        this.$emit("getMovies", this.movieList);
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style></style>
