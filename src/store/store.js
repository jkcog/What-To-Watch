import axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);

const apiEndpoint = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.VUE_APP_API_KEY}
&language=en-US&include_adult=false&include_video=false&page=1&external_source=imdb_id&sort_by=popularity.desc`;



const store = new Vuex.Store({
  state: {
    movies: [],
  },
  getters: {},
  mutations: {
    setMovies(state, payload) {
      console.log('payload: ', payload);
      state.movies = payload;
      console.log('store state: ', state.movies);
    },
  },
  actions: {
    fetchMovies: (context) => {
      axios.get(apiEndpoint)
        .then((response) => {
          context.commit('setMovies', response.data.results);
        });
    },
  },
});


export default store;

