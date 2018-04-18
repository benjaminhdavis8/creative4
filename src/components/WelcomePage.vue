<template>
	<div>
		<div id="banner">
			<div class="banner-outer">
				<div class="stage">
					<div class="item">
						<img src="/static/wickimediawatterwallpaper.jpg" alt="Welcome!">
						<div class="panel_center">
							<h1 class="white-header">
							Synth
							</h1>
							<p class="grayText">We can be more together</p>
						</div><!--/panle -->
					</div><!--/item -->
				</div><!--/stage -->
			</div><!--/outer -->
		</div><!--/banner -->
		<div class="content">
			<h3> Sign-up to connect with motivated people everywhere</h3>
			<form v-on:submit.prevent="register">
				<p>1. Chose a user name (This is how others will see you in synth).</p>
				<input class="narrow" v-model="username" placeholder="User Name">
				<p>2. Create and account.</p>
				<input class="wide" v-model="name" placeholder="First and Last Name"><br/>
				<input class="narrow" v-model="email" placeholder="Email Address">
				<input class="narrow" type="password" v-model="password" placeholder="Password">
				<button class="alternate" type="submit">Register</button>
			</form>
			<p class="error">{{registerError}}</p>
		</div><!--/content-->
	</div>
</template>

<script>
export default {
	name: 'WelcomePage',
	data () {
		return {
			username: '',
			email: '',
			password: '',
			name: '',
		}
	},
	computed: {
		registerError: function() {
			return this.$store.getters.registerError;
		},
	},
	methods: {
		register: function() {
			this.$store.dispatch('register',{
				username: this.username,
				email: this.email,
				password: this.password,
				name: this.name,
			});
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/* {{{sectoin}}} Banner  ---------------------------*/
#banner {
	text-rendering: optimizeLegibility;
	position: relative;
	z-index: 2;
	width: 100%;
	float: left;
	clear: both;
	overflow: hidden;
	background: #fafafa;
	height:250px;
	z-index: 5;	
	padding: 0;
	margin: 0;
}

.banner-outer {
	width: 100%;
	display: block;
	height: inherit;
}

.stage {
	position: relative;
	overflow: hidden;
	width: 100%;
	height: inherit;
	z-index: 2;
}

.item {
	height: inherit;
	z-index: 3;
}

.panel {
	text-align: center;
	top: 50%;
	position: absolute;
	border: 0;
	height: inherit;
	width: 100%;
	left: 25%;
	z-index: 4;
}

.panel_center {
	text-align: center;
	position: absolute;
	top: 50%;
	border: 0;
	z-index: 5;
	transform: translateY(-50%);
	left: 40%;
}

.white-header {
	color: #AAABB8;
	text-shadow: -4px -5px 20px rgba(50,50,50,1);
	color: white;
	
}


</style>
