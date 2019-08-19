<template>
  <div>
    <nav>
      <router-link to="/">Index</router-link>
      <router-link to="/getting_started">Getting Started</router-link>
      <router-link to="/rba_new">Online Simulator</router-link>
      <router-link to="/documentation">Documentation</router-link>
      <router-link to="/contact">Contact</router-link>
      <router-link to="/about">About</router-link>
    </nav> 
  </div>
</template>

<script>
export default {
  name: 'Navigation',
    data() {
    return {
      links: [
        {
          id: 0,
          text: 'Index',
          page:'/'
        },
        {
          id: 1,
          text: 'Getting Started',
          page:'/getting_started'
        },
        {
          id: 2,
          text: 'Online Simulator',
          page:'/rba_new'
        },
        {
          id: 3,
          text: 'Documentation',
          page:'/documentation'
        },
        {
          id: 4,
          text: 'Contact',
          page:'/contact'
        },
        {
          id: 5,
          text: 'About',
          page:'/about'
        }
   ]}
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
