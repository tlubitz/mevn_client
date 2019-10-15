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

      <h1>Models</h1>
      <ul class="list-group">
        <li class="list-group-item">
	  <h4 class="list-group-item-heading">Bacillus subtilis 168 WT strain</h4>
	  <div class="list-group-item-text">
	    Bacillus subtilis RBA model was generated using the RBApy package
	    (<a href="https://doi.org/10.1016/j.ymben.2019.06.001" target="_blank">Automated generation of bacterial resource allocation models</a>), using manually curated metabolic
	    reconstruction (<a href="https://doi.org/10.1186/1752-0509-2-20" target="_blank">Reconstruction and analysis of the genetic and metabolic regulatory networks of the central metabolism of Bacillus subtilis</a>) and parameters estimated in <a href="https://doi.org/10.1016/j.ymben.2015.10.003" target="_blank">Quantitative prediction of genome-wide resource allocation in bacteria</a>.<br>
	    <b-button variant="secondary">Choose for simulation</b-button>
	  </div>
	</li>
        <li class="list-group-item">
	  <h4 class="list-group-item-heading">Escherichia coli K12 WT strain</h4>
	  <div class="list-group-item-text">
	    The RBA model of Escherichia coli was generated using the RBApy package
	    (<a href="https://doi.org/10.1016/j.ymben.2019.06.001" target="_blank">Automated generation of bacterial resource allocation models</a>) from the iJO1366 metabolic
	    reconstruction (<a href="https://doi.org/10.1038/msb.2011.65" target="_blank">A comprehensive genome‐scale reconstruction of Escherichia coli metabolism</a>) as described in
	    <a href="https://doi.org/10.1016/j.ymben.2019.06.001" target="_blank">Automated generation of bacterial resource allocation models</a>.<br>
	    <b-button variant="secondary">Choose for simulation</b-button>
	  </div>
	</li>
        <li class="list-group-item">
	  <h4 class="list-group-item-heading">Escherichia coli strain fixing CO2</h4>
	  <div class="list-group-item-text">
	    The RBA model of the Escherichia coli CO2-fixing strain was generated using the
	    RBApy package (<a href="https://doi.org/10.1016/j.ymben.2019.06.001" target="_blank">Automated generation of bacterial resource allocation models</a>) from the iJO1366 metabolic
	    reconstruction (<a href="https://doi.org/10.1038/msb.2011.65" target="_blank">A comprehensive genome‐scale reconstruction of Escherichia coli metabolism</a>) as descibed in
	    <a href="https://doi.org/10.1016/j.ymben.2019.06.001" target="_blank">Automated generation of bacterial resource allocation models</a>, by introducing modifications to the
	    wild type as described in <a href="https://doi.org/10.1016/j.cell.2016.05.064" target="_blank">Sugar Synthesis from CO2 in Escherichia coli</a>.<br>
	    <b-button variant="secondary">Choose for simulation</b-button>
	  </div>
	</li>
      </div>

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

    .list-group-item-text {
    	color: black;
    }

    button {
        margin: 20px 0 20px 0;
    }
</style>
