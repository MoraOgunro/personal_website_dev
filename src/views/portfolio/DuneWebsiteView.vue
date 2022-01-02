<template>
  <ProjectPageSlot>
    <template v-slot:header>Dune Website</template>
    <template v-slot:skills>
      Vue.js, Vue Router, Javascript, SASS, Bulma
    </template>
    <template v-slot:images>
      <video
        width="720"
        src="../../assets/videos/dune.mp4"
        autoplay
        muted
      ></video>
    </template>
    <template v-slot:goals
      >The purpose of this project was to develop my understanding of Vue, Vue
      routing, components, and css styling. The website serves as an educational
      brocure for the various houses in Frank Herbert's DUNE.</template
    >
    <template v-slot:challenges
      >Getting Vue set up with Sass required me to learn about Webpack, scoped
      styling, and config files. It was also my first time using a router, but
      that was easy to pick up. I did not allow myself to use any css frameworks
      for the homepage. Some styling choices worked on Firefox, but not on
      Chrome.
    </template>
    <template v-slot:wrap-up
      >I developed my skills in Sass and Vue. Through this project, I became
      more confident in my use of flexbox and multi-browser support.
    </template>
  </ProjectPageSlot>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>
