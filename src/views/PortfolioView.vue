<template>
  <div class="section">
    <div class="block">
      <router-link to="/" class="button">Back</router-link>
    </div>
    <ProjectItem
      v-for="(item, index) in projectList"
      :key="index"
      :header="item.header"
      :description="item.description"
      :githubLink="item.githubLink"
      :hasImage="item.hasImage"
      :hasGit="item.hasGit"
      :route="item.route"
    />
  </div>
</template>

<script>
import ProjectItem from "/src/components/ProjectItemComponent.vue";

export default {
  components: { ProjectItem },
  setup() {
    var lorem =
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa ea aperiam doloremque animi harum? Enim, magni. Non nihil ex voluptas?";
    var dunetext =
      "An informative and responive websiste for the 2021 film, Dune.\n- Desktop and Mobile interfaces using modern design principles\n- Design logic can also be applied to comapny product listings\n- Transitions and animations applied to UI objects\n\nVue.js, Custom SASS, Bulma, Routers, Responsive Design";
    var porttext =
      "What you're looking at right now. My most elegant personal webiste yet.\n- Built to look good on mobile and on desktop\n- Modern UI principles\n- Custom Javascript\n\nVue.js, UI, Photoshop, XD, Bulma, Custom SASS, Routers, Responsive Design";
    var andtext =
      "An Android application that allows users to stream music from a local server, similar to Spotify.\n- Server stores and API and all data associated with  a database of songs\n- Client can connect to the Server and use the retreived data to render UI elements\n- Client streams music through an API call to the server\n- Material Design\n\nJava, Server to Client communication, Custom API, Asyncronous Threading, Proxy Communication";
    var suptext =
      "A functional GUI application to query a SQL database of Superheroes.\n- The application builds a database using MySQL.\n- User can run queries on this database by selecting the corresponding button and the results will be displayed within the GUI.\n- .NET backend\n\n GUI, C#, MySQL, and .NET.";
    const projectList = [
      {
        header: "Dune Information Website",
        description: dunetext,
        githubLink: "https://github.com/MoraOgunro/dune2",
        hasImage: true,
        hasGit: true,
        route: "/portfolio/dune",
      },
      {
        header: "Android Music Streaming App",
        description: andtext,
        githubLink: "https://github.com/MoraOgunro/MusicPlayer2.0",
        hasImage: false,
        hasGit: true,
        route: "/",
      },
      {
        header: "Personal Website",
        description: porttext,
        githubLink: "https://github.com/MoraOgunro/personal_website_dev",
        hasImage: false,
        hasGit: true,
        route: "/",
      },
      {
        header: "Superhero Database",
        description: suptext,
        githubLink: "https://github.com/MoraOgunro/Superhero-Database",
        hasImage: false,
        hasGit: true,
        route: "/",
      },
    ];
    return {
      projectList,
      lorem,
    };
  },
};
</script>
