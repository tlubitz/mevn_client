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
	    <div class="message">
	      <p>
	        {{ message }}
	      </p>
	    </div>
	  </form>
        </div>
      </p>

      <p class="p-custom">
        Alternatively, choose a model from the <router-link to="/downloads" v-slot="{ href, route, navigate, isActive, isExactActive }"> <NavLink :active="isActive" :href="href" @click="navigate">Downloads page</NavLink></router-link>.
      </p>

      <!--
      <div v-for="(post,index) in posts" v-bind:key="index">
        <p class="p-custom">
          <span><b>{{ post.title }}</b></span><br />
          <span>{{ post.description }}</span>
        </p>
      </div>-->
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
      message:""
    }
  },
  /*mounted () {
    this.getPosts()
  },*/
  methods: {
    onSelect(){
      const file = this.$refs.file.files[0];
      this.file = file;
    },
    async onSubmit(){
      const formData = new FormData();
      formData.append('file', this.file);
      try {
        await axios.post('/upload',formData);
	this.message = 'Uploaded, man, youre rad!';
      }
      catch(err){
	this.message = err.response.data.error;
      }
    }
    /*async getPosts () {
      const response = await RbaNewService.fetchPosts()
      this.posts = response.data
    }*/
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
    
</style>