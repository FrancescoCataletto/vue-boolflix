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
    mockURL: "https://api.themoviedb.org/3/search/",
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

methods:{
  //activeted from mounted: API request
  getAPI(){
    axios.get((this.mockURL + this.selected), {
      params: this.params
    })
    .then(res => {
      if(this.selected === "movie"){
        this.movieArr = res.data.results
      }else if(this.selected === "tv"){
        this.tvArr = res.data.results
      }
    })
    .catch(err =>{
      console.log(err)
    })
  },
  // film o serie tv digitata
  filmTyped(film){
    this.params.query = film
  },
  // valori del menu select
  searchMovie(input){
    if(input === ""){
      input = "multi"
    }
    this.selected = input
    this.getAPI()
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
