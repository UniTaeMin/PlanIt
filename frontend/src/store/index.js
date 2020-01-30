import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	  transtionStatus: "bottom",
	  userdata:{},
  },
  mutations: {
  },
  actions: {
	 signin({ commit, state },data) {
		return new Promise((resolve, reject) => {
			console.log(data)
				axios
					.post("http://nulllove-rgobq.run.goorm.io/api/account/signin", data)
					.then(value => {
						console.log(value);
						resolve(value);
					})
					.catch(err => {
						reject(err);
					});
			});
		},
	signup({ commit, state },data) {
		return new Promise((resolve, reject) => {
			console.log(data)
				axios
					.post("http://nulllove-rgobq.run.goorm.io/api/account/signup", data)
					.then(value => {
						console.log(value);
						resolve(value);
					})
					.catch(err => {
						reject(err);
					});
			});
		},
	 token({ commit, state },data) {
		return new Promise((resolve, reject) => {
			console.log(data)
				axios
					.post("http://nulllove-rgobq.run.goorm.io/api/account/token", data)
					.then(value => {
						console.log(value);
						resolve(value);
					})
					.catch(err => {
						reject(err);
					});
			});
		},
  },
  modules: {
  }
})
