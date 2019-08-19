<template>
  <div class="hello">
    <div class="background-image darken-overlay">
      <div></div>
    </div>

    <div class="cover-header">
      <h0>{{ msg }}</h0>

      <p class="p-custom">
      Metabolic networks are subject to strict stoichiometric constraints. Metabolomics
      amplifies changes in the proteome, and represents more closely the phenotype of an
      organism. Recent advances enable the production (and computer-readable encoding as
      SBML) of metabolic network models reconstructed from genome sequences, as well as
      experimental measurements of much of the metabolome. There is increasing convergence
      between the number of human metabolites estimated via genomics (∼3000) and the number
      measured experimentally. It is thus both timely, and now possible, to bring these two
      approaches together as an integrated (if distributed) whole to help understand the
      genesis of metabolic biomarkers, the progress of disease, and the modes of action,
      efficacy, off-target effects and toxicity of pharmaceutical drugs.
      </p>


      <p class="p-custom">
      Resource Balance Analysis (RBA) is a computational method for analyses of metabolic
      models. It is based on resource allocation,
      which performs accurate quantitative predictions of whole-cell states (i.e. growth rate,
      metabolic fluxes, abundances of molecular machines including enzymes) across growth conditions.
      If you want to use this neat tool online, please visit our <router-link to="/rba_new" v-slot="{ href, route, navigate, isActive, isExactActive }">
      <NavLink :active="isActive" :href="href" @click="navigate">getting started tutorial</NavLink></router-link>.
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
    h0 {
      font-size: 80px;
    }
       
    .darken-overlay div {
	height: 800px;
	width:100%;
	background-color: rgba(0, 0, 0, 0.8);
    }

    .background-image {
	background: url("/static/images/RBA_scheme_biological-1.png");
	height: 800px;
	width:100%;
	position:absolute;
	z-index:-1;
	background-size:cover;
    }

    .cover-header {
        font-family: 'Lexend Deca', sans-serif;
	padding: 200px 0 0 300px;
	text-align:left;
	position:absolute;
	color: white;
	max-width: 80%;
    }

    .p-custom {
        padding-top:30px;
	font-size: 16px;
    }

    navLink {
        text-decoration:underline;
    }

    navLink:hover {
        background-color: black;
    }
</style>
