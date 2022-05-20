<template>
  <div>
    
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
    params: {
      query: "",
      api_key: "dcc94704b9ae6a8949ee1cf936124c9f",
      language: "it_IT"
    }
  }
},

methods:{
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

  searchMovie(input){
    this.query = input
    console.log(this.query)
  }
},

mounted(){
  // this.getAPI()
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
