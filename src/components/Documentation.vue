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
        Here you find access to the <a href="https://github.com/SysBioInra/RBApy" target="_blank">code repository on Github</a>.
      </p>

      <p class="p-custom">
        Also, we have a <a href="https://github.com/SysBioInra/Bacterial-RBA-models" target="_blank">collection of compliant models</a>, which you also directly employ for online simulation on our <router-link to="/downloads" v-slot="{ href, route, navigate, isActive, isExactActive }"> <NavLink :active="isActive" :href="href" @click="navigate">Downloads page</NavLink></router-link>.
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
