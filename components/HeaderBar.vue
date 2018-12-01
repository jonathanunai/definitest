<template>
  <div class="header-bar">
    <img src="~assets/img/logo.png" alt="">
  </div>

</template>

<script>
  export default {
    components: {
    },
    props: ["title"]
  }
</script>

<style scoped>
  .header-bar {
    width: 100%;
    text-align: center;
    padding: 4px;
  }
  h3 {
    font-family: Bangers;
    font-size: 45px;
    color: #e5e5e5;
  }
  img {
    max-width: 80%;
  }

</style>

