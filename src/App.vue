<template>
  <div>
    <!-- takes emit from header component -->
    <HeaderComponent @change="assegnaTipo"
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
    selected: "all",
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
    this.searchMovie()
    console.log(this.params.query)
  },

  assegnaTipo(input){
    this.selected = input
    this.searchMovie()
  },
  // valori del menu select
  searchMovie(){
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
  // popular movies shown by default at mounted
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
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Lato&family=Montserrat:wght@100;400&family=Roboto&family=Rubik+Mono+One&display=swap');

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Bebas Neue';
}
</style>
