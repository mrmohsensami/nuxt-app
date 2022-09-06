<template>
  <div>
    <h2 class="is-size-1">Counter: {{ $store.state.counter.counter }}</h2>
    <button @click="$store.dispatch('counter/increment', 5)" class="button is-primary">increment</button>
    <button @click="$store.dispatch('counter/decrement', 5)" class="button is-success">decrement</button>
  </div>
</template>

<script>
export default {
  middleware: ['auth']
}
</script>

<style>

</style>