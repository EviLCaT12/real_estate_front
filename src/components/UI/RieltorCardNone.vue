<template>
  <div class="rielCard">
    <h3 style="margin: 30px; margin-left: auto; margin-right: auto"><strong>У вас ещё нет ни одного риелтора</strong></h3>
  </div>
</template>

<script>
export default {
  name: "RieltorCardNone"
}
</script>

<style scoped>
.rielCard {
  margin-left: auto;
  margin-right: auto;
  background: #FFFFFF;
  border: 1px solid #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 22px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
#person {
  margin: 5px;
}
#outStdBtn {
  margin: 20px;
  width: 150px;
}

</style>