<template>
  <div class="text-gray-800 text-center bg-primary">
      <input v-model="searchQuery" class="search-input">
    <div v-if="movies.length" class="cards-grid">
      <div v-for="movie in filteredMovies" :key="movie.id" class="m-5 pb-2 border-b-2">
        <router-link @click.native="scrollToTop" :to="'/movie/' + movies.indexOf(movie)">
        <movie-card :movie="movie" />
        </router-link>
      </div>
    </div>
    <div v-else>
      <h4>Loading Movies...</h4>
    </div>
  </div>
</template>

<script>
import MovieCard from './MovieCard.vue';

export default {
  components: { MovieCard },
  data() {
    return {
      searchQuery: '',
    };
  },
  computed: {
    movies() {
      return this.$store.state.movies;
    },
    filteredMovies() {
      return this.movies.filter((movie) => movie.original_title.toLowerCase()
        .match(this.searchQuery.toLowerCase()));
    },
  },
  methods: {
    getMovies() {
      return this.$store.dispatch('fetchMovies');
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
  mounted() {
    if (!this.movies.length) {
      this.getMovies();
    }
  },
};
</script>

<style></style>
