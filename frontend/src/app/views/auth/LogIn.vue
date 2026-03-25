<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '@/stores/authStore'
import { useRouter } from 'vue-router'
import BaseButton from '@/shared/components/BaseButton.vue'

const email = ref('')
const password = ref('')
const error = ref('')
const loading = ref(false)

const auth = useAuthStore()
const router = useRouter()

const handleLogin = async () => {
  error.value = ''
  loading.value = true;

  try {
    const user = await auth.login(email.value, password.value)
    if (user.role === 'admin') {
      router.push('/admin/')
    } else if(user.role === 'moderator' || user.role === 'user'){
      router.push('/user')
    }
  } catch (e) {
    error.value = "Email ou senha inválidos"
    console.log(e)
  } finally {
    loading.value = false;
  }
}

const users = ref([
  { username: 'emilys', email: 'emily.johnson@x.dummyjson.com', phone: '+81 965-431-3024', password: 'emilyspass', role: 'admin' },
  { username: 'oliviaw', email: 'olivia.wilson@x.dummyjson.com', phone: '+91 607-295-6448', password: 'oliviawpass', role: 'moderator' },
  { username: 'averyp', email: 'avery.perez@x.dummyjson.com', phone: '+61 731-431-3457', password: 'averyppass', role: 'user' },

  { username: 'michaelw', email: 'michael.williams@x.dummyjson.com', phone: '+49 258-627-6644', password: 'michaelwpass', role: 'admin' },
  { username: 'alexanderj', email: 'alexander.jones@x.dummyjson.com', phone: '+61 260-824-4986', password: 'alexanderjpass', role: 'moderator' },
  { username: 'evelyns', email: 'evelyn.sanchez@x.dummyjson.com', phone: '+1 623-880-6871', password: 'evelynspass', role: 'user' },

  { username: 'sophiab', email: 'sophia.brown@x.dummyjson.com', phone: '+81 210-652-2785', password: 'sophiabpass', role: 'admin' },
  { username: 'avat', email: 'ava.taylor@x.dummyjson.com', phone: '+1 458-853-7877', password: 'avatpass', role: 'moderator' },
  { username: 'logant', email: 'logan.torres@x.dummyjson.com', phone: '+81 507-434-8733', password: 'logantpass', role: 'user' }
])
</script>

<template>
  <section class="flex flex-col items-center justify-center mx-auto bg-[url(../../public/homem.jpg)] bg-center bg-cover bg-linear-to-br from-gray-900 to-gray-800 p-6">

    <div class="h-screen flex flex-row items-center  justify-center py-140 md:py-100 md:px-10 gap-6  max-w-6xl w-[90%]">

      <div class="w-full md:max-w-7xl flex flex-col md:flex-row gap-6">

        <div
        class="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20 shadow-xl hover:border-(--primary) w-full"
        >
          <h2 class="text-2xl font-bold text-white mb-4">Login</h2>

          <from class="p-6 shadow rounded w-full space-y-8"  @submit.prevent="handleLogin">

            <div>
              <label class="text-white text-sm" for="email">
                Email *
              </label>
              <input 
                v-model="email" 
                type="text" 
                class="w-full mt-1 p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none border border-white/10 hover:border-(--primary) focus:border-(--primary) focus:border" placeholder="Seu nome"
                id="name"
              />
            </div>

            <div>
              <label class="text-white text-sm" for="email">Password *</label>
              <input 
                v-model="password" 
                type="password" 
                class="w-full mt-1 p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none border border-white/10 hover:border-(--primary) focus:border-(--primary) focus:border" placeholder="Senha"
                id="name"
              />
            </div>
          
            <BaseButton :onClick="handleLogin" :loading="loading">
              Entrar
            </BaseButton>
            <p v-if="error" class="text-red-500 mt-2">
              {{ error }}
            </p>
          </from>
        </div>
         <!-- USERS LIST -->
        <div class="w-full bg-white/10 backdrop-blur-lg p-4 rounded-2xl border border-white/20 hover:border-(--primary) shadow-xl">
          <h3 class="text-white font-bold mb-3">Usuários de Teste</h3>
        
          <div class="max-h-96 overflow-auto pr-2">
            <div
              v-for="user in users"
              :key="user.username"
              class="mb-2 p-3 bg-white/5 rounded hover:bg-white/10 transition border text-white/20  hover:border-(--primary)"
            >
              <p class="text-white text-sm"><b>Nome:</b> {{ user.username }}</p>
              <p class="text-white text-sm"><b>Email:</b> {{ user.email }}</p>
              <p class="text-white text-sm"><b>Senha:</b> {{ user.password }}</p>
        
              <p class="text-sm">
                <b class="text-white">Role:</b>
                <span
                  :class="{
                    'text-red-400 font-bold': user.role === 'admin',
                    'text-yellow-400 font-bold': user.role === 'moderator',
                    'text-green-400 font-bold': user.role === 'user'
                  }"
                >
                  {{ user.role }}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
    
    </section>
</template>