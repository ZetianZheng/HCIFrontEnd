<template>
  <div id="app">
    <app-header></app-header>
    <div class = "container" :style = "contentStyleObj">
        <router-view></router-view>
    </div>
    <app-footer></app-footer>

  </div>
</template>

<script>
 import AppHeader from "./components/header";
 import AppFooter from "./components/footer";

  export default {
    name: 'App',
    data() {
      return{
        contentStyleObj:{
          height:''
        }
      }
    },
    components: {
      AppHeader,
      AppFooter
    },
    methods:{
      getHeight(){
        this.contentStyleObj.height = window.innerHeight-110+'px'
      }
    },
    created(){
      window.addEventListener('resize',this.getHeight);
      this.getHeight()
    },
    destroyed() {
      window.removeEventListener('resize', this.getHeight)
    }
  }
</script>

<style>
  #app {
     font-family: Avenir, Helvetica, Arial, sans-serif;
     -webkit-font-smoothing: antialiased;
     -moz-osx-font-smoothing: grayscale;
     text-align: center;
     color: #2c3e50;
     margin-top: 0;
   }

</style>
