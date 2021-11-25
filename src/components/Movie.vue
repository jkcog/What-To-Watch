<template>
<!-- Individual movie detail page -->
<div class="bg-gray-900">
  <div v-if="movie"
  class="bg-gray-400">
  <!-- movie backdrop -->
    <img class="backdrop-image"
    :src="`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`" />
    <div
    class="info-box">
    <div class="my-auto">
      <!-- movie info -->
    <p>{{ movie.overview }}</p>
    <p class="mt-8 text-xl">{{ movie.vote_average }}/10</p>
    </div>
    <div class="mt-auto mb-1 text-lg">
    <p>{{ movie.release_date }}</p>
    </div>
    </div>
    <div
    class="movie-title">
      <p class="my-auto">{{ movie.title }}</p>
    </div>

  </div>
</div>
</template>

<script>
import movieFetchMixin from '../mixins/movieFetchMixin';

export default {
  data() {
    return {
      id: this.$route.params.id,
      movie: null,
    };
  },
  // mixins for fetching movies from central data store
  mixins: [movieFetchMixin],
  mounted() {
    // If no movie data found in state, redirect to home to fetch data
    if (!this.$store.state.movies.length) {
      this.$router.push({ path: '/' });
    }
    // else select the required movie from the data
    this.movie = this.movies[this.id];
  },
};
</script>

<style>

</style>
