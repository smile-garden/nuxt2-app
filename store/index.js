export const state = () => ({
  token: '',
  token2: null,
});

export const getters = {
  token(state) {
    return state.token;
  },
  token2(state) {
    return state.token2;
  },
};

export const mutations = {
  setToken(state, token) {
    state.token = token;
    this.$cookies.set('token', token);
  },
  setToken2(state, token) {
    state.token2 = token;
  },
};

export const actions = {
  nuxtServerInit(store, { app: { $cookies } }) {
    const token = $cookies.get('token') || '';
    store.commit('setToken', token);
  },
  logout({ commit }) {
    return new Promise((resolve) => {
      commit('setToken', '');
      resolve();
    });
  },
};
