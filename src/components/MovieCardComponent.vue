<template>
    <div class="card">
      <div class="card-body">
          <h5>TITLE: {{singleMovieCard.title}}</h5>
          <h6>{{singleMovieCard.original_title}}</h6>
          <p>LANGUAGE: {{singleMovieCard.original_language}}</p>
          <p>RATING: {{singleMovieCard.vote_average}}</p>
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

#card-container{
    width: 100%;
    height: 100%;
}

.card{
    width: 20%;
    height: 200px;
}

</style>