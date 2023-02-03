<template>
  <div v-if="isRealtor"><NavRieltor></NavRieltor></div>
  <div v-else><nav-client></nav-client></div>
  <div class="forms">
    <ObjectsFormAdd/>
    <ObjectsFormChange/>
  </div>
  <ObjectsTable/>

</template>

<script>
import ObjectsTable from "@/components/UI/ObjectsTable.vue";
import ObjectsFormAdd from "@/components/UI/ObjectsFormAdd.vue";
import ObjectsFormChange from "@/components/UI/ObjectsFormChange.vue";
import NavClient from "@/components/UI/NavClient.vue";
import navRieltor from "@/components/UI/NavRieltor";
import axios from "axios";
export default {
  name: "ObjectsPage",
  components: {NavClient, navRieltor, ObjectsFormChange, ObjectsFormAdd, ObjectsTable},
  data() {
    return {
      isRealtor: false
    }
  },
  methods: {
    async checkRealtor() {
      const res = await axios.get('http://95.154.68.102/api/users/me/', {
        token: localStorage.getItem('token')
      })
      this.isRealtor = res.data.is_realtor
      console.log(this.isRealtor)
    }
  },
  mounted() {
    this.checkRealtor()
  }
}
</script>

<style scoped>
.forms {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
}
</style>