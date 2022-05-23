<template>
    <div class="card">
      <div class="card-body">
          <h5>TITLE: {{singleMovieCard.title}}</h5>
          <h6>{{singleMovieCard.original_title}}</h6>
          <p>LANGUAGE: <flag :iso="singleMovieCard.original_language" /></p>
          <p>RATING: {{singleMovieCard.vote_average}}</p>
      </div>
      <div id="immagine">
          <img :src="`https://image.tmdb.org/t/p/w342/${singleMovieCard.poster_path}`" alt="">
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
    min-width: 300px;
    height: 400px;
    margin: 10px;
}

.card-body{
    position: relative;
    width: 342px;
    height: 400px;
}

.card:hover .card-body{
    display: block;
}

#immagine{
    position: absolute;
    width: 100%;
    height: 100%;
    display: block;
}

#immagine img{
    width:100%;
    height: 100%;
}

.card:hover #immagine{
    display: none;
}
</style>