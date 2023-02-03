<template>
  <div class="objectsForm">
    <div class="headFormBlue"><h5>Добавить объект</h5></div>
    <form>
      <div>
        <label class="form-label">Город</label>
        <input type="text" class="form-control" v-model="obj.city">
      </div>
      <div>
        <label class="form-label">Улица</label>
        <input type="text" class="form-control" v-model="obj.street">
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
          <input type="number" class="form-control" v-model="obj.floor">
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
          <select class="form-select" v-model="obj.advert_type">
            <option selected>Квартира</option>
            <option>Дом</option>
            <option>Земельный участок</option>
          </select>
        </div>
        <div class="col-sm">
          <label class="form-label">Цена</label>
          <input type="number" class="form-control" v-model="obj.price">
        </div>
      </div>

      <div>
        <label class="form-label">Описание</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="obj.description"></textarea>
      </div>
      <form  class="form-file">
        <input type="file" ref="file" id="input__file" class="form-control">
      </form>
      <div class="btnAddImage">
        <button type="button" class="btn btn-outline-primary">Добавить фото</button>
      </div>
      <div class="btnPush">
        <button type="button" class="btn btn-primary" @click="addObject">Добавить</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ObjectsFormAdd",
  data() {
    return {
      obj: {
        city: "",
        street: "",
        floor: "",
        description: "",
        advert_type: "",
        price: ""
      },
    }
  },
  methods: {
    addObject() {
      axios.post('http://95.154.68.102/api/adverts/', {
        city: this.obj.city,
        street: this.obj.street,
        floor: this.obj.floor,
        description: this.obj.description,
        advert_type: this.obj.advert_type,
        price: this.obj.price,
        title: this.obj.advert_type + ' '+ this.obj.price,
        owner: 'http://95.154.68.102/api/users/7/',
        date: '2023-02-04'
      })
      this.$router.push('/')
    }
  }
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