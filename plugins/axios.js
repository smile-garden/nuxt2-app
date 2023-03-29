export default ({ $axios, store }) => {
  $axios.onRequest((config) => {
    config.headers.token = encodeURIComponent(store.getters.token);
  });

  $axios.onError((err) => {
    if (err.response.status === 500) {
      redirect('/404');
    }
  });

  $axios.onResponse((res) => {
    return res.data;
  });
};
