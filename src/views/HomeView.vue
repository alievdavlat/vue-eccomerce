<template>
  <Slider/>
  <Info/>
  <Marketing :marketings="marketingData" :marketingFirstItem="1"/>

  <SectionText :title="'Laptops'" :text="'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, culpa?'" />
  <Prodects :productss="allProductsData" :filter="'laptop'"/>
  
  
  <SectionText :title="'Smartphones'" :text="'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, culpa?'" />
  <Prodects :productss="allProductsData" :filter="'phone'"/>
  
  <SectionText :title="'HeadPhones'" :text="'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, culpa?'" />
  <Prodects :productss="allProductsData" :filter="'headphones'"/>
  
  <SectionText :title="'Keybords'" :text="'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, culpa?'" />
  <Prodects :productss="allProductsData" :filter="'keybord'"/>
  
  <SectionText :title="'Pc'" :text="'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, culpa?'" />
  <Prodects :productss="allProductsData" :filter="'pc'"/>
  
  <Marketing :marketings="marketingData2" :marketingFirstItem="3"/>

  <SectionText :title="'all Products'" :text="'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, culpa?'" />
  <div class="container">
    <SliderBottom/>
  </div>

</template>


<script>
import { Info, Marketing } from '../components';
import SectionText from '../components/ui/SectionText.vue';
import Prodects from '../components/prodects.vue';
import Slider from '../components/ui/slides/Slider.vue';
import SliderBottom from '../components/ui/slides/SliderBottom.vue'
import { marketingItems,marketingItems2 } from '../constants';
import { products } from '../constants';

export default {
  components:{
    Slider,
    Info,
    Marketing,
    Prodects,
    SectionText,
    SliderBottom,

},
data() {
  return {
    marketingData: marketingItems,
    marketingData2: marketingItems2,
    allProductsData: products,
  }
},
}
</script>


