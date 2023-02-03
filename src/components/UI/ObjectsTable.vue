<template>
  <div class="table-responsive">
    <table class="table table-bordered">
      <thead id="tableHead">
      <tr>
        <th colspan="11">Список объектов</th>
      </tr>
      </thead>
      <thead>
      <tr>
        <th scope="col">Тип</th>
        <th scope="col">Город</th>
        <th scope="col">Улица</th>
        <th scope="col">Дом</th>
        <th scope="col">Кв.</th>
        <th scope="col">Цена</th>
        <th scope="col">Описание</th>
        <th scope="col">Эт.</th>
        <th scope="col">Ком.</th>
        <th scope="col">Площадь</th>
        <th scope="col"></th>

      </tr>
      </thead>

      <tbody>
      <tr>
        <td>Квартира</td>
        <td>Владивосток</td>
        <td>Алеутская</td>
        <td>25</td>
        <td>44</td>
        <td>135.15</td>
        <td>135.15</td>
        <td>2</td>
        <td>4</td>
        <td>106м^2</td>
        <td>
          <button type="button" class="btn btn-primary" id="stdButton">Изменить</button>
          <button type="button" class="btn btn-danger" id="dngButton">Удалить</button>
        </td>
      </tr>
      </tbody>





      <tbody>
      <tr>
        <td>Квартира</td>
        <td>Владивосток</td>
        <td>Алеутская</td>
        <td>25</td>
        <td>44</td>
        <td>135.15</td>
        <td>135.15</td>
        <td>2</td>
        <td>4</td>
        <td>106м^2</td>
        <td>
          <button type="button" class="btn btn-primary" id="stdButton" >Изменить</button>
          <button type="button" class="btn btn-danger" id="dngButton">Удалить</button>
        </td>
      </tr>
      </tbody>
      <tbody>
      <tr>
        <td>Квартира</td>
        <td>Владивосток</td>
        <td>Алеутская</td>
        <td>25</td>
        <td>44</td>
        <td>135.15</td>
        <td>135.15</td>
        <td>2</td>
        <td>4</td>
        <td>106м^2</td>
        <td>
          <button type="button" class="btn btn-primary" id="stdButton" >Изменить</button>
          <button type="button" class="btn btn-danger" id="dngButton">Удалить</button>
        </td>
      </tr>
      </tbody>
      <tbody>
      <tr>
        <td>Квартира</td>
        <td>Владивосток</td>
        <td>Алеутская</td>
        <td>25</td>
        <td>44</td>
        <td>135.15</td>
        <td>135.15</td>
        <td>2</td>
        <td>4</td>
        <td>106м^2</td>
        <td>
          <button type="button" class="btn btn-primary" id="stdButton" >Изменить</button>
          <button type="button" class="btn btn-danger" id="dngButton">Удалить</button>
        </td>
      </tr>
      </tbody>
      <tbody>
      <tr>
        <td>Квартира</td>
        <td>Владивосток</td>
        <td>Алеутская</td>
        <td>25</td>
        <td>44</td>
        <td>135.15</td>
        <td>135.15</td>
        <td>2</td>
        <td>4</td>
        <td>106м^2</td>
        <td>
          <button type="button" class="btn btn-primary" id="stdButton" >Изменить</button>
          <button type="button" class="btn btn-danger" id="dngButton">Удалить</button>
        </td>
      </tr>
      </tbody>







    </table>
  </div>
</template>

<script>
export default {
  name: "ObjectsTable"
}
</script>

<style scoped>
table {
  background-color: white;
  border-color: #5F77BF;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 12px;
  overflow: hidden;
  margin-top: 40px;
}

#stdButton {
  background-color: #5F77BF;
  margin-right: 5px;
}

#tableHead {
  background-color: #5F77BF;
  color: white;
  text-align: start;
}

#dngButton {
  margin-left: 5px;
}
</style>