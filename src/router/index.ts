
import { createRouter, createWebHashHistory } from 'vue-router';

import Login from '../views/Login.vue';
import Home from '../views/Home.vue';
import Haha from '../components/haha/index.vue';

const routes = [
    { path: '/', name: 'index', component: Login },
    { path: '/home', name: 'home', component: Home },
    { path: '/haha', name: 'haha', component: Haha },
]
  

const router = createRouter({
    history: createWebHashHistory(),
    routes, 
})

export default router;