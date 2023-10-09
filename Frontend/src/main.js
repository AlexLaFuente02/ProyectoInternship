import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import router from "./router";

import { createApp } from "vue";
import App from "./App.vue";

createApp(App).use(router).mount("#app");