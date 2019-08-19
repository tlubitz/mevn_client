<template>
  <div>
    <nav>
      <router-link to="/">
        <img id="nav-logo" src="/static/images/logo.png"></img>
      </router-link>
      <router-link v-for="routes in links" v-bind:key="routes.id" :to="`${routes.page}`">{{ routes.text }}</router-link>
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
	      text: 'GETTING STARTED',
	      page:'/getting_started'
	    },
	    {
	      id: 1,
	      text: 'ONLINE SIMULATOR',
	      page:'/rba_new'
	    },
	    {
	      id: 2,
	      text: 'DOCUMENTATION',
	      page:'/documentation'
	    },
	    {
	      id: 3,
	      text: 'CONTACT',
	      page:'/contact'
	    },
	    {
	      id: 4,
	      text: 'ABOUT',
	      page:'/about'
	    }
	 ]
      }
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav {
  padding: 50px 0 50px 300px;
  text-align:left;
}

nav > a {
  font-family: 'Lexend Deca', sans-serif;
  color: #2D2D2D;
  font-size: 16px;
  padding: 10px;
}

#nav-logo {
  height: 50px;
}

</style>
