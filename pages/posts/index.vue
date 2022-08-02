<template>
  <div>
    <h1 class="text-4xl text-center">POSTS</h1>
    <hr>
  </div>
</template>

<script>
export default {
  layout: 'posts',
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
    }
}
</script>

<style>

</style>