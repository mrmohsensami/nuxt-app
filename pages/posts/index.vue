<template>
  <div>
    <h1 class="text-4xl text-center">POSTS</h1>
    <hr>
    {{ posts }}
  </div>
</template>

<script>
export default {
  layout: 'posts',
  data: () => ({
    posts : []
  }),
    head: {
      title: 'Posts',
      meta: [
        { 
          hid: 'description', name: 'description', content: 'This is Local Posts meta description'
        },
      ],
      script: [
          {
              src: '/main.js',
          }
      ],
      link: [
          {
              rel: 'stylesheet',
              href: 'style.css',
          }
      ]
    },
    // async created() {
    //   this.posts = await this.$axios.$get('/posts');
    // }
    async fetch() {
      this.posts = await this.$axios.$get('/posts');
    }
}
</script>

<style>

</style>