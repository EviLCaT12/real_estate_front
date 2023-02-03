<template>
  <NavRieltor></NavRieltor>
  <div class="forms">
    <ObjectsFormAdd/>
  </div>

</template>

<script>
import ObjectsFormAdd from "@/components/UI/ObjectsFormAdd.vue";
import navRieltor from "@/components/UI/NavRieltor";

export default {
  name: "ObjectsPage",
  components: {navRieltor,ObjectsFormAdd},
  data() {
    return {
    }
  },
  methods: {
  },

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