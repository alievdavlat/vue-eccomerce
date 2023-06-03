<template>
  <ul class="footer-list">
    <h3>
      {{ listTitle }}
    </h3>
    <template  v-for="list in lists.slice(index[0], index[1])" :key="list">
      <li>{{ list }}</li>
    </template>
  </ul>
</template>


<script>

export default {
props:{
  listdata:{
    type:Array,
    required: true,
  },
  listIdx:{
    type:Array,
    required: true,
  },
  title:{
    type:String,
    required: true,
  }

},
data() {
  return {
    lists:this.listdata,
    index:this.listIdx,
    listTitle:this.title,
  }
},

}
</script>


<style scoped>
  .footer-list h3{
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    display: flex;
    align-items: center;
    text-transform: capitalize;
    color: #111111;
    padding: 0px 0px 20px 0px;
    margin-bottom: 24px;
    border-bottom: 2.5px solid #5A5AC9;
  }
  .footer-list li{
    margin-top: 15px;
    font-size: 16px;
    cursor: pointer;
  }
  .footer-list li:first-of-type{
    margin-top: 0;
  }
</style>