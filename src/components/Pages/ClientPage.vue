<template>
<NavRieltor></NavRieltor>
<ClientsTable/>
</template>

<script>
import ClientsTable from "@/components/ClientsTable";
import NavRieltor from "@/components/UI/NavRieltor";
export default {
  name: "ClientPage",
  components: {
    ClientsTable,
    NavRieltor

  }
}
</script>

<style scoped>

</style>