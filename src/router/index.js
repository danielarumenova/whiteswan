import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WhiteShirt from '../views/WhiteShirt.vue'
import BlackShirt from '../views/BlackShirt.vue'
import ContactView from '../views/ContactView.vue'
import CartView from '../views/CartView.vue'
import OrderForm from '../views/OrderForm.vue'
import EventsView from '../views/EventsView.vue'
import ShopView from '../views/ShopView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactView
  },
  {
    path: '/whiteShirt',
    name: 'WhiteShirt',
    component: WhiteShirt
  },
  {
    path: '/blackShirt',
    name: 'BlackShirt',
    component: BlackShirt
  },
  {
    path: '/cart',
    name: 'CartView',
    component: CartView
  },
  {
    path: '/order',
    name: 'OrderForm',
    component: OrderForm
  },
  {
    path: '/events',
    name: 'EventsView',
    component: EventsView
  },
  {
    path: '/shop',
    name: 'ShopView',
    component: ShopView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
