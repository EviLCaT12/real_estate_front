<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css">

  <div class="container first-container">
    <p class="MyObjects-header"> Ваши объекты:</p>

  </div>

  <div class="container first-container">
    <div class="row cardObject-container">
      <div class="col d-flex cardObject-maincontent">
        <img class="cardObject-img" src="https://www.fontanka.ru/longreads/69055537/2020/images/tild3236-3039-4438-b935-366561386233__48.jpg" alt="dd">

        <div class="cardObject-maincontent-textblock">
          <a href="#" class="cardObject-title">Просторная двушка с ремонтом! Ахуеть!</a>

          <svg   width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path class="svg-star-unclicked" d="M13.5 2.25L16.9762 9.2925L24.75 10.4288L19.125 15.9075L20.4525 23.6475L13.5 19.9913L6.5475 23.6475L7.875 15.9075L2.25 10.4288L10.0237 9.2925L13.5 2.25Z" fill="currentcolor" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>

          <!-- Если объект в избранном то звездочка желтая... -->
          <!--          <svg   width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">-->
          <!--            <path class="svg-star-clicked" d="M13.5 2.25L16.9762 9.2925L24.75 10.4288L19.125 15.9075L20.4525 23.6475L13.5 19.9913L6.5475 23.6475L7.875 15.9075L2.25 10.4288L10.0237 9.2925L13.5 2.25Z" fill="currentcolor" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>-->
          <!--          </svg>-->

          <p class="cardObject-undertitle">2 к, 97 м<sup>2</sup>, 5 этаж</p>
          <p class="cardObject-adress">Улица Пушкина 37, квартира 777</p>
          <p class="cardObject-cost">30 070 000 ₽</p>
          <p class="cardObject-costOfMeter">310 000 ₽/м<sup>2</sup></p>
          <p class="cardObject-info">Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Facilisi fringilla egestas condimentum diam lectus tristique metus.
            Vitae eget donec at mattis etiam venenatis, faucibus vitae. Laoreet amet,
            elementum, tempor viverra neque leo. A convallis in velit vitae varius purus
            vitae. varius purus vitae. varius purus vitae. varius purus vitae. varius purus
            vitae. varius purus vitae. varius purus vitae. varius purus vitae...</p>

        </div>
      </div>
      <div class="col-3">
        <div class="cardOwner">
          <div class="cardOwner-wrapper d-flex  justify-content-center">
            <img class="cardOwner-img" src="https://s0.rbk.ru/v6_top_pics/media/img/9/14/754979567615149.jpg" alt="NO PHOTO??">
          </div>
          <div class="cardOwner-wrapper d-flex  justify-content-center">
            <p class="cardOwner-username">Abobus20071338</p>
          </div>
          <div class="cardOwner-wrapper d-flex  justify-content-center">
            <p class="cardOwner-role">Владелец</p>
          </div>
          <div class="cardOwner-wrapper d-flex  justify-content-center">
            <button class="btn btn-primary cardOwner-btn">Профиль</button>
          </div>
          <div class="cardOwner-wrapper d-flex  justify-content-center">
            <button class="btn btn-primary cardOwner-btn cardOwner-btn-number">+79249999999</button>
          </div>

        </div>

      </div>

    </div>
  </div>


</template>

<script>

export default {
  name: "MyObjects",
}
</script>

<style scoped>

.first-container{
  background-color: white;
  box-shadow: 0 0 3px 3px gray;
  border-radius: 10px;
  padding: 10px;
  margin-top: 34px;
  margin-bottom: 34px;
}

.MyObjects-header{
  font-family: 'Inter', serif;
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
  margin-bottom: 0;
  color: #000000;
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
}

.cardOwner-img{
  width: 114px;
  height: 102px;
  border-radius: 100%;
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
  line-height: 18px;
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

.cardOwner-btn-number{
  cursor: default;
}

</style>