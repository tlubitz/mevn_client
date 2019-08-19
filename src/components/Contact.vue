<template>
  <div class="hello">
    <div class="background-image darken-overlay">
      <div></div>
    </div>

    <div class="cover-header">
      <h0>{{ msg }}</h0>

      <p class="p-custom">
        Resource Balance Analysis (RBA) has been developed and implemented by Anne Goelzer, Vincent Fromion,
	and Stephane Fischer at INRA (Institut National de la Recherche Agronomique).
	To learn more about RBA, please have a look at the following articles:
      </p>
     <p class="p-custom">
     <ol>
	<li>A. Goelzer, V. Fromion, G. Scorletti.
	<a href="https://www.sciencedirect.com/science/article/pii/S0005109811001397?via%3Dihub" target="_blank"> Cell design
	in bacteria as a convex optimization problem.</a> Automatica, 47(6):1210-1218 (2011).</li>
        <li>A. Goelzer, V. Fromion.<a href="https://www.sciencedirect.com/science/article/pii/S0304416511001267?via%3Dihub" target="_blank">
	Bacterial growth rate reflects a bottleneck in resource allocation.</a> BBA General Subjects, 1810(10):978-88 (2011).</li>
        <li>A. Goelzer, J. Muntel, V. Chubukov, M. Jules, E. Prestel, R. Nolker, M. Mariadassou, S. Aymerich,
	M. Hecker, P. Noirot, D. Becher, V. Fromion.<a href="https://www.sciencedirect.com/science/article/pii/S1096717615001317" target="_blank">
	Quantitative prediction of genome-wide resource allocation in bacteria.</a> Metabolic Engineering , 32: 232-243 (2015).</li>
	<li>A. Goelzer, V. Fromion.<a href="http://www.biochemsoctrans.org/content/early/2017/07/05/BST20160436" target="_blank">
	Resource allocation in living organisms.</a> Biochemical Society Transactions, BST20160436 (2017).</li>
	<li>Bulović A., Fischer S., Dinh M., Golib F., Liebermeister W., Poirier C., Tournier L., Klipp E., Fromion V., Goelzer A.
	<a href="https://www.sciencedirect.com/science/article/pii/S1096717619300" target="_blank">Automated generation of bacterial
	resource allocation models.</a> Metabolic Engineering 55 (2019) 12–22 (2019) </li>
      </ol>
     <p class="p-custom">
       <strong>Contact</strong><br>
       For questions or feedback regarding the RBA modelling pipeline, please contact Anne Goelzer
       (anne.goelzer AT <a href="http://www.inra.fr/" target="_blank">inra.fr</a>)
     </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data () {
    return {
      msg: 'Contact',
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
	background: url("/static/images/inra.jpg");
	height: 800px;
	width:100%;
	position:absolute;
	z-index:-1;
	background-size:cover;
    }

    .cover-header {
        font-family: 'Lexend Deca', sans-serif;
	padding: 100px 0 0 300px;
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
