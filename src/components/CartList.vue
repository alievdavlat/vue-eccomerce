<template>
  <div class="cartList">
    <h1>
      Your cart items
    </h1>

    <div class="cartList-wrapper">

        <div class="cartlist-nav">
          <div class="cartlist-nav__left">
            <h4>Product Image</h4>
            <h4>Product Name</h4>
            <h4>Stock Status</h4>
          </div>
          <div class="cartlist-nav__right">
              <h4>Qty</h4>
              <h4>Price</h4>
              <h4>action</h4>
              <h4>Checkout</h4>
          </div>
        </div>
      
    </div>

      <div class="cartlistItem-wrapper">
         <template v-for="(item, index) in cartData" :key="index" v-if="cartData.length > 0 ">
          <CartListItem  :item="item"/>
         </template>
          <template v-else>
            <h1 class="emptyBasket">
              empty basket ☹️
            </h1>
          </template>
         
        </div>

  </div>
</template>

<script>
import CartListItem from './ui/CartListItem.vue';
import { getStorage } from '../constants';
export default {
    components: { CartListItem },
    data() {
      return {
        cartData: getStorage,
      }
    },
   
}
</script>

<style>

  .cartList{
    background: white;
    padding: 50px;
  }
  .cartList h1{
    margin-bottom: 50px;
  }
  .cartList-wrapper{
    background: #5A5AC9;
    height: 70px;
  }
  .cartlist-nav{
    display: flex;
    height: 70px;
    align-items: center;
    justify-content: space-between;
  }
  .cartlist-nav__left,
  .cartlist-nav__right{
    width: 50%;
    display: flex;
    height: 100%;
    align-items: center;
}
.cartlist-nav__left{
justify-content: space-between;
padding-left: 10px;
}
.cartlist-nav__right{
  gap: 140px;
  padding-right: 10px;
  padding-left: 100px;
}
.cartlist-nav h4{
font-weight: 500;
font-size: 16px;
line-height: 28px;
display: flex;
align-items: center;
text-align: center;
text-transform: capitalize;
color: #FFFFFF;
}
.cartlist-nav h4:last-of-type{
  margin-left: 100px;
}
.cartlistItem-wrapper{
display: flex;
flex-direction: column;
gap: 20px;
padding: 40px;
}
.emptyBasket{
  margin: 0 auto;
  line-height: 200px;
  font-size: 100px;
  letter-spacing: 5px;
  word-spacing: 20px;
  color: #aaa;
  font-weight: 900;
  /* font-family: 'Raleway', sans-serif; */
  font-family: 'Roboto', sans-serif;

}

</style>