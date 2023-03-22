import { createStore } from 'vuex'

export default createStore({
  strict: true,
  state: {
    login: false,
    users: [],
    loggedUser: null,
    reservationsSent: false,
  },
  getters: {
    getLoginState(state) {
      return state.login
    },
    getUsers(state) {
      return state.users
    },
    getUsersEmails(state) {
      const emailsList = []

      state.users.length > 0 ? state.users.forEach(user => {
        emailsList.push(user.email)
      }) : null

      return emailsList
    },
    getLoggedUser(state) {
      return state.loggedUser
    }
  },
  mutations: {
    initializeStore(state) {
      localStorage.getItem("usersList") ? state.users = JSON.parse(localStorage.getItem("usersList")) : null
      sessionStorage.getItem("loginState") ? state.login = JSON.parse(sessionStorage.getItem("loginState")) : null
      sessionStorage.getItem("loggedUser") ? state.loggedUser = JSON.parse(sessionStorage.getItem("loggedUser")) : null
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
      sessionStorage.setItem("loginState", JSON.stringify(state.login))
      sessionStorage.setItem("loggedUser", JSON.stringify(state.loggedUser))
    },
    logout(state) {
      state.login = false
      state.loggedUser = null
      sessionStorage.removeItem("loginState")
      sessionStorage.removeItem("loggedItem")
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
    },
    logout(context) {
      context.commit("logout")
    }
  },
  modules: {
  }
})
