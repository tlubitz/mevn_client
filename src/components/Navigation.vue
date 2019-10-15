<template>
  <div>
    <nav>
      <div class="container gray highlightTextIn">
        <router-link to="/">
          <img id="nav-logo" src="/static/images/logo.png"></img>
        </router-link>
        <router-link v-for="routes in links" v-bind:key="routes.id" :to="`${routes.page}`" :alt="`${routes.text}`">{{ routes.text }}</router-link>
      </div>
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
	      text: 'DOWNLOADS',
	      page:'/downloads'
	    },
	    {
	      id: 4,
	      text: 'CONTACT',
	      page:'/contact'
	    }
	 ]
      }
   }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav {
  padding: 50px 0 50px 20%;
  text-align:left;
  background-color: lightgrey;
}

nav > div > a {
  font-family: 'Lexend Deca', sans-serif;
  color: #2D2D2D;
  font-size: 16px;
  padding: 10px;
  font-weight:600;
}

#nav-logo {
  height: 50px;
  padding-left:0;
}

div.container {
    margin-left: 0;
    padding-left:0;
}

div.container a
{
    color: #FFF;
    text-decoration: none;
    margin: 0px 10px;
    padding: 10px 10px;
    padding-top: 12px;
    position: relative;
    z-index: 0;
    cursor: pointer;
}

div.highlightTextIn a:before
{
    position: absolute;
    color: #FFF;
    top: 0px;
    left: 0px;
    padding: 10px;
    overflow: hidden;
    content: attr(alt);
    transition: all 0.3s;
    transform: scale(0.8);
    opacity: 0;
} 

div.highlightTextIn a:hover:before
{
    transform: scale(1);
    opacity: 1;
}

/* Highlight text in  */
div.highlightTextIn a
{
    color: rgba(0, 0, 0, 0.4); 
}

div.highlightTextIn a:before
{
    transform: scale(1.2);
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
} 



</style>
