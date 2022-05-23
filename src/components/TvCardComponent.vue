<template>
    <div class="card">
      <div class="card-body">
          <h5>TITLE:</h5>
          <h6></h6>
          <p>LANGUAGE:</p>
          <p>RATING:</p>
      </div>
    </div>
</template>

<script>

export default {
    name: "TVCardComponent"
}
</script>

<style lang="scss" scoped>
@import "../assets/global.scss";

#card-container{
    width: 100%;
    height: 100%;
}

.card{
    width: 20%;
    height: 200px;
}

</style>