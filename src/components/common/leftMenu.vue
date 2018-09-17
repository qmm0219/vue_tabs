<template>
	<div class="menu_wrap">
		<el-menu :default-active="$route.path" class="el-menu-vertical-demo" router @select="handleMenu">
	      	<el-menu-item
	        	v-for="menu in menus"
	        	:index="menu.route"
	        	:key="menu.route">
	        	<i class="el-icon-menu"></i>{{menu.name}}
	      	</el-menu-item>
	    </el-menu>
	</div>
</template>

<script>
	export default {
		name:"leftMenu",
		data(){
			return {
				menus: [
		          	{ route: '/template', name: '首页'},
		           	{ route: '/user', name: '用户管理'},
		          	{ route: '/psd', name: '密码管理'},
		          	{ route: '/salary', name: '工资管理'},
		         	{ route: '/attendence', name: '考勤管理'},
		          	{ route: '/perform', name: '绩效管理'},
		          	{ route: '/admin', name: '系统管理'},
		          	{ route: '/feedback', name: '意见反馈'}
        		]	
			}
		},
		created(){
			
		},
		computed: {
//	      	options () {
//	        	return this.$store.state.options;
//	      	}
   	 	},
		mounted(){
			// 刷新时以当前路由做为tab加入tabs
	      	if (this.$route.path !== '/' && this.$route.path.indexOf('userInfo') == -1) {
	        	this.$store.commit('add_tabs', {route: '/', name: '首页'});
	        	this.$store.commit('add_tabs', {route: this.$route.path , name: this.$route.name });
	        	this.$store.commit('set_active_index', this.$route.path);
	      	} else {
	       		this.$store.commit('add_tabs', {route: '/', name: '首页'});
	        	this.$store.commit('set_active_index', '/');
	        	this.$router.push('/');
	      	}
		},
		methods:{
			handleMenu(index,indexPath){
//				
//				console.log("index=============",index);
//				console.log("indexPath=========",indexPath);
			}
		}
	}
</script>

<style>
.menu_wrap{
	width:100%;
	height:100%;
	
}
</style>