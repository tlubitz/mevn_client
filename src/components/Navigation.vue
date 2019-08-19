<template>
  <div>
    <nav>
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
	      text: 'HOME',
	      page:'/'
	    },
	    {
	      id: 1,
	      text: 'GETTING STARTED',
	      page:'/getting_started'
	    },
	    {
	      id: 2,
	      text: 'ONLINE SIMULATOR',
	      page:'/rba_new'
	    },
	    {
	      id: 3,
	      text: 'DOCUMENTATION',
	      page:'/documentation'
	    },
	    {
	      id: 4,
	      text: 'CONTACT',
	      page:'/contact'
	    },
	    {
	      id: 5,
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
nav > a {
  font-family: 'Lexend Deca', sans-serif;
  color: #2D2D2D;
  font-size: 16px;
  padding: 10px;
}

</style>
