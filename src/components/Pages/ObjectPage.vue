<template>

  <div class="container first-container">

    <div id="carouselExampleControls" class="carousel-edit carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <!-- Тут добавлять изображения из массива -->
        <div class="carousel-item active">
          <img src="https://www.fontanka.ru/longreads/69055537/2020/images/tild3236-3039-4438-b935-366561386233__48.jpg" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="https://s0.rbk.ru/v6_top_pics/media/img/5/60/756281458904605.jpg" class="d-block w-100" alt="...">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"  data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Предыдущий</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"  data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Следующий</span>
      </button>
    </div>


    <div class="row cardObject-container">
      <div class="cardObject-maincontent-textblock col">
        <a href="#" class="cardObject-title">Просторная двушка с ремонтом! Ахуеть!</a>

        <svg   width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path class="svg-star-unclicked" d="M13.5 2.25L16.9762 9.2925L24.75 10.4288L19.125 15.9075L20.4525 23.6475L13.5 19.9913L6.5475 23.6475L7.875 15.9075L2.25 10.4288L10.0237 9.2925L13.5 2.25Z" fill="currentcolor" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <!-- Если объект в избранном то звездочка желтая... -->
        <!--          <svg   width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">-->
        <!--            <path class="svg-star-clicked" d="M13.5 2.25L16.9762 9.2925L24.75 10.4288L19.125 15.9075L20.4525 23.6475L13.5 19.9913L6.5475 23.6475L7.875 15.9075L2.25 10.4288L10.0237 9.2925L13.5 2.25Z" fill="currentcolor" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>-->
        <!--          </svg>-->
        <div class="address-block d-flex">
          <p class="address-p-1">2 к, 97 м2, 5 этаж</p>
          <p class="address-p-2">Улица Пушкина 37, квартира 777</p>
        </div>
        <div class="price-block d-flex">
          <p class="price-p-1">30 070 000 ₽</p>
          <p class="price-p-2">310 000 ₽/м<sup>2</sup></p>
        </div>
        <div class="info-block d-flex">
          <p class="info-p">30 070 000 ₽
            Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Facilisi fringilla egestas condimentum diam lectus tristique metus.
            Vitae eget donec at mattis etiam venenatis, faucibus vitae. Laoreet amet,
            elementum, tempor viverra neque leo. A convallis in velit vitae varius purus
            vitae. varius purus vitae. varius purus vitae. varius purus vitae. varius purus
            vitae. varius purus vitae. varius purus vitae. varius purus vitae...
          </p>

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
  name: "ObjectPage",

}
</script>

<style scoped>

.address-p-1{
  margin-right: 40px;

  font-family: 'Inter', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;

  color: #4E5454;
}

.address-p-2{
  margin-right: 20px;

  font-family: 'Inter', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;

  color: #4E5454;
}

.price-p-1 {
  font-family: 'Inter', serif;
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;

  color: #000000;

  margin-right: 40px;
}

.price-p-2{

  font-family: 'Inter', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;

  /* identical to box height */

  color: #4E5454;
  padding-top: 5px;


}

.info-p{
  font-family: 'Inter', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;

  color: #000000;


}

.first-container{
  background-color: white;
  box-shadow: 0 0 3px 3px gray;
  border-radius: 10px;
  padding: 20px;
  margin-top: 34px;
  margin-bottom: 34px;
}

.d-block{
  width: 100%;

  height: 650px;
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
  padding-top: 25px;
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

.cardOwner-role{

  font-family: 'Inter',serif;
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;

  color: #4E5454;
}

.cardObject-container{
  margin-top: 15px;
}

.cardObject-maincontent-textblock{
  margin-left: 20px;
}

.cardObject-title{
  font-family: 'Inter',serif;
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
  color: #000000;
  cursor: default;
  text-decoration: none;
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

svg{
  margin-bottom: 25px;
  margin-left: 5px;
  width: 50px;
  height: 50px;
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