<template>
  <div class="text-gray-800 text-center bg-primary">
    <!-- text input for searching through movie list -->
      <input v-model="searchQuery" class="search-input">
      <!-- movie list -->
    <div v-if="movies.length" class="cards-grid">
      <!-- inividual movie card -->
      <div v-for="movie in filteredMovies" :key="movie.id" class="m-5 pb-2 border-b-2">
        <!-- link to individual movie detail page -->
        <router-link @click.native="scrollToTop" :to="'/movie/' + movies.indexOf(movie)">
        <movie-card :movie="movie" />
        </router-link>
      </div>
    </div>
    <!-- if no movie data found yet -->
    <div v-else class='text-2xl'>
      <h4>Loading Movies...</h4>
    </div>
  </div>
</template>

<script>
import MovieCard from './MovieCard.vue';
import searchMixin from '../mixins/searchMixin';
import movieFetchMixin from '../mixins/movieFetchMixin';

export default {
  components: { MovieCard },
  data() {
    return {
      searchQuery: '',
    };
  },
  methods: {
    // dispatch action to fetch movie data
    getMovies() {
      return this.$store.dispatch('fetchMovies');
    },

    // scroll window to the top of the page on page navigation
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },

  // mixins for search filter and for fetching movies from store
  mixins: [searchMixin, movieFetchMixin],

  mounted() {
    // if no movies stored in state, then fetch movies
    if (!this.movies.length) {
      this.getMovies();
    }
  },
};
</script>

<style></style>
