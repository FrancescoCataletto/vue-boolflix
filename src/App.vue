<template>
  <div>
    <!-- takes emit from header component -->
    <HeaderComponent @change="searchMovie"
                     @type="filmTyped"/>

    <MainComponent :movieArr="movieArr"
                   :tvArr="tvArr"/>

  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';
import axios from "axios";

export default {
  name: 'App',
  components: {
    HeaderComponent,
    MainComponent
},

data(){
  return{
    movieUrl: "https://api.themoviedb.org/3/search/movie/",
    tvUrl: "https://api.themoviedb.org/3/search/tv/",
    popularMoviesUrl: "https://api.themoviedb.org/3/movie/popular/",
    // valore del menu select
    selected: "",
    //params go into the API request: server side does the computation
    params: {
      query: "",
      api_key: "dcc94704b9ae6a8949ee1cf936124c9f",
      language: "it_IT"
    },
    movieArr: [],
    tvArr: []
  }
},

mounted(){
  this.popularApi()
},

methods:{
  // MOVIE API CALL
  getMovieApi(){
    axios.get((this.movieUrl),{
      params: this.params
    })
    .then(res => {
      this.movieArr = res.data.results
    })
  },
  // TV SERIES API CALL
  getTvApi(){
    axios.get((this.tvUrl),{
      params: this.params
    })
    .then(res => {
      this.tvArr = res.data.results
    })
  },
  // film o serie tv digitata
  filmTyped(film){
    this.params.query = film
  },
  // valori del menu select
  searchMovie(input){
    this.selected = input
    if(this.selected === "movie"){
      this.tvArr = []
      this.getMovieApi()
    }else if(this.selected === "tv"){
      this.movieArr = []
      this.getTvApi()
    }else if(this.selected === "all"){
      this.getTvApi()
      this.getMovieApi()
    }
    
  },
  popularApi(){
    axios.get((this.popularMoviesUrl),{
      params: this.params
    })
    .then(res => {
      this.movieArr = res.data.results
    })
  }
}
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
