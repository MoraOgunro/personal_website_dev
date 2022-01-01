<template>
  <div class="">
    <div class="section">
      <div class="project-name">
        <slot name="header"></slot>
      </div>

      <div class="skills">
        <slot name="skills"></slot>
      </div>
      <div class="">
        <router-link to="/portfolio" class="button">Back</router-link>
      </div>
    </div>

    <div class="section">
      <div class="images">
        <slot name="images"></slot>
      </div>
    </div>

    <div class="section goals-section">
      <div class="content">
        <h1>Goals</h1>
        <p>
          <slot name="goals"></slot>
        </p>
        <h1>Challenges</h1>
        <p>
          <slot name="challenges"></slot>
        </p>
        <h1>Wrap Up</h1>
        <p>
          <slot name="wrap-up"></slot>
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.section
    display: flex
    flex-direction: column
.images
    margin: auto
h1
    color: $white
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

@media screen and (min-width: 1024px)
    .project-name
        font-size: 100px
        .skills
            font-size: 30px
    .goals-section
        width: 50vw
        align-self: center
        margin: auto
</style>
