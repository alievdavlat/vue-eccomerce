<template>
    <div class="info">
  
      <div class="info-items" v-for="items in infoData" :key="items.id">
        <div class="info-items__icon">
          <i :class="items.classNames"></i>
        </div>
        <div class="info-items__text">
          <h3>{{ items.title }}</h3>
          <p>{{ items.text }}</p>
        </div>
      </div>
  
    </div>
</template>


<script>
import { infoItems } from '../constants';
export default {
  data() {
    return {
      infoData:infoItems
    }
  },
}
</script>

<style>
  .info{
    width: 1800px;
    height: 300px;
    margin: 0 auto;
    margin-top: 200px;
    padding: 0px 20px;
    display: flex;
    align-items: center;
    background: #5A5AC9;
    gap: 70px;
    justify-content: center;
  }
  .info-items{
    width: 330px;
    height: 100px;
    display: flex;
    align-items: center;
    gap: 15px;
    border-right: 1px solid white;
    padding-right: 20px;
    
  }
  .info-items:last-of-type{
    border: none;
  }
  .info-items__icon i {
    font-size: 45px;
    color: white;
  }  
  .info-items__text h3{
    font-family: 'Raleway'; 
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    text-transform: capitalize;
    color: #FFFFFF;
    letter-spacing: 1px;
    margin-bottom: 10px;
}  
.info-items__text p{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    align-items: center;
    color: #FFFFFF;
    letter-spacing: 1.6px;

}




</style>