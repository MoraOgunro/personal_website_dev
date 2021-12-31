<template>
  <div class="">
    <div class="section">
      <div class="project-name">Dune Website</div>
      <div class="skills">Vue.js, Vue Router, Javascript, SASS, Bulma</div>
      <div class="">
        <router-link to="/portfolio" class="button">Back</router-link>
      </div>
    </div>

    <div class="section">GOALS</div>
    <div class="section">CHALLENGES</div>
    <div class="section">WRAP UP</div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style scoped lang="sass">
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
  color: $green

@media screen and (min-width: 1000px)
  .project-name
    font-size: 100px
    .skills
      font-size: 30px
</style>
