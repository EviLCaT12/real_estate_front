<template>
  <NavClient/>
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

export default {
  name: "ObjectsPage",
  components: {NavClient, ObjectsFormChange, ObjectsFormAdd, ObjectsTable}
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