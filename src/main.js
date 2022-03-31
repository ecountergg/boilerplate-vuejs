import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// Utils
import { registerModules } from "plugins/register-modules";
import modules from "plugins/list-module";

// Plugins
import { api } from "repositories/repository.js";

registerModules(modules);
Vue.config.productionTip = false;
Vue.prototype.$api = api;

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
