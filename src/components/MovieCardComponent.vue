<template>
  <div class="card">
      <div class="card-body">
          <h5>{{singleMovieCard.title}}</h5>
          <h6>{{singleMovieCard.original_title}}</h6>
          <p>{{singleMovieCard.original_language}}</p>
          <p>{{singleMovieCard.vote_average}}</p>
      </div>
  </div>
</template>

<script>
export default {
    name: "MovieCardComponent",

    props:{
        singleMovieCard: Object
    }
}
</script>

<style lang="scss" scoped>
@import "../assets/global.scss";

.card{
    width: 20%;
}
</style>