<template>
  <div class="hello">
    <div class="background-image darken-overlay">
      <div></div>
    </div>

    <div class="cover-header">
      <h0>{{ msg }}</h0>

      <p class="p-custom">
        <strong>RBApy</strong> is a Python package that enables creation and simulation of bacterial
	Resource Balance Analysis (RBA) models (<a href="https://doi.org/10.1016/j.ymben.2015.10.003" target="_blank">Goelzer
	et al. Metab. Eng. 2015</a>), and can be interfaced to <a href="https://escher.github.io/" target="_blank">Escher maps
	</a> and <a href="https://www.proteomaps.net/" target="_blank">Proteomaps</a> for visualisation. The inputs needed in
	order to create an RBA model are an annotated metabolic reconstruction in <a href="http://sbml.org/Main_Page" target="_blank">
	Systems Biology Markup Language (SBML)</a> format and an <a href="https://www.uniprot.org/help/organism-name" target="_blank">
	Uniprot organism ID</a>, which is used for automatic download and integration of macromolecular composition
	data into the model. The RBA model accurately captures the macromolecular composition of the cell, and can
	be refined indefinitely by adding cellular process definitions (such as translation, transcription, secretion,
	chaperoning etc.).
      </p>

      <p class="p-custom">
        RBA models have already been developed for:
	<ul>
	  <li> <i>Bacillus subtilis 168 (wild type)</i> </li>
	  <li> <i>Escherichia coli K-12 (wild type)</i> </li>
	  <li> <i>CO2-fixing Escherichia coli K-12 (engineered strain)</i> </li>
	</ul>
	You can access these models here: <a href="https://github.com/SysBioInra/Bacterial-RBA-models">link</a>.
      </p>
      
      <p class="p-custom">
        If you want to use this neat tool online, please visit our <router-link to="/rba_new" v-slot="{ href, route, navigate, isActive, isExactActive }">
        <NavLink :active="isActive" :href="href" @click="navigate">getting started tutorial</NavLink></router-link> or
	dive right into the action with the <router-link to="/rba_new" v-slot="{ href, route, navigate, isActive, isExactActive }">
	<NavLink :active="isActive" :href="href" @click="navigate">online simulator</NavLink></router-link>.
      </p>
    </div>

    </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'RBA Online Simulator',
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    .background-image {
	background: url("/static/images/RBA_scheme_biological-1.png");
	background-size: cover;
    }

</style>
