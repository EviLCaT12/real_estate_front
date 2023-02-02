<template>
<div class="rielCard">
  <div class="d-flex align-items-center" id="person">
    <img
        src="https://mdbootstrap.com/img/new/avatars/8.jpg"
        alt=""
        style="width: 67px; height: 67px"
        class="rounded-circle"
    />
    <div class="ms-3">
      <p class="fw-bold mb-1">John Doe</p>
      <p class="text-muted mb-0">john.doe@gmail.com</p>
    </div>
  </div>
  <div>
    <button type="button" class="btn btn-outline-primary" id="outStdBtn">Профиль</button>
    <button type="button" class="btn btn-outline-primary" id="outStdBtn">Подписаться</button>
  </div>
</div>
</template>

<script>
export default {
  name: "RieltorCard"
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