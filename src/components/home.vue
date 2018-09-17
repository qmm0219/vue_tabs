<template>
	<div class="app_cotainer">
		<div class="home_header">动态添加路由tab页</div>
		<div class="home_content">
			<div class="left_menu">
				<left-menu></left-menu>
			</div>
			<div class="right_router">
				<!-- 此处放置el-tabs代码 -->
				<div class="template-tabs">
					<el-tabs v-model="tabActiveIndex" type="card" editable @tab-click="tabClickFn" @tab-remove="tabRemoveFn">
					  <el-tab-pane
					    :key="item.name"
					    v-for="(item, index) in editableTabs"
					    :label="item.name"
					    :name="item.route"
					  ></el-tab-pane>
					</el-tabs>
					<!--<el-tabs v-model="activeIndex" type="border-card" closable @tab-click="tabClick" v-if="options.length" @tab-remove="tabRemove">
						<el-tab-pane :key="item.name" v-for="(item, index) in options" :label="item.name" :name="item.route">
						</el-tab-pane>
					</el-tabs>-->
				</div>
				<div class="content-wrap">
					<!--keep-alive：缓存组件内容-->
					<keep-alive>
						<router-view/>
					</keep-alive>
				</div>
			</div>
		</div>
	</div>

</template>

<script>
	import LeftMenu from "@/components/common/leftMenu"
	export default {
		name: "home",
		data() {
			return {

			}
		},
		components: {
			"left-menu": LeftMenu
		},
		created() {

		},
		computed: {
			editableTabs(){
				return this.$store.state.editableTabs;
			},
			tabActiveIndex:{
				get(){
					return this.$store.state.tabActiveIndex;
				},
				set(val){
					this.$store.commit("set_active_index",val);
				}
			},
		},
		watch: {
			'$route'(to){
				let flag = false;
				for(let tab of this.editableTabs){
					if(tab.name  === to.name){
						flag = true;
						this.$store.commit("set_active_index","/"+to.path.split("/")[1]);
						break;
					}
				}
				if(!flag){
					this.$store.commit("add_tabs",{
						route:"/"+to.path.split("/")[1],
						name:to.name
					});
					this.$store.commit("set_active_index","/"+to.path.split("/")[1]);
				}
			},
		},
		methods: {
			// tab切换时，动态的切换路由
			tabClickFn(tab){
				let path = this.tabActiveIndex;
				// 用户详情页的时候，对应了二级路由，需要拼接添加第二级路由
				if(this.tabActiveIndex === '/userInfo') {
					path = this.tabActiveIndex + '/' + this.$store.state.userInfo.name;
				}
				this.$router.push({
					path: path
				});
			},
			tabRemoveFn(targetName){
				//首页不可删除
				if(targetName == "/"){
					return;
				}
				this.$store.commit("delete_tabs",targetName);
				if(this.tabActiveIndex === targetName){
					//设置当前激活的路由
					if(this.editableTabs && this.editableTabs.length>=1){
						this.$store.commit("set_active_index", this.editableTabs[this.editableTabs.length - 1].route);
						this.$router.push({
							path: this.tabActiveIndex
						});
					}else{
						this.$router.push({
							path: '/'
						});
					}
				}
			},
		}
		
	}
</script>

<style>
	.app_cotainer {
		width: 100%;
		height: 100%;
	}
	
	.home_header {
		height: 50px;
		line-height: 50px;
		padding: 0px 20px;
		box-sizing: border-box;
		background: #007AFF;
		color:#FFFFFF;
		font-size:16px;
	}
	
	.home_content {
		display: flex;
		height: calc(100% - 50px);
	}
	
	.left_menu {
		width: 300px;
		height: 100%;
		box-sizing: border-box;
		/*border: 1px solid red;*/
	}
	
	.right_router {
		width: calc(100% - 300px);
		height: 100%;
		box-sizing: border-box;
		/*border: 1px solid green;*/
	}
</style>