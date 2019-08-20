<template>
  <div class="rba-new">
    <div class="cover-header">
      <h0>Online Simulator</h0>
      <p class="p-custom">
        We have a very pretty backend interface in place here for handling
        the Python data structures.
      </p>
    
      <p class="p-custom">
        TODO: File upload, handling, etc.
      </p>
      <!--
      <div v-for="(post,index) in posts" v-bind:key="index">
        <p>
          <span><b>{{ post.title }}</b></span><br />
          <span>{{ post.description }}</span>
        </p>
      </div>-->
    </div>
  </div>
</template>

<script>
import RbaNewService from '@/services/RbaNewService'
export default {
  name: 'posts',
  data () {
    return {
      posts: []
    }
  },
  mounted () {
    this.getPosts()
  },
  methods: {
    async getPosts () {
      const response = await RbaNewService.fetchPosts()
      this.posts = response.data
    }
  }
}
</script>

<style scoped>
    .p-custom {
	color: black;
    }

    .cover-header {
	color: black;
    }
    
</style>