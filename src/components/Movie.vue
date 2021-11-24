<template>
<div class="bg-gray-900">
  <div v-if="movie"
  class="bg-gray-400">
    <img class="backdrop-image"
    :src="`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`" />
    <div
    class="info-box">
    <div class="my-auto">
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
export default {
  data() {
    return {
      id: this.$route.params.id,
      movie: null,
    };
  },
  computed: {
    movies() {
      return this.$store.state.movies;
    },
  },
  mounted() {
    console.log('here are the movies: ', this.$store.state.movies);
    console.log('this.movies: ', this.movies);
    if (!this.$store.state.movies.length) {
      console.log('no movies found');
      this.$router.push({ path: '/' });
    }
    this.movie = this.movies[this.id];
  },
};
</script>

<style>

</style>
