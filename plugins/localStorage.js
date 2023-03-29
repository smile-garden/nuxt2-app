import createPersistedState from 'vuex-persistedstate';

export default ({ store }) => {
  window.onNuxtReady(async () => {
    await createPersistedState({
      storage: localStorage,
      key: 'store',
      paths: ['token2', 'token'],
    })(store);
  });
};
