<template>
  <section class="hero is-fullheight">
    <!-- Hero head: will stick at the top -->
    <div class="hero-head"></div>

    <!-- Hero content: will be in the middle -->
    <div class="hero-body">
      <div class="introduction">
        <div class="subtitle">Hi, I'm</div>
        <div class="title">MORA</div>
        <div class="subtitle sof">SOFTARE AND WEB DEVELOPER</div>
      </div>

      <div class="links">
        <p><router-link to="/portfolio">Portfolio</router-link></p>
        <a href="https://www.linkedin.com/in/mora-ogunro/">LinkedIn</a>
        <a href="https://github.com/MoraOgunro">Github</a>
      </div>
    </div>
    <!-- Hero footer: will stick at the bottom -->
    <div class="hero-foot has-text-centered">
      <p>Last updated December 2021</p>
    </div>
  </section>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  setup() {
    var burgerClass = ref({
      "is-active": false,
    });

    return {
      burgerClass,
    };
  },
};
</script>
<style lang="sass">
$background-color: #FFFFFF
.hero
  background-color: $background-color
  color: black
  background: url('/src/assets/bg.png')
  background-size: cover
  background-repeat: no-repeat
  background-origin: center
.hero-body
  flex-direction: column
  justify-content: center
.introduction
  display: flex
  flex-direction: column
  margin-bottom: 3rem
.title
  font-size: min(25vw,200px)
  font-weight: 800
  color: black
.subtitle
  font-size: min(4vw,30px)
  font-weight: 500
.sof
  text-align: center
.links
  font-size: min(10vw,60px)
  font-weight: 600
  text-align: center
  display: flex
  flex-direction: column
a
  color: black
  &:hover
    color: #0085FF
@media screen and (min-width: 870px)
  .links
    flex-direction: row
    column-gap: 5rem
</style>
