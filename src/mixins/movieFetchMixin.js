export default {
  computed: {
    // get movies currently stored in state from central data store
    movies() {
      return this.$store.state.movies;
    },
  },
};
