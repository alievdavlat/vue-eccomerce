<script setup>
import {  RouterView } from 'vue-router'
import { Navbar , Footer } from './components'

</script>

<template>

    <header>
    <Navbar/>
    </header>

    <main>
    <RouterView />
    </main>

    <footer>
    <Footer/>
    </footer>


</template>

<style scoped>
header,footer,main{
  width: 100%;
}
footer{
  background: #EFEFEF;
  padding: 50px;
  margin-top: 100px;
}
</style>
