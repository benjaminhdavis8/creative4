<template>
	<div>
		<div class="content">
			<h1>Profiel</h1>
			<p>Not a member...Regester below.</p>
			<form action="https://formspree.io/ben2squared@byu.edu" method="POST">
				<p>First Name:</p>
				<input fName="first-name" type="text"><br/>
				<p>Last Name:</p>
				<input lName="last-name" type="text"><br/>
				<p>Password:  </p>
				<input password="password" type="password"><br/>
				<p>Add a short introduction: (300 characters)</p>
				<textarea class="blurb">About you</textarea><br>
				<input value="Register" type="submit">
			</form>
		</div>
	</div>
</template>

<script>
 export default {
	 name: 'Profile',
 }
</script>
