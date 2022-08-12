<template>
  <section class="grid-container" v-if="movieListRecords.length">
    <div v-for="movie in movieListRecords" :key="movie.show.id" class="grid-item">
      <a :href="movie.show.officialSite" target="blank">
        <img :src="movie.show.image.original" />
      </a>

      <p>{{ movie.show.name }}, {{ movie.show.language }}</p>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    movieListRecords: {
      type: Array,
    },
  },
};
</script>

<style></style>
