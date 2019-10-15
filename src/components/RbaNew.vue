<template>
  <div class="rba-new">
    <div class="cover-header">
      <h0>Online Simulator</h0>

      <p class="p-custom">
        <div class="file">
          <form @submit.prevent="onSubmit" enctype="multipart/form-data">
	    <div class="fields">
	      <label>Upload file</label><br>
	      <input type="file" ref="file" @change="onSelect"/>
	    </div>
	    <div class="fields">
	      <button>Submit</button>
	    </div>
	   </form>

	    <div v-if="status === 'uploaded'">
	    <p class="p-custom">
		{{ message }}
	    </p>
	    </div>
	    <div v-else-if="status === 'returned'">
    	    <p class="p-custom">
	        The currently loaded model is {{ current_model }}.
	    </p>
	    </div>
	    <div v-else>
	    <p class="p-custom">
	        Alternatively, choose a model from the <router-link to="/downloads" v-slot="{ href, route, navigate, isActive, isExactActive }"> <NavLink :active="isActive" :href="href" @click="navigate">Downloads page</NavLink></router-link>.
	    </p>
	    </div>

        </div>
      </p>

      <p class="p-custom" v-if="status === 'uploaded' || status === 'returned'">
        <b-button v-on:click="simulate()" variant="secondary">Click to Simulate!</b-button>
	<b-button v-on:click="clear()" variant="secondary">Remove model!</b-button>
      </p>
	 
    </div>
  </div>
</template>

<script>
import RbaNewService from '@/services/RbaNewService'
import axios from 'axios'

export default {
  name: 'posts',
  data () {
    return {
      posts: [],
      file:"",
      message:"",
      current_model: '',
      status: ''
    }
  },
  mounted() {
    try {
      this.getFilename();
      }
    catch(err) {
      console.log('ERROR: ',err);
    }
  },
  methods: {
    onSelect(){
      const file = this.$refs.file.files[0];
      this.file = file;
    },
    async clear() {
      try {
         await axios.post('/clear');
	 this.status = '';
	 }
      catch(err) {
         this.message = err.response.data.error;	 
	 }
     },
    async simulate() {
      try {
         await axios.post('/simulate');
	 this.message = "SIMULATE AWAY!! Just kidding, this is not implemented yet."
	 }
      catch(err) {
         this.message = err.response.data.error;	 
	 }
    },
    async onSubmit(){
      const formData = new FormData();
      formData.append('file', this.file);
      try {
        await axios.post('/upload',formData);
	this.message = "Uploaded, man, you're rad! Its name is " + this.file.name + " and it is beautiful.";
	this.status = 'uploaded';
      }
      catch(err){
	this.message = err.response.data.error;
      }
    },
    async getFilename() {
      try {
	   axios.get('/getFilename').then(data => {
	   	this.current_model = data.data;
		this.status = 'returned';
	   })
	   }
      catch(err) {
          this.message = err.response.data.error;
      }
    }
  },
}
</script>

<style scoped>
    .p-custom {
	color: black;
    }

    form {
    padding-left: 7px;
    }
    
    .cover-header {
	color: black;
    }

    .fields {
        margin-bottom:20px;
    }

    h1 {
       margin-bottom:25px;
    }

    input[type=button] {
       color:blue;
    }
    
</style>