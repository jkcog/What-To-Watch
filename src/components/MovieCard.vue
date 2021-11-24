<template>
<div class="photo-card">

    <img :src="`https://image.tmdb.org/t/p/original/${movie.poster_path}`" class="movie-poster" />
    <div class="card-rating">
        <p>{{ movie.vote_average }}</p>
    </div>
    <div class="text-white border-2 absolute bottom-0 rounded-r-full m-6 h-4 bg-white
    opacity-50 animate-pulse" :style="width">
    </div>
    <div class="text-white border-2 absolute bottom-0 right-0 m-6 h-4 bg-white
    opacity-50">
    </div>
</div>
</template>

<script>
export default {
  props: ['movie'],
  computed: {
    width() {
      return `width: ${this.movie.vote_average * 10}%`;
    },
  },
};
</script>

<style>

</style>
