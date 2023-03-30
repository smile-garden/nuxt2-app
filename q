[1mdiff --git a/pages/search.vue b/pages/search.vue[m
[1mindex ca897bb..62029a2 100644[m
[1m--- a/pages/search.vue[m
[1m+++ b/pages/search.vue[m
[36m@@ -1,9 +1,18 @@[m
 <template>[m
[31m-  <div>search page</div>[m
[32m+[m[32m  <div>[m
[32m+[m[32m    <ul>[m
[32m+[m[32m      <li>{{ msg }}</li>[m
[32m+[m[32m      <li>{{ oldMsg }}</li>[m
[32m+[m[32m      <li>{{ oldGetStr }}</li>[m
[32m+[m[32m      <li>{{ oldGetStr }}</li>[m
[32m+[m[32m    </ul>[m
[32m+[m[32m    <button @click="changeStr">改变</button>[m
[32m+[m[32m  </div>[m
 </template>[m
 <script>[m
[32m+[m[32mimport { mapState, mapMutations } from 'vuex';[m
[32m+[m
 export default {[m
[31m-  components: {},[m
 [m
   asyncData() {[m
     // console.log('asyncdata');[m
[36m@@ -17,7 +26,21 @@[m [mexport default {[m
     // console.log('fetch');[m
   },[m
 [m
[31m-  computed: {},[m
[32m+[m[32m  computed: {[m
[32m+[m[32m    ...mapState({[m
[32m+[m[32m      msg: state => state.todo.str,[m
[32m+[m[32m    }),[m
[32m+[m[32m    oldMsg() {[m
[32m+[m[32m      return this.$store.state.todo.str;[m
[32m+[m[32m    },[m
[32m+[m[32m    oldGetStr() {[m
[32m+[m[32m      console.log(this.$store.getters)[m
[32m+[m[32m      return this.$store.getters['todo/getStr'];[m
[32m+[m[32m    },[m
[32m+[m[32m    /* ...mapGetters({[m
[32m+[m[32m      getstr: 'todo/getStr',[m
[32m+[m[32m    }) */[m
[32m+[m[32m  },[m
 [m
   beforeCreate() {[m
     // console.log('beforeCreate');[m
[36m@@ -27,6 +50,13 @@[m [mexport default {[m
     // console.log('created');[m
   },[m
 [m
[31m-  methods: {},[m
[32m+[m[32m  methods: {[m
[32m+[m[32m    ...mapMutations({[m
[32m+[m[32m      changeStr: 'todo/changeStr',[m
[32m+[m[32m    }),[m
[32m+[m[32m    /* changeStr() {[m
[32m+[m[32m      this.$store.commit('todo/changeStr');[m
[32m+[m[32m    } */[m
[32m+[m[32m  },[m
 };[m
 </script>[m
