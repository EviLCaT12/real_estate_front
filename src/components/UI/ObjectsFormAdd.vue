<template>
  <div class="objectsForm">
    <div class="headFormBlue"><h5>Добавить объект</h5></div>
    <form>
      <div>
        <label class="form-label">Город</label>
        <input type="text" class="form-control">
      </div>
      <div>
        <label class="form-label">Улица</label>
        <input type="text" class="form-control">
      </div>

      <div class="row">
        <div class="col-sm">
          <label class="form-label">Номер дома</label>
          <input type="number" class="form-control">
        </div>
        <div class="col-sm">
          <label class="form-label">Номер квартиры</label>
          <input type="number" class="form-control">
        </div>
      </div>

      <div class="row">
        <div class="col-sm">
          <label class="form-label">Этаж</label>
          <input type="number" class="form-control">
        </div>
        <div class="col-sm">
          <label class="form-label">Кол-во комнат</label>
          <input type="number" class="form-control">
        </div>
        <div class="col-sm">
          <label class="form-label">Площадь</label>
          <input type="number" class="form-control">
        </div>
      </div>


      <div class="row">
        <div class="col-sm">
          <label class="form-label">Тип объекта</label>
          <select class="form-select">
            <option selected>One</option>
            <option value="1">Two</option>
            <option value="2">Three</option>
          </select>
        </div>
        <div class="col-sm">
          <label class="form-label">Цена</label>
          <input type="number" class="form-control">
        </div>
      </div>

      <div>
        <label class="form-label">Описание</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      <div class="btnAddImage">
        <button type="button" class="btn btn-outline-primary">Добавить фото</button>
      </div>
      <div class="btnPush">
        <button type="button" class="btn btn-primary">Добавить</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "ObjectsFormAdd"
}
</script>

<style scoped>
.objectsForm {
  max-width: 450px;
  border: 1px solid #000000;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  margin-left: 20px;
  margin-right: 20px;
}
form {
  padding: 20px 40px;
}

.headFormBlue {
  width: 100%;
  height: 40px;
  background-color: #5F77BF;
  border-bottom: 1px solid #000000;
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
  color: white;
  display: flex;
  align-items: center;
}
.headFormBlue h5 {
  margin-left: 20px;
  margin-top: 5px;
}

.btnAddImage {
  display: flex;
  margin-top: 10px;

}
.btnPush {
  margin-top: 30px;
}
.btnPush button {
  width: 150px;
}
</style>