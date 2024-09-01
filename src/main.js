import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import '@fortawesome/fontawesome-free/css/all.css' // Ensure your project is capable of handling css files
import { aliases, fa } from 'vuetify/iconsets/fa'
export default createVuetify({
  icons: {
    defaultSet: 'fa',
    aliases,
    sets: {
      fa,
    },
  },
})
const vuetify = createVuetify({
  components,
  directives,
});

createApp(App).use(vuetify).use(router).mount("#app");
