<template>
  <nav-client></nav-client>
  <div class="container first-container">
    <div class="row profile-info-row d-flex">
      <div class="profile-info-img-col col-2 cardOwner-wrapper">
        <div class="cardOwner-wrapper d-flex  justify-content-center">
          <img class="cardOwner-img" :src="user.avatar" alt="NO PHOTO??">
        </div>
        <div class="cardOwner-wrapper d-flex  justify-content-center">
          <p class="underavatar-p">{{user.username}}</p>
        </div>
        <div class="cardOwner-wrapper d-flex  justify-content-center">
          <button class="btn btn-primary cardOwner-btn" v-if="isAuthorized && isCurrentUser">Изменить</button>
        </div>
      </div>
      <div class="profile-info-text-col col-3 ">
        <p class="profile-info-p">{{user.phone}}</p>
      </div>
      <div class="profile-info-text-col col ">
        <p class="profile-info-p" v-if="user.is_realtor">Риеэтор</p>
        <p class="profile-info-p" v-else>Пользователь</p>
        <p class="profile-info-p">{{user.mail}}</p>
      </div>
    </div>
    <div class="objects-content-header d-flex">
      <p class="objects-content-header-H">Избранные объекты пользователя {{user.username}}:</p>
      <p class="objects-content-header-rating">(Рейтинг: 3)</p>
    </div>
  </div>

  <div class="container first-container" v-for="post in user.favorite_adverts" :key="post.id">
    <div class="row cardObject-container">
      <div class="col d-flex cardObject-maincontent">
        <img class="cardObject-img" src="https://www.fontanka.ru/longreads/69055537/2020/images/tild3236-3039-4438-b935-366561386233__48.jpg" alt="dd">

        <div class="cardObject-maincontent-textblock">
          <a href="#" class="cardObject-title">{{post.title}}</a>

          <svg   width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path class="svg-star-unclicked" d="M13.5 2.25L16.9762 9.2925L24.75 10.4288L19.125 15.9075L20.4525 23.6475L13.5 19.9913L6.5475 23.6475L7.875 15.9075L2.25 10.4288L10.0237 9.2925L13.5 2.25Z" fill="currentcolor" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>

          <!-- Если объект в избранном то... -->
          <!--          <svg   width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">-->
          <!--            <path class="svg-star-clicked" d="M13.5 2.25L16.9762 9.2925L24.75 10.4288L19.125 15.9075L20.4525 23.6475L13.5 19.9913L6.5475 23.6475L7.875 15.9075L2.25 10.4288L10.0237 9.2925L13.5 2.25Z" fill="currentcolor" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>-->
          <!--          </svg>-->

          <p class="cardObject-undertitle">{{post.floor}}</p>
          <p class="cardObject-adress">{{post.street}},</p>
          <p class="cardObject-cost">{{post.price}}</p>
          <p class="cardObject-info">{{post.description}}}</p>

        </div>
      </div>


    </div>
  </div>





</template>

<script>

import NavClient from "@/components/UI/NavClient";
import axios from "axios";
export default {
  name: "ProfilePage",
  components: {NavClient},
  data() {
    return {
      user: {},
      currentUserId: "",
      isAuthorized: localStorage.getItem('token') != null,
      isCurrentUser: false,
      file: ''
    }
  },
  methods: {
   async checkUser() {
      if (this.isAuthorized) {
        axios.defaults.headers.common['Authorization'] = `Token ${localStorage.getItem('token')}`
        const response = await axios.get('http://95.154.68.102/api/auth/users/me')
        this.isCurrentUser = (response.data.id === this.$route.params.id)
        this.currentUserId = response.data.id
      }
    },
    async getUserData() {
     const res = await axios.get('http://95.154.68.102/api/users/' + this.$route.params.id)
      this.user = res.data
      this.file = this.user.avatar
    }
  },
  mounted() {
    this.checkUser()
    this.getUserData()
  },
  watch: {
    $route() {
      this.checkUser()
      this.getUserData()
    }
  }
}
</script>

<style scoped>

.objects-content-header{
  margin-top: 10px;
}
.objects-content-header p{
  margin-bottom: 0;
  font-family: 'Inter', serif;
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 30px;

  color: #000000;
}

.objects-content-header-H{
  margin-right: 20px;
}

.first-container{
  background-color: white;
  box-shadow: 0 0 3px 3px gray;
  border-radius: 10px;
  padding: 20px;
  margin-top: 34px;
  margin-bottom: 34px;
}

.cardOwner-img{
  width: 114px;
  height: 102px;
  border-radius: 100%;

}

.profile-info-text-col{
  padding-top: 20px;
}

.profile-info-p{
  font-family: 'Inter',serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;

  color: #000000;
}


.underavatar-p{
  font-family: 'Inter', serif;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 48px;
  margin: 0;

  color: #000000;
}

.profile-info-img-col{
  padding-left: 0;
}

.btn{
  height: 34px;
  color: black;
  background-color:white;
  border-width: 2px;
  border-color: #5F77BF;
  width: 166px;

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

.cardOwner-btn{
  font-family: 'Inter',serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 17px;

  color: #000000;


  border-radius: 30px;
}


.cardOwner-btn{
  font-family: 'Inter',serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 17px;

  color: #000000;

  margin: 0 20% 15px;

  border-radius: 30px;
}

.cardOwner{
  background-color: #F3F3F3;
  border-radius: 10px;
  padding-top: 20px;
  padding-bottom: 20px;

}

.cardOwner-img{
  width: 114px;
  height: 102px;
  border-radius: 100%;
  margin-bottom: 10px;

}

.cardOwner-username{
  font-family: 'Inter',serif;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  margin-bottom: 0;
  color: #000000;

}


.cardObject-img{
  width: 419px ;
  height: 300px ;
}

.cardObject-maincontent{
  width: 1000px;
}

.cardObject-maincontent-textblock{
  margin-left: 20px;
}

.cardObject-title{
  font-family: 'Inter',serif;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  cursor: pointer;
  text-decoration: none;
  width: auto;
  color: #5F77BF;
}

.cardObject-title:hover{
  color: #718FE8;
}

.cardObject-title:active{
  color: #5F77BF;

}

.cardObject-undertitle{
  font-family: 'Inter',serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #4E5454;
  margin-bottom: 4px;
}

.cardObject-adress{
  font-family: 'Inter', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #4E5454;
  margin-bottom: 10px;
}

.cardObject-cost{
  font-family: 'Inter', serif;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #000000;
  margin-bottom: 0;
}

.cardObject-costOfMeter{
  font-family: 'Inter', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #4E5454;
}

.cardObject-info{
  font-family: 'Inter', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 25px;
  color: #000000;
}


svg{
  margin-bottom: 10px;
  margin-left: 5px;
}

.svg-star-unclicked{
  cursor: pointer;
  color: white;
}

.svg-star-unclicked:hover{
  color: yellow;
}

.svg-star-clicked{
  cursor: pointer;
  color: yellow;
}

.svg-star-clicked:hover{
  color: white;
}






.cardOwner-btn-number{
  cursor: default;
}

</style>