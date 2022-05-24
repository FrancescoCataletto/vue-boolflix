<template>
    <div class="card">
      <div class="card-body">
          <h5>TITLE: {{singleTvCard.name}}</h5>
          <h6>{{singleTvCard.original_name}}</h6>
          <p>LANGUAGE: <flag :iso="singleTvCard.original_language"/></p>
          <p>RATING: <star-rating :rating="stelle" :star-style="starStyle"></star-rating></p>
      </div>
      <div id="immagine">
          <img v-if="(singleTvCard.poster_path || singleTvCard.backdrop_path)" :src="`https://image.tmdb.org/t/p/w342/${singleTvCard.poster_path || singleTvCard.backdrop_path}`" alt="">
          <img v-else src="https://upload.wikimedia.org/wikipedia/commons/a/a6/No_picture_available_png.png" alt="">
      </div>
    </div>
</template>

<script>

export default {
    name: "TVCardComponent",
    data(){
        return{
            stelle: (this.singleTvCard.vote_average / 2),
            rating: "",
            starStyle: {
            fullStarColor: '#ed8a19',
            emptyStarColor: '#737373',
            starWidth: 30,
            starHeight: 30
            }
        }
    },
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