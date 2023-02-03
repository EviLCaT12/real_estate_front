<template>
  <nav-rieltor></nav-rieltor>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css">
  <div class="container first-container">

    <div class="row search-uprow">
      <div class="col">
        <p class="p-search">Город</p>
        <input
            v-model="obj.city"
            class="form-control inp"
            type="text"
            placeholder="Владивосток"
        >
      </div>
      <div class="col">
        <p class="p-search">Улица</p>
        <input
            v-model="obj.street"
            class="form-control inp"
            type="text"
            placeholder="Алеутская"
        >
      </div>
      <div class="col">
        <p class="p-search">Номер дома</p>
        <input
            class="form-control inp inp-small"
            type="text"
            placeholder="25"
        >
      </div>
      <div class="col">
        <p class="p-search">Номер квартиры</p>
        <input
            class="form-control inp inp-small"
            type="text"
            placeholder="18"
        >
      </div>
      <div class="col">
        <p class="p-search">Стоимость от</p>
        <input
            v-model="obj.price_min"
            class="form-control inp inp-small"
            type="text"
            placeholder="18"
        >
      </div>
      <div class="col">
        <p class="p-search">Стоимость до</p>
        <input
            v-model="obj.price_max"
            class="form-control inp inp-middle"
            type="text"
            placeholder="18"
        >
      </div>
    </div>
    <div class="row search-downrow">
      <div class="col">
        <p class="p-search">Тип объекта</p>
        <select v-model="obj.advert_type">
          <option>Квартира</option>
          <option>Дом</option>
          <option>Земельный участок</option>
        </select>
      </div>
      <div class="col">
        <p class="p-search">Этажность</p>
        <input
            v-model="obj.floor"
            class="form-control inp inp-small"
            type="text"
            placeholder="3"
        >
      </div>
      <div class="col">
        <p class="p-search">Комнат</p>
        <input
            class="form-control inp inp-small"
            type="text"
            placeholder="2"
        >
      </div>
      <div class="col">
        <p class="p-search">Площадь</p>
        <input
            class="form-control inp inp-small"
            type="text"
            placeholder="18"
        >
      </div>

      <div class="col col-btn">
        <div class="btn-div  ">
          <button class="btn btn-primary" @click="findObject">Поиск</button>
        </div>
      </div>
    </div>
  </div>

  <adverts-list :posts="posts"></adverts-list>
</template>


<script>
import axios from "axios";
import NavRieltor from "@/components/UI/NavRieltor";
import advertsList from "@/components/adverts/AdvertsList";
export default {
  name: "MainPage",
  components: { NavRieltor, advertsList},
  data() {
    return {
      isAuthorized: localStorage.getItem('token') != null,
      isRealtor: true,
      posts: [],
      obj: {
        city: "",
        street: "",
        advert_type: "",
        price_min: "",
        price_max: "",
        floor: ""
      }
    }
  },
  methods: {
    async fetchPosts() {
      if (this.isAuthorized)
        axios.defaults.headers.common['Authorization'] = `Token ${localStorage.getItem('token')}`
      else
        console.log("I'm not authorized!")
      const response = await axios.get('http://95.154.68.102/api/adverts/')
      this.posts = response.data
    },
    async findObject() {
      let name = []
      let value = []
      for (var key in this.obj) {
        if (this.obj[key] !== "") {
          value.push(this.obj[key])
          name.push(key)
        }
      }
      let req = ''
      for (let i = 0; i < name.length; i++) {
        if (i == name.length - 1) {
          req += name[i] + '=' + value[i]
        }

        else
          req += name[i] + '=' + value[i] + '&';
      }
      const response = await axios.get('http://95.154.68.102/api/adverts/?' + req)
      this.posts = response.data
    },
    async checkRealtor() {
      const res = await axios.get('http://95.154.68.102/api/users/me/', {
        token: localStorage.getItem('token')
      })
      this.isRealtor = res.data.is_realtor
    }
  },
  mounted() {
    this.fetchPosts()
    this.checkRealtor()
  },
}
</script>

<style scoped>

