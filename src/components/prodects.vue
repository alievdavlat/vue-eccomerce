<template>
  <div>

    <div class="container">
      <div class="products-wrapper">

        <template  v-for="product in productsData">
          <div class="prodcts-item" v-if="product.type === filterData">
            <span class="unique-products" v-if="product.unique">{{ product.unique }}</span>
          <div class="products-img">
            <img :src="product.imgUrl" alt="product">
          </div>
          <div class="products-text">
            <h3>{{ product.title }}</h3>
            <div class="products-info">
              <h4>{{ product.price }} $</h4>
              <p>{{ product.memory }}</p>
            </div>
            <button class="product-btn" @click="handleCart({...product})">
              <shopicom/>
            </button>
           
          </div>
        </div>
        </template>

      </div>
    </div>
  </div>
</template>

<script>
import shopicom from '../assets/icons/shopIcom.vue'
import { getStorage } from '../constants';
export default {
  props:{
    productss:{
      type:Array,
      required:true
    },
    filter:{
      type:String,
      required:true
    }
  },
  components:{
    shopicom,
  },
  data() {
    return {
      productsData:this.productss,
      filterData:this.filter,

    }
  },
  methods:{
    handleCart(obj){
     getStorage.push(obj)
     localStorage.setItem('cart', JSON.stringify(getStorage))
      this.$store.commit('priceReducer', obj.price)
      window.location.reload()
    }
  },
 
}
</script>

<style>
  .products-wrapper{
    display: flex;
    align-items: center;
    gap: 30px;
    flex-wrap: wrap;    
  }
  .prodcts-item{
    width: 300px;
    height: 400px;
    position: relative;
  }
  .prodcts-item img{
    width: 100%;
    height: 200px;
    margin-bottom: 10px;
  }
  .products-info{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 15px;
    padding: 0px 10px;
    margin-bottom: 20px;
  }
  .products-info h4{
    font-size: 20px;
  }
  .products-info p{
    font-weight: 500;
    font-size: 19px;
  }
  .product-btn{
    width: 70px;
    background: #7F8FE7;
    border: none;
    padding: 3px 0px;
    border-radius: 8px;
    cursor: pointer;
  }
  .unique-products{
    padding: 3px 10px;
    height: 30px;
    background: #5A5AC9;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    color: white;
    right: 0px;
    top: 0px;
  }
</style>