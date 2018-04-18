import Vue from 'vue';
import Vuex from 'vuex';

import axios from 'axios';

Vue.use(Vuex);

const getAuthHeader = () => {
	return { headers: {'Authorization': localStorage.getItem('token')}};
}

export default new Vuex.Store({
	state: {
		user: '',
		token: ''

	},
	getters: {
		user: state => state.user,
		getToken: state => state.token,
		loggedIn: state => {
			if (state.token === '')
				return false;
			return true;
		},
	},
	mutations: {
		setUser (state, user) {
			state.user = user;
		},
		setToken (state, token) {
			state.token = token;
			if (token === '')
				localStorage.removeItem('token');
			else
				localStorage.setItem('token', token);
		},
		setLogin (state, token) {
			state.token = token;
		},
		setLoginError (state, message) {
			state.loginError = message;
		},
		setRegisterError (state, message) {
			state.registerError = message;
		},
	},
	actions: {
		 // Initialize //
		 initialize(context) {
			 let token = localStorage.getItem('token');
			 if(token) {
				// see if we can use the token to get my user account
				axios.get("/api/me",getAuthHeader()).then(response => {
					context.commit('setToken',token);
					context.commit('setUser',response.data.user);
				}).catch(err => {
					// remove token and user from state
					localStorage.removeItem('token');
					context.commit('setUser',{}); 
					context.commit('setToken','');
				});
			 }
		 },
		 // Event endponts
		 getUserEvents(context,user) {
			return axios.get('/api/events',user).then(response => {
	context.commit('setEvents',response.body.events);
			}).catch(err => {
	console.log("getUserEvents failed",err);
			});
		 },
		 addEvent(context,user) {
			 return axios.get('/api/eveins',user).then(response => {
	context.dixpatch('getUserEvents');
			 }).catch(err => {
	console.log("addEvent failed:",err);
			 });
		 },
		 // Registration, Login //
		 register(context,user) {
			 return axios.post("/api/users",user).then(response => {
	 context.commit('setUser', response.data.user);
	 context.commit('setLogin',response.data.token);
	 context.commit('setRegisterError',"");
	 context.commit('setLoginError',"");
	 context.dispatch('getFollowing');
	 context.dispatch('getFollowers');
			 }).catch(error => {
	 context.commit('setUser',{});
	 context.commit('setToken','');
	 context.commit('setLoginError',"");
	 if (error.response) {
	   if (error.response.status === 403)
	     context.commit('setRegisterError',"That email address already has an account.");
	   else if (error.response.status === 409)
	     context.commit('setRegisterError',"That user name is already taken.");
	   return;
	 }
	 context.commit('setRegisterError',"Sorry, your request failed. We will look into it.");
			 });
		 },
		 login(context,user) {
			 return axios.post("/api/login",user).then(response => {
	 context.commit('setUser', response.data.user);
	 context.commit('setLogin',true);
	 context.commit('setRegisterError',"");
	 context.commit('setLoginError',"");
	 context.dispatch('getFollowing');
	 context.dispatch('getFollowers');
			 }).catch(error => {
	 context.commit('setLogin',false);
	 context.commit('setRegisterError',"");
	 if (error.response) {
	   if (error.response.status === 403 || error.response.status === 400)
	     context.commit('setLoginError',"Invalid login.");
	   context.commit('setRegisterError',"");
	   return;
	 }
	 console.log(error);
	 context.commit('setLoginError',"Sorry, your request failed. We will look into it.");
			 });
		 },
		 logout(context,user) {
			 context.commit('setUser', {});
			 context.commit('setToken','');
		 },
		 
	}
});
