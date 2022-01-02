<template>
  <div class="block">
    <div class="item-container">
      <div class="item-rectangle"></div>
      <div class="item-content">
        <div class="header">{{ header }}</div>
        <div class="description">
          {{ description }}
        </div>
        <a
          v-if="hasGit"
          class="button gitlink"
          :href="githubLink"
          target="_blank"
          >GitHub</a
        >
        <router-link v-if="hasImage" class="button imagelink" :to="route"
          >Project Page</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    header: String,
    description: String,
    githubLink: String,
    hasImage: Boolean,
    hasGit: Boolean,
    route: String,
  },
  setup(props) {
    return {
      props,
    };
  },
};
</script>

<style lang="sass">
.item-container
  display: flex
.item-rectangle
  flex-shrink: 0
  flex-grow: 0
  width: 0.5rem
  height: inherit
  background-color: $white
  margin-right: 1rem
.gitlink
  color: grey
  font-weight: 500
  margin-right: 1rem
.imagelink
  font-weight: 500
  color: $red
.button:active, .button:hover
  background-color: $red
  color: $white
  border-color: $red
.header
  font-size: 1.2rem
  font-weight: 800
  color: $green
.description
  white-space: pre-wrap
  margin-top: 1rem
  margin-bottom: 1rem
  color: $white
</style>
