import { createStore } from 'vuex'

export default createStore({
  strict: true,
  state: {
    login: false,
    users: [],
    loggedUser: null,
    reservationsSent: true,
  },
  getters: {
    getLoginState(state) {
      return state.login
    },
    getUsers(state) {
      return state.users
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
    },
    login(state, user) {
      state.login = true
      state.loggedUser = user
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
    },
    login(context, payload) {
      context.commit("login", payload)
    }
  },
  modules: {
  }
})
