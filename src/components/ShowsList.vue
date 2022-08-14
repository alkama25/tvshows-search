<template>
  <section class="main-section">
    <h1 v-if="searchTerm === ''">Discover TV Shows and search by name</h1>
    <div class="grid-container" v-if="moviesToShow.length">
      <div v-for="movie in moviesToShow" :key="movie.show.id" class="grid-item">
        <a :href="movie.show.officialSite" target="blank">
          <img :src="movie.show.image.original" />
        </a>

        <p>{{ movie.show.name }}, {{ movie.show.language }}</p>
      </div>
    </div>
    <h1 v-if="searchTerm.length && moviesToShow.length === 0" ref="no-results">
      No results found. Please try again
    </h1>
    <button
      type="button"
      @click="moviesVisible += count"
      v-if="moviesVisible < movieListRecords.length"
    >
      Load more...
    </button>
  </section>
</template>

<script>
export default {
  props: {
    searchTerm: {
      type: String,
    },
    movieListRecords: {
      type: Array,
    },
  },
  data() {
    return {
      moviesVisible: 12,
      count: 12,
    };
  },
  computed: {
    moviesToShow() {
      return this.movieListRecords.slice(0, this.moviesVisible);
    },
  },
};
</script>
