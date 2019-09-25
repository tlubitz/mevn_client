<template>
  <div class="hello">
    <div class="background-image darken-overlay">
      <div></div>
    </div>

    <div class="cover-header">
      <h0>{{ msg }}</h0>

      <p class="p-custom">
        The <a href="https://github.com/SysBioInra/Bacterial-RBA-models" target="_blank">models compliant for RBA online simulator</a> can be
	found in the Github Repository. As soon as I know more about the model structure, (which files are required, are they uploaded as
	zip?, etc), I can also list them here to make them directly available for online simulation.
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
