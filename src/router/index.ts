import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Details from '../components/Details.vue'
import AboutView from '../views/AboutView.vue'
import Contact from '../views/Contact.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/details/:id',
      name: 'details',
      component: Details
    },
    {
      path: '/About',
      name: 'About',
      component: AboutView
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: Contact
    }
  ]
})

export default router