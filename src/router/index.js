import Vue from 'vue'
import VueRouter from 'vue-router'
import InventoryComponent from '../components/InventoryComponent.vue';
import ReceiptComponent from '../components/ReceiptComponent.vue';
import InventoryJson from '../models/inventory.json';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inventory',
    component: InventoryComponent,
    props: {json:InventoryJson}
  },
  {
    path: '/receipt',
    name: 'Receipt',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: ReceiptComponent
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
