<template>
  <div class="rba_new">
    <h1>RbaNew</h1>
    This file will list all the rba_new.

    <div v-for="(post,index) in posts" v-bind:key="index">
      <p>
        <span><b>{{ post.title }}</b></span><br />
        <span>{{ post.description }}</span>
      </p>
    </div>
    <router-link		 
    to="/"
    v-slot="{ href, route, navigate, isActive, isExactActive }">
    <NavLink :active="isActive" :href="href" @click="navigate">Back 2 Index</NavLink>
    </router-link>

    <!--<a href="/">click here to go back to index</a>-->
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
