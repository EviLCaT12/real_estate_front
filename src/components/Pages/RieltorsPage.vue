<template>
  <nav-rieltor></nav-rieltor>
  <div class="content">
    <h3 style="text-align: start; margin-left: 10px"><strong>Ваш риелтор:</strong></h3>
    <RieltorCard/>

  </div>
</template>

<script>
import RieltorCard from "@/components/UI/RieltorCard";
import NavRieltor from "@/components/UI/NavRieltor";
export default {
  name: "RieltorsPage",
  components: {RieltorCard,NavRieltor}
}
</script>

<style scoped>
.content {
  margin-top: 40px;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
}
</style>