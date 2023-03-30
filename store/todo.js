export const state = () => ({
  str: '我是一个字符串',
});

export const getters = {
  getStr(state) {
    return state.str;
  },
};

export const mutations = {
  changeStr(state) {
    state.str = '新的字符串来啦';
  },
};
