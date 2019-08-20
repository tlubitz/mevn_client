<template>
  <div class="hello">
    <div class="background-image darken-overlay">
      <div></div>
    </div>

    <div class="cover-header">
      <h0>{{ msg }}</h0>
 
      <p class="p-custom">
        TODO: Pretty tutorial.  
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      msg: 'Getting Started'
    }
  }
}
</script>

<<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .background-image {
	background: url("/static/images/go.png");
    }

</style>
