export default ({ app: { router, $cookies }, _store }) => {
  router.beforeEach((to, _from, next) => {
    const token = $cookies.get('token');
    if (!token) {
      if (to.name === 'login') {
        next();
      } else {
        next({
          name: 'login',
          query: {
            redirect: to.fullPath,
          },
        });
      }
    } else {
      next();
    }
  });
};
