<template>
  <nav-client/>
  <div class="content">
    <h3 style="text-align: start; margin-left: 10px"><strong>Ваш риелтор:</strong></h3>
    <RieltorCard/>
    <RieltorCardSub/>
    <RieltorCardNone/>

    <h3 style="text-align: start; margin-left: 10px; margin-top: 50px"><strong>Все риелторы:</strong></h3>
    <rieltor-card/>
    <rieltor-card/>
    <rieltor-card/>
    <rieltor-card/>
  </div>
</template>

<script>
import RieltorCard from "@/components/UI/RieltorCard";
import NavClient from "@/components/UI/NavClient";
import RieltorCardSub from "@/components/UI/RieltorCardSub";
import RieltorCardNone from "@/components/UI/RieltorCardNone";
export default {
  name: "RieltorsPage",
  components: {RieltorCardNone, RieltorCardSub, NavClient, RieltorCard}
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