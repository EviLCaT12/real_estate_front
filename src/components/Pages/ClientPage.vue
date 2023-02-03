<template>
<NavRieltor ></NavRieltor>
  <clients-table v-for="client in user.clients" :key="client" :client="client"></clients-table>
</template>

<script>
import ClientsTable from "@/components/ClientsTable";
import NavRieltor from "@/components/UI/NavRieltor";
import axios from "axios";
export default {
  name: "ClientPage",
  components: {
    ClientsTable,
    NavRieltor,
  },
  data() {
    return {
      user: {},
    }
  },
  methods: {
    async getCurrentUser() {
      axios.get('http://95.154.68.102/api/users/me/', {
        token: this.token
      }).then((res) => {
        this.user = res.data
        console.log(this.user.id)
      })
    },
  },
  mounted() {
    this.getCurrentUser()
  }
}
</script>

<style scoped>

</style>