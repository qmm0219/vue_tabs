import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

/**
 * Vuex全局状态管理
 * @param options {Array} 用于渲染tabs的数组
 */
//const store = new Vuex.Store({
//state: {
//    options: [],
//    activeIndex: '/user',
//    userInfo: {}
//},
//mutations: {
//  // 添加tabs
//  add_tabs (state, data) {
//    this.state.options.push(data);
//  },
//  // 删除tabs
//  delete_tabs (state, route) {
//    let index = 0;
//    for (let option of state.options) {
//      if (option.route === route) {
//        break;
//      }
//      index++;
//    }
//    this.state.options.splice(index, 1);
//  },
//  // 设置当前激活的tab
//  set_active_index (state, index) {
//    this.state.activeIndex = index;
//  },
//  // 设置详情信息
//  save_detail_info (state, info) {
//    this.state.userInfo = info;
//  }
//}
//});


const store = new Vuex.Store({
	state:{
		editableTabs: [],
       	tabActiveIndex: '/user',
      	userInfo: {}
	},
	mutations:{
		//添加tab
		add_tabs(state,data){
			this.state.editableTabs.push(data);
		},
		//删除tab
		delete_tabs(state,route){
			let index = 0;
			for(let tabs of state.editableTabs){
				if(tabs.route == route){
					break;
				}
				index++;
			}
			this.state.editableTabs.splice(index,1);
		},
		//设置当前激活的tab
		set_active_index(state,index){
			this.state.tabActiveIndex = index;
		},
		//设置详细信息
		save_detail_info(state,info){
			this.state.userInfo = info;
		}
	}
})

export default store;