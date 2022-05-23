<template>
  <div>
    <!-- takes emit from header component -->
    <HeaderComponent @change="searchMovie"
                     @type="filmTyped"/>

    <MainComponent :movieArr="movieArr"/>

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
    //params go into the API request: server side does the computation
    selected: "",
    params: {
      query: "",
      api_key: "dcc94704b9ae6a8949ee1cf936124c9f",
      language: "it_IT"
    },
    movieArr: []
  }
},

methods:{
  //activeted from mounted: API request
  getAPI(){
    axios.get((this.mockURL + this.selected), {
      params: this.params
    })
    .then(res => {
      this.movieArr = res.data.results
      console.log(res)
      console.log(this.movieArr)
    })
    .catch(err =>{
      console.log(err)
    })
  },

  filmTyped(film){
    this.params.query = film
  },
  //function that get triggered when the search button in the header is clicked: make the query param equal to the "input" text in the header component
  searchMovie(input){
    if(input === "all"){
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
