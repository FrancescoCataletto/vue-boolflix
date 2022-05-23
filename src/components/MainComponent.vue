<template>
  <main class="container d-flex flex-wrap">

      <MovieCardComponent v-for="(movie, index) in movieArr"
                          :key="`movie${index}`"
                          :singleMovieCard="movie"/>

      <TvCardComponent />  

  </main>
</template>

<script>
import MovieCardComponent from './MovieCardComponent.vue';
import TvCardComponent from './TvCardComponent.vue';

export default {
    name: "MainComponent",
    components: { MovieCardComponent, TvCardComponent },

    props:{
        movieArr: Array
    }
}
</script>

<style lang="scss" scoped>
@import "../assets/global.scss";
main{
    background-color: red;
    height: calc(100vh - 80px);
}

</style>