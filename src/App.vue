<template>
	<div id="app">
		<nav-bar/>
		<router-view/>
		<div id="footer-home">
	  		<footer>
				<p>Page by Benjamin Davis</p>
				<p>https://github.com/benjaminhdavis8/cs260_1proj</p>
			</footer>
		</div>
	</div>
</template>

<script>
 import NavBar from './components/NavBar';
 export default {
	 name: 'App',
	 components: { NavBar }
 }
</script>

<style>
/*-----Navigation--------*/
#navigation-bar {
	top: 0;
	z-index: 1;
	width: 100%;
	background-color: rgb(37, 39, 77);
}
.nav-list {
	list-style-type: none;
	margin: 0;
	padding: 0;
	overflow: hidden;
	background-color: #25274d;
}
.nav-item {
	float: left;
	text-decoration: none;
	display: inline;
}
a:hover {
	background-color: #464866;
	color: white;
}
a {
	display: block;
	color: white;
	text-align: center;
	padding: 14px 16px;
	text-decoration: none;
}
.right {
	float: right;
}

nav form {
	margin-top: 8px;
}

nav button {
	margin-right: 8px;
}

/*-------General styles-----*/

p {
	max-width: 600px;
}

body {
	font-family: 'Encode Sans';
}

.blurb {
	height: 300px;
	width: 600px;
}

.content {
	padding: 10px;
}

/* {{{section}}} grid layout -------------------------*/

.grid-layout {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 10px;
	grid-auto-rows: minmax(100px,auto);
	background-color: #29648A;
	padding: 10px;
	margin-top: 10px;
}

.small-thumb-nail {
	overflow: hidden;
	height: 10%;
	width: 10%;
	float: left;
}

.profile-short {
	background-color: white;
	padding: 10px;
	display: flex;
	flex-direction: row;
}

.short-inner {
	display: flex;
	flex-direction: column;
}


.short-info {
	font-size:"8";
}


/* {{{section}}} footer   ----------------------------*/

footer p {
	color: #464866;
}

#footer {
	position: relative;
	bottom: 0;
	height: 250px;
	z-index: 10;
	margin-left: 250px;
	padding: 10px;
}

#footer-home {
	position: relative;
	bottom: 0;
	height: 250px;
	z-index: 10;
	margin-left: 0;
	padding: 10px;
}

/* {{{section}}} Side menue -----------------------*/
#menue {
	background-color: #AAABB8;
	text-align: left;
	position: absolute;
	padding: 0;
	height: 150%;
	width: 250px;
}

#menue hr {
	color: #464866;
}

.thumb-nail {
	margin-top: 20px;
	margin-left: 10px;
	padding: 20px;
}

.menue-inner {
	margin-left:10px;
	padding:20px;
}

/* {{{section}}} Body  -----------------------------*/
#body {
	margin-left: 250px;
	position: relative;
	min-height: 75%;
}

#body-home {
	margin-left: 0px;
	position: relative;
	min-height: 75%;
}

.grayText {
	color: #AAABBB;
	text-shadow: -4px -5px 20px rgba(50,50,50,1);
}

</style>
