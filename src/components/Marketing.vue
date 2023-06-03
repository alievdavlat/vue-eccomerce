<template>
  <div class="container">
    <div class="marketing">
      <div class="marketing-cards" v-for="item in marketingCards" @click="cardsIdx = item.id" :key="item.id">
        <img :src="item.imgUrl" v-bind:width="cardsIdx === item.id ? 600 : 250" alt="img1">
        <div class="marketing-text">
          <h1>{{ item.title }}</h1>
          <p>{{ item.text }}</p>
        </div>
      </div>
      
    </div>
  </div>
</template>


<script>

export default {
    props:{
      marketings:{
        type:Array,
        required:true,
      },
      marketingFirstItem:{
        type:Number,
        required:true,
      },
     
    },
    data() {
      return {
        marketingCards:this.marketings,
        cardsIdx:this.marketingFirstItem

      }

    },
   

    

}
</script>


<style>
  .marketing{
    width: 100%;
    display: flex;
    margin: 150px 0px;
    gap: 30px;
    cursor: pointer;
    height: 300px;
    position: relative;
    height: 400px;
    justify-content: center;
  }

  .marketing img{
    height: 100%;
    object-fit: cover;
    border-radius: 15px;
    transition: all 0.6s ease;

  }
  .marketing-text{
    position: absolute;
    bottom: 30px;
    margin-left: 20px;
    color: white;
  }
  .marketing-text p{
    font-weight: 500;
    font-size: 18px;
    margin-top: 10px;
  }

</style>