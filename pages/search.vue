<template>
  <div>
    <ul>
      <li>{{ msg }}</li>
      <li>{{ oldMsg }}</li>
      <li>{{ oldGetStr }}</li>
      <li>{{ getStr }}</li>
    </ul>
    <button @click="changeStr">改变</button>
  </div>
</template>
<script>
import { mapState, mapGetters, mapMutations } from 'vuex';

export default {
  asyncData() {
    // console.log('asyncdata');
  },

  data() {
    return {};
  },

  fetch() {
    // console.log('fetch');
  },

  computed: {
    ...mapState({
      msg: (state) => state.todo.str,
    }),
    oldMsg() {
      return this.$store.state.todo.str;
    },
    oldGetStr() {
      return this.$store.getters['todo/getStr'];
    },
    // ...mapGetters('todo', ['getStr']),
    ...mapGetters({
      getStr: 'todo/getStr',
    }),
  },

  beforeCreate() {
    // console.log('beforeCreate');
  },

  created() {
    // console.log('created');
  },

  methods: {
    /* ...mapMutations({
      changeStr: 'todo/changeStr',
    }), */
    ...mapMutations('todo', ['changeStr']),
    /* changeStr() {
      this.$store.commit('todo/changeStr');
    } */
  },
};
</script>
