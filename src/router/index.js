import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import MainView from '../views/MainView.vue'


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
        path: '/milestones',
        name: 'milestones',
        component: MainView
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;