import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/usuarios',
    name: 'usuarios',
    component: () => import('../views/Usuarios.vue')
  },
  {
    path: '/eventos',
    name: 'eventos',
    component: () => import('../views/Eventos.vue')
  },
  {
    path: '/usuarios/nuevo',
    name: 'usuarioNuevo',
    component: () => import('../views/UsuarioNuevo.vue')
  },
  {
    path: '/eventos/nuevo',
    name: 'eventoNuevo',
    component: () => import('../views/EventoNuevo.vue')
  },
  {
    path: '/usuarios/editar',
    name: 'usuarioNuevo',
    component: () => import('../views/UsuarioEditar.vue')
  },
  {
    path: '/eventos/editar',
    name: 'eventoNuevo',
    component: () => import('../views/EventoEditar.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
