import createPersistedState from 'vuex-persistedstate';

export default ({ store }) => {
  window.onNuxtReady(() => {
    createPersistedState({
      storage: localStorage,
      key: 'store',
      paths: ['token2', 'token'],
    })(store);
  });
};
