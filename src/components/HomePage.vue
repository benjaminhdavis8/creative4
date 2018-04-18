<template>
  <div>
    <div v-if="loggedIn">
      <UserHome/>
    </div>
    <div v-else>
      <welcome-page/>
    </div>
  </div>
</template>

<script>
 import WelcomePage from './WelcomePage';
 import UserHome from './UserHome';
 export default {
   name: 'HomePage',
   components: {WelcomePage,UserHome},
   computed: {
     loggedIn: function() {
       if(this.$store.getters.loggedIn) console.log("loged in!");
       else console.log("not loged in");
       return this.$store.getters.loggedIn; 
     },
   },
 }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<styles scoped>
</styles>
