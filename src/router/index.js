import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('../components/HomePage/Home_main')
const Login = () => import('../components/LoginPage/Login_main')
const Register = () => import('../components/RegisterPage/Register_main')
const Item = () => import('../components/ItemListPage/ItemListPage_main')
const ItemDetail = () => import('../components/ItemDetail/ItemDetail_main')
const Error = () => import('../components/ErrorPage/Error_main')
const Shop = () => import('../components/ShoppingPage/Shpping_main')
const Pay = () => import('../components/PayPage/Pay_main')
const Search = () => import('../components/SearchPage/Search_main')
const test = () => import('../components/Test')
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/test',
      component: test,
      name: 'test'
    },
    {
      path: '/home',
      component: Home,
      name: 'Home'
    },
    {
      path: '/login',
      component: Login,
      name: 'Login'
    },
    {
      path: '/register',
      component: Register,
      name: 'Register'
    },
    {
      path: '/item_list/:title',
      component: Item,
      name: 'Item'
    },
    {
      path: '/item_detail',
      component: ItemDetail,
      name: 'ItemDetail'
    },
    {
      path: '/shop',
      component: Shop,
      name: 'Shop'
    },
    {
      path: '/pay',
      component: Pay,
      name: 'Pay'
    },
    {
      path: '/search',
      component: Search,
      name: 'Search'
    },
    {
      path: '/*',
      component: Error,
      name: 'Error'
    }
  ],
  // mode: 'history',
  linkActiveClass: 'active'
})
router.beforeEach((to, from, next) => {
  if (to.name === 'Shop' || to.name === 'Pay') {
    if (!sessionStorage.getItem('username')) {
      next({name: 'Login'})
    }
  }
  next()
})
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
})
export default router
