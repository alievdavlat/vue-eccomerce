<template>

<div class="navbar-top">

  <div class="container">
    <div class="navbar-top-wrapper">
<div class="navbar-top__left">
  <div class="navbar-top__left-icons">
    <a href="mailto:alievdavlat024@gmail.com" target="_blank">
    <i class="fa-sharp fa-regular fa-envelope"></i>
    </a>
    <a href="https://github.com/alievdavlat" target="_blank">
      <i class="fa-brands fa-github"></i>
    </a>
    <a href="https://t.me/alievv_15" target="_blank">
      <i class="fa-brands fa-telegram"></i>
    </a>
    <a href="https://www.instagram.com/1.al1evv/?igshid=NTc4MTIwNjQ2YQ%3D%3D" target="_blank">
      <i class="fa-brands fa-instagram"></i>
    </a>
  </div>

  <div class="navbar-top__left-phone">
    <span>
      <i class="fa-solid fa-phone"></i>
    </span>

    <a href="#">
      +998998331564
    </a>

  </div>

</div>

<ul class="navbar-top-right">
  <li>
    Setting
  </li>
  <li>
       <!-- USD $  {{ $store.state.totolPrice }} -->
       USD $ {{ bagTotol.length > 0 ?  bagCount  : 0}}
  </li>
  <li>
    <img src="../assets/icons/us-flag.jpg.svg" alt="flag">
    English
  </li>
</ul>

    </div>
  </div>

</div>

  <div class="container">

      <nav class="navbar">
        <RouterLink to="/">
      <div class="navbar-logo">
          <h1>
          Techno 
        </h1>
        <span>
          <i class="fa-solid fa-laptop"></i>
        </span>
      </div>
    </RouterLink>  
  
      <ul class="navbar-nav" v-if="showContent">
        <RouterLink :to="item.path" v-for="item in navItems">
          <li class="navbar-nav__items" :class="navItemActive === item.id ? ' linkActive' : ''"  :key="item.id" @click="navItemActive = item.id ">
            {{ item.title }}
          </li>
        </RouterLink>
      </ul>
     <div v-else class="search-wrapp">
      <div  class="search-bar">
          <input type="text" placeholder="Search products..." v-model="searchValue">
          <i class="fa-sharp fa-solid fa-xmark" @click="handleClearSearch"></i>
      </div>
      <button class="search-btn" @click="showContent = true">
        send
      </button>
     </div>
    
      <div class="navbar-icons">
          <i class="fa-solid fa-magnifying-glass" @click="showContent = false"></i>
          

          <RouterLink to="/cart">
              <span class="navbar-icons__items">
                  <i class="fa-sharp fa-solid fa-bag-shopping"></i>
                  <span>{{bagTotol.length }}</span>
              </span>
          </RouterLink>
       </div>
  
    </nav>

    </div>

</template>


<script>
import { headerNav } from '../constants';
import { getStorage } from '../constants';
import { store } from '../store';


export default {
  data() {
    return {
      navItems: headerNav,
      navItemActive:1,
      showContent:true,
      searchValue:'',
      bagTotol:getStorage,
      bagCount: JSON.parse(localStorage.getItem('bag'))
    }
  },
  methods:{
    handleClearSearch(){
      this.searchValue = ''

    }
  },
}
</script>


<style scoped>
  .navbar-top{
    background: black;
    width: 100%;
    padding: 40px 0px;
  }
  .navbar-top-wrapper{
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
  }
  .navbar-top__left{
    display: flex;
    align-items: center;
    gap: 100px;
  }
  .navbar-top__left a{
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    letter-spacing: 1.5px;
    font-size: 18px;
    margin-left: 10px;
  }

  .navbar-top__left-icons{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    cursor: pointer;

  }
  .navbar-top__left-icons i{
    font-size: 22px;
  }
  .navbar-top__left-phone i{
     font-size: 22px;
     cursor: pointer;

  }
  .navbar-top-right{
    display: flex;
    align-items: center;
  }
  .navbar-top-right li{
    padding: 0px 15px;
    cursor: pointer;

  }
  .navbar{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 0px;
  }
  .navbar-logo{
    display: flex;
    align-items: center;
    gap: 13px;
    font-family: monospace;
    cursor: pointer;
  }
  .navbar-logo i{
    font-size: 23px;
    margin-top: 5px;
  }
  .navbar-logo h1{
    font-size: 35px;
    font-weight: 600;
  }
.navbar-nav{
  display: flex;
  align-items: center;
  gap: 30px;
}
.navbar-nav li{
  font-weight: 650;
  margin-top: 10px;
  letter-spacing: 1px;
}
.navbar-nav li:hover{
  color: blue;
  cursor: pointer;
}
.linkActive{
  color: blue;
}
.navbar-icons{
  display: flex;
  gap: 40px;
  font-size: 22px;
  cursor: pointer;
}
.navbar-icons__items{
  position: relative;
}
.navbar-icons__items span{
  position: absolute;
  background: #5A5AC9;
  top: -10px;
  border-radius: 4px;
  padding:1px  5px;
  font-size: 20px;
  font-weight: 500;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
}

.search-wrapp{
  display: flex;
  align-items: center;
  gap: 15px;
}
.search-btn{
  width: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 14px 0px;
  border: none;
  outline: none;
  border-radius: 10px;
  background: #5A5AC9;
  color: white;
  font-weight: 500;
  letter-spacing: 1px;
  font-size: 18px;
  cursor: pointer;
  transition:background 0.2s linear;
}
.search-btn:active{
  background: #7171ee;
}
.search-bar{
  width: 500px;
  height: 50px;
  border-radius: 15px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.search-bar input:active{
  outline: none;
}
.search-bar input{
  width: 98%;
  height: 68%;
  border: none;
  padding: 0px 10px;
  outline: none;
  font-size: 18px;

}
.search-bar i{
  margin-right: 10px;
  font-size: 22px;
  cursor: pointer;
}

</style>