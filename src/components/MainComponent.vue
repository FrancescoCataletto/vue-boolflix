<template>
  <main class="container">

      <MovieCardComponent v-for="(movie, index) in movieArr"
                          :key="`movie${index}`"
                          :singleMovieCard="movie"/>

  </main>
</template>

<script>
import MovieCardComponent from './MovieCardComponent.vue';
export default {
    name: "MainComponent",
    components: { MovieCardComponent },

    props:{
        movieArr: Array
    }
}
</script>

<style lang="scss" scoped>
@import "../assets/global.scss";

</style>