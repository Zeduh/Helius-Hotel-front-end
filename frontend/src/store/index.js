import { createStore } from 'vuex'

export default createStore({
  strict: true,
  state: {
    login: false,
    reservationsSent: false,
  },
  getters: {
    getLoginState(state) {
      return state.state.login
    }
  },
  mutations: {
    reservationFormChange(state, payLoad) {
      state.reservationsSent = payLoad;
    }
  },
  actions: {
    reservationFormChange(context,payLoad) {
      context.commit('reservationFormChange', payLoad);
    }
  },
  modules: {
  }
})
