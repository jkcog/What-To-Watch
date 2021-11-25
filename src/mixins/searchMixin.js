export default {
  computed: {
    // search filter mixin
    filteredMovies() {
      return this.movies.filter((movie) => movie.original_title.toLowerCase()
        .match(this.searchQuery.toLowerCase()));
    },
  },
};
