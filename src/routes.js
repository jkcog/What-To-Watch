import Home from './components/Home.vue';
import Movie from './components/Movie.vue';

export default [
  { path: '/', component: Home },
  { path: '/movie/:id', component: Movie },
];
