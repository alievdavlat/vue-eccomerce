<template>
  <div class="sectiontext">
    <h2>
      {{ title }}
    </h2>
    <p>
      {{ text }}
    </p>
  </div>
</template>


<script>
export default {
  props:{
    title:{
      type:String,
      required:true
    },
    text:{
      type:String,
      required:true
    }
    
  }
}
</script>


<style>
.sectiontext{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 70px;
}
.sectiontext h2{
font-family: 'Raleway';
font-style: normal;
font-weight: 700;
font-size: 30px;
line-height: 38px;
display: flex;
align-items: center;
text-align: center;
text-transform: capitalize;
color: #111111;
padding-bottom: 15px;
border-bottom: 1px solid black;
width: fit-content;

}
.sectiontext p{
font-weight: 500;
font-size: 17px;
line-height: 24px;
display: flex;
align-items: center;
text-align: center;
color: #565656;
margin-top: 15px;
}
</style>