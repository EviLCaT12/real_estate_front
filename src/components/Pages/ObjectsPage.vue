<template>
  <NavRieltor></NavRieltor>
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
import navRieltor from "@/components/UI/NavRieltor";
import axios from "axios";
export default {
  name: "ObjectsPage",
  components: {navRieltor, ObjectsFormChange, ObjectsFormAdd, ObjectsTable},
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