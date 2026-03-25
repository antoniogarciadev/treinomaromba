import { createRouter, createWebHistory } from 'vue-router' 
import { routes } from './routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

// 🔥 PROTEÇÃO AQUI
router.beforeEach((to, _, next) => {
  const user = JSON.parse(localStorage.getItem('user') || 'null')

  // 🔐 rota só para admin
  if (to.meta.requiresAdmin && user?.role !== 'admin') {
    return next('/login')
  }

  // 🔐 rota para qualquer usuário logado
  if (to.meta.requiresAuth && !user) {
    return next('/login')
  }

  next()
})

export default router
