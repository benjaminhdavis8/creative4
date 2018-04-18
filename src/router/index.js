import Vue from 'vue'
import Router from 'vue-router'
import Chat from '@/components/Chat'
import EventList from '@/components/EventList'
import Groups from '@/components/Groups'
import HomePage from '@/components/HomePage'
import Navbar from '@/components/NavBar'
import Profile from '@/components/Profile'
import People from '@/components/People'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
	{
		path: '/chat',
		name: 'Chat',
		component: Groups
	},
	{
		path: '/groups',
		name: 'Groups',
		component: Groups
	},
	{
		path: '/',
		name: 'HomePage',
		component: HomePage
	},
	{
		path: '/profile',
		name: 'Profile',
		component: Profile
	},
	{
		path: '/people',
		name: 'People',
		component: People
	}
	]
})
