import "./css/global.sass";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import ProjectPageSlot from "/src/UI/ProjectPageSlot.vue";

const app = createApp(App).use(router);

app.component("ProjectPageSlot", ProjectPageSlot);
app.mount("#app");
