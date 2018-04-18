<template>
	<nav id="navigation-bar">
		<ul class='nav-list'>
			<li class='nav-item'> <router-link to="/">Home</router-link> </li>
			<li class='nav-item'> <router-link to="/people">People</router-link> </li>
			<li class='nav-item'> <router-link to="/groups">Groups</router-link> </li>
			<li class='nav-item'> <router-link to="/chat">Chat</router-link> </li>
			<li class='nav-item'> <router-link to="/profile">Profile</router-link> </li>
			<li class='nav-itme right' v-if="loggedIn">
				<router-link :to="{ name: 'UserHome', params: {userID: user.id}}">{{user.username}}</router-link> <a @click="logout" to='#'>Logout</a>
			<li class='nav-item right' v-else>
				<form v-on:submit.prevent="login" placeholder="Login">
					<input v-model="email" placeholder="Email Address">
					<input v-model="password" type="password" placeholder="Password">
					<button id="primary" type="submit">Login</button>
				</form>
			</li>
		</ul>
	</nav>
</template>

<script>
 export default {
	 name: 'NavBar',
	 data () {
		 return {
			 email: '',
			 password: '',
		 }
 	 },
	 computed: {
		 user: function() {
			 return this.$store.getters.user;
		 },
		 loggedIn: function() {
			 return this.$store.getters.loggedIn;
		 }	
	 },
	 methods: {
		 login: function() {
			 this.$store.dispatch('login',{
				 email: this.email,
				 password: this.password,
			 }).then(user => {
				 this.email = '';
				 this.password = '';
				 document.getElementById("primary").style.display = "none";
			 });
		 },
		 logout: function() {
			 this.$store.display('logout');
			 document.getElementById("primary").style.dispatch = "block";
		 }
	 }
 }
</script>

<style>
</styple>
