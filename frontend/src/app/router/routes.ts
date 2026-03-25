import AppLayout from "@/shared/layout/AppLayout.vue"
import type { RouteRecordRaw } from "vue-router"
import HomeView from "../views/HomeView.vue"
import AboutView from "../views/AboutView.vue"

export const routes: RouteRecordRaw[] = [
    // Rotas do administrador
    {
        path: '/admin',
        component: () => import('@/app/views/admin/AdminPainel.vue'),
        meta: { requiresAdmin: true },
        children: [
            {
                path: '',
                component: () => import('@/app/views/admin/AdminDashboard.vue')
            },
            {
                path: 'users',
                component: () => import('@/app/views/admin/UsersList.vue')
            },
            {
                path: 'events',
                component: () => import('@/app/views/admin/EventsView.vue')
            },
            {
                path: 'profile',
                component: () => import('@/app/views/admin/AdminProfile.vue')
            }
        ]
    },
    // Rotas do Usuário
    {
        path: '/user',
        component: () => import('@/app/views/user/UserPainel.vue'),
        meta: { requiresAuth: true },
        children: [
            {
                path: '',
                component: () => import('@/app/views/user/UserDashboard.vue'),
                meta: { requiresAuth: true }
            },
            {
                path: '/user/profile',
                component: () => import('@/app/views/user/UserProfile.vue'),
                meta: { requiresAuth: true }
            },
            {
                path: '/user/events',
                component: () => import('@/app/views/user/UserEvents.vue'),
                meta: { requiresAuth: true }
            },
        ]
    },
    // Rotas do Rotas públicas
    {
        path: "/",
        component: AppLayout,
        children: [
            {
                path: "",
                name: "home",
                component: HomeView,
            },
            {
                path: "/about",
                name: "about",
                component: AboutView,
            },
            {
                path: '/login',
                name: "login",
                component: () => import('@/app/views/auth/LogIn.vue'),
            },
            {
                path: '/singup',
                name: 'singup',
                component: () => import('@/app/views/auth/SingUp.vue'),
            },
            
        ]
    }
]


