<template>
  <div>
    <input type="text" @blur="fetchMovieList($event.target.value)" />
  </div>
</template>

<script>
import { getMovieList } from "../services/movieListService";
export default {
  data() {
    return {
      movieList:[]
    };
  },
  methods: {
    async fetchMovieList(searchTerm) {
      try {
        this.movieList = await getMovieList(searchTerm);
        this.$emit('getMovies',this.movieList)
      } catch (e) {
        console.log(e)
      }
    },
  },
};
</script>

<style></style>
