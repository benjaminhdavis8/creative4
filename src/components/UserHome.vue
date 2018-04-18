<template>
	<div class="feed">
		<event-feed v-bind:events="events" />
	</div>
</template>

<script>
 import EventList from './EventList';
 export default {
   name: 'UserHome',
   data () {
     return {
     }
   },
   components: { EventList },
   computed: {
     events: function() {
       return this.$store.getters.feed;
     },
   },
   created: function() {
     this.$store.dispatch('getUsersEvents');
   },
   methods: {
   }
 }
</script>

<style scoped>
 .feed {
     width: 600px;
 }
 .buttonWrap {
     width: 100%;
     display: flex;
 }
 button {
     margin-left: auto;
     height: 2em;
     font-size: 0.9em;
 }
 textarea {
     width: 100%;
     height: 5em;
     padding: 2px;
     margin-bottom: 5px;
     resize: none;
     box-sizing: border-box;
 }
</style>