svg{
  margin-bottom: 10px;
  margin-left: 5px;
}

.first-container{
  background-color: white;
  box-shadow: 0 0 3px 3px gray;
  border-radius: 10px;
  padding: 20px;
  margin-top: 34px;
  margin-bottom: 34px;
}

.p-search{
  margin-bottom: 0;
  text-align: left;
  font-size: 14px;
  font-family: 'Inter',serif;
}

label{
  font-size: 14px;
  font-family: 'Inter',serif;
}

.inp{
  height: 36px;
  border-color: #5F77BF;
}

select{
  color: black;
  width: 286px;
  height: 36px;
  border: 1px solid #5F77BF;
  border-radius: 5px;
  background-color: white;
}

.search-downrow{
  margin-top: 12px;
}

.btn{
  width: 100%;
  height: 34px;
  color: black;
  background-color:white;
  border-width: 2px;
  border-color: #5F77BF;
}

.btn:hover{
  color: white;
  background-color: #5F77BF;
  border-color: #5F77BF;
}

.btn:active {
  color: black;
  background-color:white;
  border-width: 2px;
  border-color: #5F77BF;
}

.btn:focus {
  box-shadow: none !important;
}

.btn-primary{
  padding: 0;
}

</style>

<!--<style scoped>-->
<!--.sub-element{-->
<!--  cursor: pointer;-->
<!--  text-decoration: none;-->
<!--  color: #5F77BF;-->
<!--  width: auto;-->
<!--}-->

<!--.sub-element:hover{-->
<!--  color: black;-->
<!--}-->

<!--.container-sun{-->
<!--  margin-bottom: 50px;-->
<!--}-->

<!--.mainDiv {-->
<!--  margin: 30px 0 0 0;-->
<!--}-->

<!--.div-first-content{-->
<!--  margin:0;-->
<!--  padding: 0;-->
<!--}-->

<!--.uprow-first-content{-->
<!--  margin: 0;-->
<!--  padding: 0;-->
<!--  width: 97%;-->
<!--  height: auto;-->
<!--  box-shadow: -1px -1px 5px rgb(191, 191, 191), 1px 1px 5px rgb(191, 191, 191);-->
<!--}-->

<!--.content-uprow{-->
<!--  margin: 0;-->
<!--  padding: 10px 0 10px 0 ;-->
<!--}-->

<!--.p-tag{-->
<!--  margin: 0;-->
<!--}-->

<!--.p-tag-div{-->
<!--  width: auto;-->
<!--}-->

<!--.downrow-first-content{-->
<!--  margin: 25px 0 0 0;-->
<!--  padding: 0;-->
<!--  width: 97%;-->
<!--  box-shadow: -1px -1px 5px rgb(191, 191, 191), 1px 1px 5px rgb(191, 191, 191);-->
<!--  height: auto;-->
<!--}-->

<!--.div-second-content{-->
<!--  margin: 0;-->
<!--  padding: 0;-->
<!--  box-shadow: -1px -1px 5px rgb(191, 191, 191), 1px 1px 5px rgb(191, 191, 191);-->
<!--  height: 550px;-->
<!--  position: sticky;-->
<!--  top: 82px-->
<!--}-->

<!--.p-tags-menu{-->
<!--  margin-bottom: 0;-->
<!--  font-family: 'Inter';-->
<!--  font-style: normal;-->
<!--  font-weight: 700;-->
<!--  font-size: 20px;-->
<!--  line-height: 48px;-->
<!--  color: #000000;-->
<!--}-->

<!--@media (max-width: 1100px){-->
<!--  .top-users-div{-->
<!--    display: none;-->
<!--  }-->
<!--  .div-first-content{-->
<!--    width: 100%;-->
<!--  }-->
<!--  .uprow-first-content{-->
<!--    width: 100%;-->
<!--  }-->
<!--  .downrow-first-content{-->
<!--    width: 100%;-->
<!--  }-->
<!--  post-item img{-->
<!--    width: 10px;-->
<!--    height: 10px;-->
<!--  }-->

<!--}-->

<!--</style>-->