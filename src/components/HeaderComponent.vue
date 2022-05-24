<template>
  <header class="d-flex justify-content-between align-items-center">
      <div>
          <img src="https://pngimg.com/uploads/netflix/netflix_PNG32.png" alt="Logo Netflix">
      </div>
      <div class="d-flex">
          <input class="form-control" type="text" v-model="movie" @keyup.enter="search()">
          <select name="" id="" @change="$emit('change', value)" v-model="value">
              <option value="all" selected>ALL</option>
              <option value="movie">MOVIE</option>
              <option value="tv">SERIES</option>
          </select>
      </div>
  </header>
</template>

<script>
export default {
    name: "HeaderComponent",

    data(){
        return{
            //input text data, at click get sent to App component
            movie: "",
            value: "all"
        }
    },

    methods:{
        search(){
            console.log("prova")
            this.$emit('type', this.movie)
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../assets/global.scss";
header{
    height: 80px;
    background-color: black;
    img{
        height: 70px;
    }
}

</style>