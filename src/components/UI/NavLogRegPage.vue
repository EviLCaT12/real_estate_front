<template>
  <!--    Импорт шрифта Inter-->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap" rel="stylesheet">
  <!--    Импорт шрифта Inter-->

  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <nav class="navbar navbar-expand-lg navbar-light bg mx-auto">
    <div class="container-fluid container">
      <div class="d-flex flex-row bd-highlight ">
        <svg class="house-svg " width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.5 22.5L30 5L52.5 22.5V50C52.5 51.3261 51.9732 52.5979 51.0355 53.5355C50.0979 54.4732 48.8261 55 47.5 55H12.5C11.1739 55 9.90215 54.4732 8.96447 53.5355C8.02678 52.5979 7.5 51.3261 7.5 50V22.5Z" stroke="black" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M22.5 55V30H37.5V55" stroke="black" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <a class="navbar-brand logo  " href="#"><span class="account">Аккаунт</span></a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavLogRegPage"
}
</script>

<style scoped>



.bg{
  height: 82px;
  box-shadow: 0px 4px 4px gray;
  margin: 0;
}
.container{
  padding: 0;
}

.account{
  margin-left: 20px;
  cursor: default;

}
.logo:hover{
  cursor: default;

}

.main-div button{
  padding-right: 40px;
}

.logo{
  font-family: 'Inter';
  text-transform: uppercase;
  font-style: normal;
  font-weight: bold;
  font-size: 50px;
  line-height: 61px;
  color: #000000;
  text-decoration: none;
  cursor: pointer;
}

.logo:hover{
  color: black;
}

.account{
  font-family: 'Inter';
  font-style: normal;
  font-weight: normal;
  font-size: 45px;
  line-height: 61px;
  color: #000000;
}


</style>