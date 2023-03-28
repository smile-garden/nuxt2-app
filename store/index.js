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
  },
  setToken2(state, token) {
    state.token2 = token;
  },
};

export const actions = {
  nuxtServerInit(store) {
    store.commit('setToken', '更新token333');
    console.log(store, 'nuxtServerInit');
  },
};
