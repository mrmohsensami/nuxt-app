<template>
  <div>
    <h1 class="text-4xl text-center">{{ $route.params.id }}</h1>
  </div>
</template>

<script>
export default {
    data() {
        return {
            id: this.$route.params.id
        }
    },
    head() {
        return {
            'title': `post - ${this.id}`
        }
    }
}
</script>

<style>

</style>