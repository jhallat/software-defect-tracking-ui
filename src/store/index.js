import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    defects: []
  },
  mutations: {
    addDefect(state, defect) {
      state.defects.push(defect);
    }
  }
});
