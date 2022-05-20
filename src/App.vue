<template>
  <div>
    <!-- takes emit from header component -->
    <HeaderComponent @click="searchMovie"/>

    <MainComponent />

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
    mockURL: "https://api.themoviedb.org/3/search/movie",
    //params go into the API request: server side does the computation
    params: {
      query: "",
      api_key: "dcc94704b9ae6a8949ee1cf936124c9f",
      language: "it_IT"
    }
  }
},

methods:{
  //activeted from mounted: API request
  getAPI(){
    axios.get(this.mockURL, {
      params: this.params
    })
    .then(res => {
      console.log(res.data.results)
    })
    .catch(err =>{
      console.log(err)
    })
  },

  //function that get triggered when the search button in the header is clicked: make the query param equal to the "input" text in the header component
  searchMovie(input){
    this.params.query = input
    this.getAPI()
    console.log(this.params.query)
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
