// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './config/router'
import axios from 'axios';

Vue.config.productionTip = false


//请求超时时限 我设置500毫秒
axios.defaults.timeout =  500;

//请求次数
axios.defaults.retry = 4;

//请求的间隙
axios.defaults.retryDelay = 1000;


/*添加响应拦截器*/
axios.interceptors.response.use(function(response){
	/*对响应数据做些事*/
	return response;
	}, function(error){
	/*请求错误时做些事*/

  //请求超时的之后，抛出 error.code = ECONNABORTED的错误..错误信息是 timeout of  xxx ms exceeded
	if(error.code == 'ECONNABORTED' && error.message.indexOf('timeout')!=-1){
		var config = error.config;
		config.__retryCount = config.__retryCount || 0;

		if(config.__retryCount >= config.retry) {
				// Reject with the error
				//window.location.reload();
				return Promise.reject(error);
    }
    
		// Increase the retry count
		config.__retryCount += 1;

		// Create new promise to handle exponential backoff
		var backoff = new Promise(function(resolve) {
				setTimeout(function() {
						//console.log('resolve');
						resolve();
				}, config.retryDelay || 1);
		});

		return backoff.then(function() {
				return axios(config);
		});
	}else{

    return Promise.reject(error);
    
	}
});


Vue.prototype.$axios = axios;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
