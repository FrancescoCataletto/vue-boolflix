<template>
  <header class="d-flex justify-content-between align-items-center">
      <div>
          <img src="https://pngimg.com/uploads/netflix/netflix_PNG32.png" alt="">
      </div>
      <div class="d-flex">
          <input class="form-control" type="text" v-model="movie">
          <button class="btn btn-primary" @click="$emit('click', movie)">SEARCH</button>
      </div>
  </header>
</template>

<script>
export default {
    name: "HeaderComponent",

    data(){
        return{
            movie: ""
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