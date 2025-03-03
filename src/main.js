import { createApp } from "vue";
import App from "./App.vue";
import "./assets/css/style.css";
import "./assets/css/util.css";
import "./assets/js/scripts.js";
import "./assets/fontawesome/all.css";
import router from "./router";

// Import Font Awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons"; // Import semua ikon solid
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import "animate.css";
// Tambahkan semua ikon "solid" ke library
library.add(fas);

const app = createApp(App);
app.use(router);

// Register komponen Font Awesome
app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
