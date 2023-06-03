<template>
  <div class="container">
    <div class="footer">
        <div class="footer-logo">
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

            <p>
              We are a team of professional designers and developers that create high quality wordpress plugins, Html, React Template.
            </p>
              
            <div class="navbar-top__left-icons">
              <span>
                <a href="mailto:alievdavlat024@gmail.com" target="_blank">
                  <i class="fa-sharp fa-regular fa-envelope"></i>
                </a>
              </span>
              <span>
                <a href="https://github.com/alievdavlat" target="_blank">
                  <i class="fa-brands fa-github"></i>
                </a>
              </span>

              <span>
                <a href="https://t.me/alievv_15" target="_blank">
                  <i class="fa-brands fa-telegram"></i>
                </a>
              </span>
              <span>
                <a href="https://www.instagram.com/1.al1evv/?igshid=NTc4MTIwNjQ2YQ%3D%3D" target="_blank">
                  <i class="fa-brands fa-instagram"></i>
                </a>
              </span>
            </div>
            
        </div>
    
    <listItem :listIdx="[0, 4]" :title="'Information'" :listdata="listdata" />
    <listItem :listIdx="[4, 8]" :title="'social Links'" :listdata="listdata"/>
    <div class="newslater">
      <h3>Newsletter</h3>
      <p>
        Subcribe to the TheFace mailing list to receive update on mnew arrivals, special offers and other discount information.
      </p>

        <form>
          <input type="text" placeholder="Your email address">
          <button>Sign up</button>
        </form>
    </div>
  </div>
  <div class="copyright">

  </div>

</div>
</template>


<script>
import listItem from './ui/listItem.vue';
import { footerItems } from '../constants';

export default {
  components:{
    listItem
  },
  data() {
    return {
      listdata:footerItems,
    }
  },

}
</script>


<style>
.footer{
  margin-top: 100px;
  display: flex;
  justify-content: space-between;
} 
    .footer-logo{
      display: flex;
      flex-direction: column;
      gap: 24px;
      width: 400px;
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
  .navbar-top__left-icons{
    display: flex;
    gap: 15px;
    cursor: pointer;

  }
  .navbar-top__left-icons span{
    width: 50px;
    height: 50px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .navbar-top__left-icons i{
    font-size: 22px;
  }
  .newslater{
    width: 400px;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
  .newslater h3{
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
    width: fit-content;
  }
  .newslater p{
    line-height: 25px;
    letter-spacing: 1px;
    font-weight: 400;
  }
  .newslater form{
    width: 100%;
    background:white;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 0px 0px 10px;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px; 
  
  
  }
    .newslater form> input{
      width: 100%;
      height: 100%;
      border: none;
      background: transparent;
      font-weight: 400;
      font-size: 16px;
      line-height: 21px;
      display: flex;
      align-items: center;
      color: #565656;
      outline: none;
    } 
    .newslater form> input:active{
      outline: none;
    }
    .newslater form button{
      width: 100px;
      height: 100%;
      border: none;
      background: #5A5AC9;
      color: white;
      font-size: 18px;
      font-weight: 400;
      border-top-right-radius: 20px;
      border-bottom-right-radius: 20px;
    }



</style>