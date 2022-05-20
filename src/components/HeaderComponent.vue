<template>
  <header class="d-flex justify-content-between align-items-center">
      <div>
          <img src="https://pngimg.com/uploads/netflix/netflix_PNG32.png" alt="">
      </div>
      <div class="d-flex">
          <input class="form-control" type="text">
          <button class="btn btn-primary">SEARCH</button>
      </div>
  </header>
</template>

<script>
export default {
    name: "HeaderComponent"
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