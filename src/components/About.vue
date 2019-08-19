<template>
  <div class="hello">
    <div class="background-image darken-overlay">
      <div></div>
    </div>

    <div class="cover-header">
      <h0>{{ msg }}</h0>
      <p class="p-custom">
        What we will need here: GDPR stuff and imprint. Especially GDPR, since imprint stuff is mostly already covered in "Contact".
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      msg: 'About',
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
