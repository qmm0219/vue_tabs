<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <!--<router-view/>-->
    <v-home></v-home>
  </div>
</template>

<script>
import Home from "@/components/home"
export default {
  name: 'App',
  components:{
  	'v-home':Home
  }
}
</script>

<style>
*{
	margin:0;
	padding:0;
}
html,body{
	width:100%;
	height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
 	height:100%;
}

.el-tabs.el-tabs--border-card {
    box-shadow: none;
    border-bottom: none;
}
</style>
