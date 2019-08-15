<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>I feel I have full control</h2>
    <!--<a href="rba_new">go shere</a><br><br>-->
    <router-link		 
    to="/rba_new"
    v-slot="{ href, route, navigate, isActive, isExactActive }">
    <NavLink :active="isActive" :href="href" @click="navigate">Go here to have control to the fullest</NavLink>
    </router-link>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
