import { defineStore } from 'pinia'
import type { User } from '@/types/user'
import { getUsers, updateUser } from '@/services/userService' // 🔥 importa aqui
import { getRole } from '@/utils/getRole'

// let role: string;

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: JSON.parse(localStorage.getItem('user') || 'null') as User | null
  }),

  actions: {
    async login(email: string, password: string) {
      const users = await getUsers()

      const found = users.find(
        (u) => u.email === email && u.password === password
      )

      if (!found) throw new Error('Credenciais inválidas')

      const userWriteRole = {
        id: found.id,
        username: found.username,
        email: found.email,
        phone: found.phone,
        password: found.password,
        role: found.role ?? getRole(found.email, found.id)
      }

      this.user = userWriteRole
      localStorage.setItem('user', JSON.stringify(userWriteRole))

      return userWriteRole
    },

    // async login(email: string, password: string) {
    //   const users = await getUsers()

    //   const found = users.find(
    //     (u) => u.email === email && u.password === password
    //   )

    //   if (!found) throw new Error('Credenciais inválidas');

    //   const userWriteRole = {
    //     ...found,
    //      role: getRole(found.email, found.id)
    //   }

    //   // const userWriteRole = {
    //   //   ...found,
    //   //   role: found.email ===  "antonio@gmail.com" && "ervin@gmail.com" ? "admin" : "user"
    //   // }

    //   this.user = userWriteRole
    //   localStorage.setItem('user', JSON.stringify(userWriteRole));

    //   return userWriteRole
    // }

    logout() {
      this.user = null
      localStorage.removeItem('user')
    },

    // 🔥 👉 ADICIONA ISSO AQUI
    async updateProfile(data: Partial<User>) {
      if (!this.user) return

      const updated = await updateUser(this.user.id, data)

      // atualizar estado
      this.user = updated

      // atualizar localStorage
      localStorage.setItem('user', JSON.stringify(updated))
    }
  },

  getters: {
    isAdmin: (state) => state.user?.role === 'admin'
  }
})