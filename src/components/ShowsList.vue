<template>
  <section>
    <h1 v-if="searchTerm === ''">Discover TV Shows and search by name</h1>
    <div class="grid-container" v-if="movieListRecords.length > 0">
      <div v-for="movie in movieListRecords" :key="movie.show.id" class="grid-item">
        <a :href="movie.show.officialSite" target="blank">
          <img :src="movie.show.image.original" />
        </a>

        <p>{{ movie.show.name }}, {{ movie.show.language }}</p>
      </div>
    </div>
    <h1 v-if="searchTerm.length && movieListRecords.length === 0">No results found. Please try again</h1>
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
};
</script>

<style></style>
