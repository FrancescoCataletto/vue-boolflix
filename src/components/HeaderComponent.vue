<template>
  <header class="d-flex justify-content-between align-items-center">
      <div>
          <img src="https://pngimg.com/uploads/netflix/netflix_PNG32.png" alt="Logo Netflix">
      </div>
      <div class="d-flex">
          <input class="form-control" type="text" @change="$emit('type', movie)" v-model="movie">
          <select name="" id="" @change="$emit('change', value)" v-model="value">
              <option value="" selected>ALL</option>
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
            value: ""
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