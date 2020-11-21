<template>
  <div id="app">
    <app-header></app-header>
<!--    <div id ="main" class = "container" :style = "contentStyleObj">-->
    <div id ="main" class = "container">
        <router-view></router-view>
    </div>
    <app-footer class = "footer"></app-footer>
  </div>
</template>

<script>
 import AppHeader from "./components/header";
 import AppFooter from "./components/footer";

  export default {
    name: 'App',
    data() {
      return{
        // contentStyleObj:{
        //   height:''
        // }
      }
    },
    components: {
      AppHeader,
      AppFooter
    },
  //   methods:{
  //     getHeight(){
  //       this.contentStyleObj.height = window.innerHeight-110+'px'
  //     }
  //   },
  //   created(){
  //     window.addEventListener('resize',this.getHeight);
  //     this.getHeight()
  //   },
  //   destroyed() {
  //     window.removeEventListener('resize', this.getHeight)
  //   }
  }
</script>

<style>
  #app {
    position: relative;
     font-family: Avenir, Helvetica, Arial, sans-serif;
     -webkit-font-smoothing: antialiased;
     -moz-osx-font-smoothing: grayscale;
     text-align: center;
     color: #2c3e50;
     margin-top: 0;
   }

  #main {
    position: relative;
    height: 1180px;

  }
  .footer{
    position: absolute;
    bottom: 0;
    width: 100%;
    height: auto;
  }
</style>
<style scoped>

</style>