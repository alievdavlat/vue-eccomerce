<template>
  <div class="cartlistItem">
      <div class="cartlistItem-left">
        <div class="cartlistItem-left__img">
          <img :src="itemData.imgUrl" :alt="itemData.name">
        </div>
            <p>
             {{ itemData.title }}
            </p>
             

            <h4>
              Price: {{ itemData.price }}
            </h4>

            <button @click="handleDelete(itemData.id)">
              <i class="fa-solid fa-trash"></i>
            </button>

      </div>

      
  </div>
</template>


<script>
import ArrowBottom from '../../assets/icons/ArrowBottom.vue';
import ArrowTop from '../../assets/icons/ArrowTop.vue';
import { getStorage } from '../../constants';

export default {
  data() {
    return {
      itemData: this.item      
    }
  },
  components:{
    ArrowBottom,
    ArrowTop,
  },
  props:{
    item:{
      type:Object,
      required:true,
    }
  },
  methods:{
    handleDelete(idx){
    const newStorage = getStorage.filter(item => item.id !== idx )
    window.location.reload()
    localStorage.setItem('cart', JSON.stringify(newStorage))
    this.$store.commit('decrementBag')
    
  }
  }
  
}
</script>


<style>
.cartlistItem{
  border: 1px solid #aaa;
  border-radius: 15px;
}
  .cartlistItem-left{
    display: flex;
    align-items: center;
    justify-content: space-around;
    
  }
  .cartlistItem-left__img{
    width: 200px;
    height: 200px;
    margin-right: 100px;

  }
  .cartlistItem-left__img img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
  .cartlistItem-left__counter{
    display: flex;
    align-items: center;
    margin-left: 150px;
    gap: 15px;
  }
  .counter{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .counter span{
    cursor: pointer;
  }


.cartlistItem-left h4{
  margin-left: 100px;
  margin-right: 50px;
}
.cartlistItem-left button{
  width: 70px;
  height: 50px;
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  font-size: 25px;
  justify-content: center;
  cursor: pointer;
}
.cartlistItem-left button:active{
  transform: rotate(15deg);
}
</style>