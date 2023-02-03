<template>
  <profile-page></profile-page>
</template>

<script>
import ProfilePage from "@/components/Pages/ProfilePage";




export default {
  name: 'App',
  components: {
    ProfilePage,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>