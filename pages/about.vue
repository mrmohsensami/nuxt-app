<template>
  <div>
    <h1>About</h1>
    <div class="columns">
        <div class="column">aaaaa</div>
        <div class="column">xxxx</div>
    </div>
  </div>
</template>

<script>
export default {
    asyncData(context) {
      console.log(context);
    },
    head: {
        title: 'About Us',
        meta: [
            {
                name: 'description',
                content: 'This meta for about',
                hid: 'description'
            }
        ],
        script: [
            {
                src: '/main.js',
            }
        ],
        // link: [
        //     {
        //         rel: 'stylesheet',
        //         href: 'style.css',
        //     }
        // ]
    }
}
</script>

<style>

</style>