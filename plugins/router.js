export default ({ app, _store }) => {
  app.router.beforeEach((_to, _from, next) => {
    next();
  });
};
