import Vue from "vue";
import Vuex from "vuex";

// Modules
import sample from "stores/modules/sample";

// Plugins
import { api } from "repositories/repository.js";

Vue.use(Vuex);
Vuex.Store.prototype.$api = api;

export default new Vuex.Store({
  modules: {
    sample,
  },
});
