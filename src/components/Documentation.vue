<template>
  <div class="hello">
    <div class="background-image darken-overlay">
      <div></div>
    </div>

    <div class="cover-header">
      <h0>{{ msg }}</h0>

      <p class="p-custom">
        Please visit the <a href="/static/files/api/index.html" target="_blank">RBA API</a>.
      </p>
    
      <p class="p-custom">
        TODO: Proper documentation, if required.  
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Documentation',
  data () {
    return {
      msg: 'Documentation',
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .background-image {
	background: url("/static/images/documentation.jpg");
	background-size: cover;
    }

</style>
