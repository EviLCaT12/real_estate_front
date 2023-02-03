<template>
  <table class="table table-bordered">
    <thead id="tableHead">
    <tr>
      <th colspan="4">Один из ваших активных клиентов</th>
    </tr>
    </thead>
    <thead>
    <tr>
      <th scope="col">ФИО</th>
      <th scope="col">Телефон</th>
      <th scope="col">Почта</th>
      <th scope="col"></th>
    </tr>
    </thead>

    <tbody>
    <tr>
      <td>{{clientData.username}}</td>
      <td>{{clientData.phone}}</td>
      <td>{{clientData.email}}</td>
      <td>
        <button type="button" class="btn btn-primary" id="stdButton" @click="this.$router.push('/users/' + this.clientData.id)">Профиль</button>
        <button type="button" class="btn btn-danger" id="dngButton">Завершить</button>
      </td>
    </tr>
    </tbody>


  </table>
</template>

<script>
import axios from "axios";
export default {
  name: "ClientsTable",
  props: {
    client: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      clientData: {}
    }
  },
  methods: {
    async getClientData() {
      const res = await axios.get(this.client)
      this.clientData = res.data
    }
  },
  mounted() {
    this.getClientData()
  }
}
</script>

<style scoped>
table {
  background-color: white;
  border-color: #5F77BF;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 12px;
  overflow: hidden;
  margin-top: 40px;
}
#stdButton {
  background-color: #5F77BF;
  margin-right: 5px;
}
#tableHead {
  background-color: #5F77BF;
  color: white;
  text-align: start;
}

#dngButton {
  margin-left: 5px;
}
</style>