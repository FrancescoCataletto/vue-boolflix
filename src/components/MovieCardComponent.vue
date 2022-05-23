<template>
    <div class="card">
      <div class="card-body">
          <h5>TITLE: {{singleMovieCard.title}}</h5>
          <h6>{{singleMovieCard.original_title}}</h6>
          <p>LANGUAGE: {{singleMovieCard.original_language}}</p>
          <p>RATING: {{singleMovieCard.vote_average}}</p>
      </div>
      <div id="immagine">
          IMMAGINE
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
    width: calc(20% - 20px);
    height: 200px;
    margin: 10px;
}

.card-body{
    position: relative;
}

.card:hover .card-body{
    display: none;
}

#immagine{
    position: absolute;
    background-color: aquamarine;
    width: 100%;
    height: 100%;
    display: none;
}

.card:hover #immagine{
    display: block;
}
</style>