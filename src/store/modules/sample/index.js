import { Types } from "./mutation-type.js";

const state = () => ({
  token: null || localStorage.getItem("token"),
  checklistDetail: null,
});

const mutations = {
  [Types.SET_TOKEN](state, payload) {
    state.token = payload;
  },
  [Types.SET_DETAIL_CHECKLIST](state, payload) {
    state.checklistDetail = payload;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
};
