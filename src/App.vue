<template>
  <NavLogRegPage></NavLogRegPage>

  <NavClient></NavClient>
  <NavRieltor></NavRieltor>
</template>

<script>
import NavClient from './components/UI/NavClient.vue'
import NavRieltor from './components/UI/NavRieltor.vue'
import NavLogRegPage from './components/UI/NavLogRegPage.vue'



export default {
  name: 'App',
  components: {
    NavClient,
    NavRieltor,
    NavLogRegPage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
