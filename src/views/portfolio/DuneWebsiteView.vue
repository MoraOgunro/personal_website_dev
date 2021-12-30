<template>
  <div class="background has-text-white">
    <div class="section">
      <div class="project-name">Dune Website</div>
      <div class="skills">Vue.js, HTML, Javascript, SASS, Bulma</div>
      <div class="">
        <router-link to="/portfolio" class="button">Back</router-link>
      </div>
    </div>
    <img :src="image" alt="" />
  </div>
</template>

<script>
export default {
  setup() {
    var image = require("@/assets/images/DUNE2Image.png");
    return {
      image,
    };
  },
};
</script>

<style scoped lang="sass">
.background
  background-color: black
  height: 100%
img
  width: 100%
  height: fit-content
.project-name
  font-weight: 800
  font-size: max(10vw,2rem)
.skills
  font-size: max(3vw,1rem)
  font-weight: 500
  margin-bottom: 1rem

@media screen and (min-width: 1000px)
  .project-name
    font-size: 100px
    .skills
      font-size: 30px
</style>
