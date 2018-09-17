<template>
	<div class="router-template">
	    <div class="template-wrap">
	      {{$route.name}}
	      <input type="text" v-model="message"/>
	    </div>
	    <a href="https://segmentfault.com/q/1010000008676956">右键事件</a>
 	</div>	
</template>

<script>
	export default {
	    data () {
	      return {
	      	message:"",
	      };
	    },
	    beforeDestroy(){
	    	console.log("组件销毁")
	    }
	}
</script>

<style>
.router-template {
    color: #000;
    font-size: 20px;
    font-weight: 700;
    height: 100%;
  }
  .template-wrap {
    height: 100%;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
  }
</style>