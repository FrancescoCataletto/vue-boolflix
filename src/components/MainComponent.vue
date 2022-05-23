<template>
  <main class="container d-flex flex-wrap justify-content-center">
      <h2>FILMS</h2>
      <MovieCardComponent v-for="(movie, index) in movieArr"
                          :key="`movie${index}`"
                          :singleMovieCard="movie"/>
      <h2>TV SERIES</h2>
      <TvCardComponent v-for="(serie, index) in tvArr"
                          :key="`serie${index}`"
                          :singleTvCard="serie"/>  

  </main>
</template>

<script>
import MovieCardComponent from './MovieCardComponent.vue';
import TvCardComponent from './TvCardComponent.vue';

export default {
    name: "MainComponent",
    components: { MovieCardComponent, TvCardComponent },

    props:{
        movieArr: Array,
        tvArr: Array
    }
}
</script>

<style lang="scss" scoped>
@import "../assets/global.scss";
main{
    background-color: red;
}

h2{
    flex-basis: 100%;
    margin: 20px 0;
}

</style>