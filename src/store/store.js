import axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// url for api get request
const apiEndpoint = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.VUE_APP_API_KEY}
&language=en-US&include_adult=false&include_video=false&page=1&external_source=imdb_id&sort_by=popularity.desc`;

const store = new Vuex.Store({
  state: {
    movies: [],
  },
  mutations: {
    // mutation to commit movie data to state
    setMovies(state, payload) {
      state.movies = payload;
    },
  },
  actions: {
    // action to fetch movie data with axios
    fetchMovies: (context) => {
      axios.get(apiEndpoint)
      // then when process is complete, commit mutation
        .then((response) => {
          context.commit('setMovies', response.data.results);
        });
    },
  },
});

export default store;
