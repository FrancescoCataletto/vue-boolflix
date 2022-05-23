<template>
    <div class="card">
      <div class="card-body">
          <h5>TITLE: {{singleTvCard.name}}</h5>
          <h6>{{singleTvCard.original_name}}</h6>
          <p>LANGUAGE: {{singleTvCard.original_language}}</p>
          <p>RATING: {{singleTvCard.vote_average}}</p>
      </div>
    </div>
</template>

<script>

export default {
    name: "TVCardComponent",

    props:{
        singleTvCard: Object
    }
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