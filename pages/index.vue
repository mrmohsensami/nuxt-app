<template>
  <div class="has-background-primary has-text-white">
    <h1>Home</h1>
    <Nuxt-link :to="{ name: 'about' }">About</Nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>
