<template>
  <div class="card">
      <div class="card-body">
          <h5>TITOLO</h5>
          <h6>TITOLO ORIGINALE</h6>
          <p>LINGUA</p>
          <p>VOTO</p>
      </div>
  </div>
</template>

<script>
export default {
    name: "MovieCardComponent"
}
</script>

<style lang="scss" scoped>
@import "../assets/global.scss";

.card{
    width: 20%;
}
</style>