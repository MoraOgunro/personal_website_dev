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
      >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus,
      officiis sit magni, maxime aspernatur doloremque ullam ut ipsa sequi
      repellat provident similique sed nam culpa quis eos? Accusantium, amet
      possimus.</template
    >
    <template v-slot:challenges
      >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus,
      officiis sit magni, maxime aspernatur doloremque ullam ut ipsa sequi
      repellat provident similique sed nam culpa quis eos? Accusantium, amet
      possimus.</template
    >
    <template v-slot:wrap-up
      >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus,
      officiis sit magni, maxime aspernatur doloremque ullam ut ipsa sequi
      repellat provident similique sed nam culpa quis eos? Accusantium, amet
      possimus.</template
    >
  </ProjectPageSlot>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>
