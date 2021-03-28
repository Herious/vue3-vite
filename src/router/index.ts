
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';

import Login from '../views/Login.vue';
import Home from '../views/Home.vue';
import Haha from '../components/haha/index.vue';
import Table from '../components/table/index.vue';

const routes = [
  { path: '/login', name: 'login', component: Login },

  { path: '/', 
    name: 'home', 
    component: Home,
    children: [
      { path: '/haha', name: 'haha', component: Haha },
      { path: '/table', name: 'table', component: Table },
    ]
  },
  // { path: '/haha', name: 'haha', component: Haha },
]
  
export const initRouter = (routersJson: JSON) => {
  console.log('qw')
}
const router = createRouter({
  history: createWebHistory(),
  routes, 
})

export default router;