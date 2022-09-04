<template>
  <div class="has-background-primary has-text-white">
    <h1>Home</h1>
    <Nuxt-link :to="{ name: 'about' }">About</Nuxt-link>
    <button @click="$toast('This is info alert')" class="button is-info">show alert</button>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
