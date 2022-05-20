<template>
  <main class="container">

      <MovieCardComponent />

  </main>
</template>

<script>
import MovieCardComponent from './MovieCardComponent.vue';
export default {
    name: "MainComponent",
    components: { MovieCardComponent }
}
</script>

<style lang="scss" scoped>
@import "../assets/global.scss";

</style>