<template>
  <section class="main-section">
    <!-- Text to show when user has not entered any search query -->
    <h1 v-if="searchTerm === ''">Discover TV Shows and search by name</h1>
    <!-- grid to render shows -->
    <div class="grid-container" v-if="moviesToShow.length">
      <div v-for="movie in moviesToShow" :key="movie.show.id" class="grid-item">
        <a :href="movie.show.officialSite" target="blank">
          <img :src="movie.show.image.original" />
        </a>

        <p>{{ movie.show.name }}, {{ movie.show.language }}</p>
      </div>
    </div>
    <!-- Text to show when api returns no results -->
    <h1 v-if="searchTerm.length && moviesToShow.length === 0" ref="no-results">
      No results found. Please try again
    </h1>
    <!-- loader till we get response from the api -->
    <div class="loader" v-if="showLoader">
      <img src="../assets/icons/loader.svg" />
    </div>
    <!-- Button to show when array items are greater than 12 -->
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
    showLoader: {
      type: Boolean,
    },
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
    // show only 12 shows initially
    moviesToShow() {
      return this.movieListRecords.slice(0, this.moviesVisible);
    },
  },
};
</script>
