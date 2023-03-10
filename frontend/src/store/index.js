import { createStore } from 'vuex'

export default createStore({
  strict: true,
  state: {
    login: false,
    users: [],
    reservationsSent: false,
  },
  getters: {
    getLoginState(state) {
      return state.login
    }
  },
  mutations: {
    reservationFormChange(state, payLoad) {
      state.reservationsSent = payLoad;
    },
    addUser(state, user) {
      state.users.push(user)
      localStorage.setItem('usersList', JSON.stringify(state.users))
    }
  },
  actions: {
    reservationFormChange(context,payLoad) {
      context.commit('reservationFormChange', payLoad);
    },
    addUser(context, payload) {
      context.commit('addUser', payload)
    }
  },
  modules: {
  }
})
