import { createRouter, createWebHistory } from 'vue-router'

import Home from '../components/Home.vue'
import About from '../components/About.vue'
import RegistrationForm from '../components/RegistrationForm.vue'


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/milestone',
        name: 'Minestone',
        component: Milestone
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;