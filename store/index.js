export const state = () => ({
  token: '',
  token2: null,
});

export const getters = {
  getToken(state) {
    return state.token;
  },
  getToken2(state) {
    return state.token2;
  },
};

export const mutations = {
  setToken(state, token) {
    state.token = token;
  },
  setToken2(state, token) {
    state.token2 = token;
  },
};

export const actions = {};
