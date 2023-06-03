<template>
  <div class="cartField">
   <h2>
    Cart
   </h2>
   <div class="bredCrumb">
      <span>Home</span> <strong>></strong> <span>Cart</span>
   </div>

  </div>
</template>


<script>
export default {
  
}
</script>


<style>
  .cartField{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 400px;
    background: #EFEFEF;
    flex-direction: column;
  }
  .cartField h2{
    letter-spacing: 1px;
    padding: 0px 15px 20px 15px;
    border-bottom: 2px solid #5A5AC9;
     
  }
  .bredCrumb{
    margin-top: 40px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .bredCrumb span{
    font-size: 20px;
    font-weight: 500;
  }
  .bredCrumb strong{
    font-size: 22px;
    font-weight: 500;
    margin: 0px 10px;
  }

</style>