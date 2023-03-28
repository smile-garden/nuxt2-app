export default function ({ store, redirect }) {
  const { token } = store.getters;
  if (!token) {
    redirect('/login');
  }
}
