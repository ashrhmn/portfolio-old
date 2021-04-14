import { createRouter, createWebHashHistory } from 'vue-router'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Portfolio from '../views/Portfolio.vue'

const routes = [{
    path: '/',
    name: 'About',
    component: About
}, {
    path: '/contact',
    name: 'Contact',
    component: Contact
}, {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio
}]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router