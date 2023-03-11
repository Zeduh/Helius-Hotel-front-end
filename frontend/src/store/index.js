import { createStore } from 'vuex'

export default createStore({
  strict: true,
  state: {
    login: false,
    users: [],
    reservationsSent: true,
  },
  getters: {
    getLoginState(state) {
      return state.login
    }
  },
  mutations: {
    initializeStore(state) {
      localStorage.getItem("usersList") ? state.users = JSON.parse(localStorage.getItem("usersList")) : null
    },
    reservationFormChange(state, payLoad) {
      state.reservationsSent = payLoad;
    },
    addUser(state, user) {
      state.users.push(user)
      localStorage.setItem("usersList", JSON.stringify(state.users))
    }
  },
  actions: {
    initializeStore(context) {
      context.commit("initializeStore")
    },
    reservationFormChange(context,payLoad) {
      context.commit('reservationFormChange', payLoad);
    },
    addUser(context, payload) {
      context.commit("addUser", payload)
    }
  },
  modules: {
  }
})
