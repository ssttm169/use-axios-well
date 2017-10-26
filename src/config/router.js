import Vue from 'vue'
import App from '../App'
import VueRouter from 'vue-router';
import Index from '../pages/index'

Vue.use(VueRouter);
var self = this;
const routes = [

	{path:'/index', name:'home', component:Index},
	{path:'*', name:'home', component:Index},
	{path:'/', name:'home', component:Index},
]

const router = new VueRouter({
    mode:'hash', //这样url就没有/#/XXX,而是常见的url形式
    //mode:'history', //这样url就没有/#/XXX,而是常见的url形式
    routes:routes // short for routes: routes
});

export default router

