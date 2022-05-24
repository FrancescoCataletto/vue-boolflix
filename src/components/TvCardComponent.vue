<template>
    <div class="card">
      <div class="card-body">
          <h5>TITLE: {{singleTvCard.name}}</h5>
          <h6>{{singleTvCard.original_name}}</h6>
          <p>LANGUAGE: <flag :iso="singleTvCard.original_language"/></p>
          <p>RATING: {{singleTvCard.vote_average}}</p>
      </div>
      <div id="immagine">
          <img :src="`https://image.tmdb.org/t/p/w342/${singleTvCard.poster_path}`" alt="">
      </div>
    </div>
</template>

<script>

export default {
    name: "TVCardComponent",

    props:{
        singleTvCard: Object
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
    cursor: pointer;
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