<template>
  <div class="hello">
    <div class="background-image darken-overlay">
      <div></div>
    </div>

    <div class="cover-header">
      <h0>{{ msg }}</h0>

    
      <p class="p-custom">
        TODO: Make a pretty list of downloads.  
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Downloads',
  data () {
    return {
      msg: 'Downloads',
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
