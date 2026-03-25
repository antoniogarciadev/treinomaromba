<script setup lang="ts">
import { useAuthStore } from '@/stores/authStore'
import { ref } from 'vue'

const auth = useAuthStore()
const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <div class="flex">
    <!-- overlay mobile -->
    <div
      v-if="isOpen"
      @click="toggleMenu"
      class="fixed inset-0 bg-black/50 z-40 lg:hidden"
    />

    <!-- Sidebar -->
    <aside
      :class="[
        'w-64 bg-(--bg) text-white p-4 flex flex-col gap-6 transition-transform duration-300',

        // MOBILE (sidebar flutuante)
        'fixed top-16 left-0 z-50 h-[calc(100vh-4rem)]',

        // CONTROLE DE VISIBILIDADE
        isOpen ? 'translate-x-0' : '-translate-x-full',

        // DESKTOP (sidebar fixa, sem scroll)
        'lg:fixed lg:top-16 lg:left-0 lg:h-[calc(100vh-4rem)] lg:translate-x-0'
      ]"
    >
      <slot />

      <router-link to="/login" @click="auth.logout" class="flex gap-2 mt-auto hover:text-red-400 transition-colors">
        <i class="ri-logout-circle-r-line"></i>
        Sair
      </router-link>
    </aside>

    <!-- Conteúdo principal -->
    <div class="flex-1 min-h-screen lg:ml-64">
      <header class="fixed top-0 left-0 z-50 w-full h-16 px-4 flex items-center justify-between bg-(--bg) border-b border-(--primary) text-white">
        <div class="flex items-center gap-3">
          <!-- botão mobile -->
          <button class="lg:hidden text-2xl" @click="toggleMenu">
            <i class="ri-menu-line"></i>
          </button>
          <h2 class="text-lg md:text-xl font-bold">Treino Maromba</h2>
        </div>

        <p class="hidden md:block font-bold">
          {{ auth.user?.role === 'admin' ? 'Painel do Administrador' : 'Painel do Usuário' }}
        </p>

        <p class="text-sm md:text-base">
          Olá, <span class="font-bold">{{ auth.user?.username }}</span>
        </p>
      </header>

      <!-- Conteúdo interno -->
      <main class="pt-16 p-4">
        <router-view />
      </main>
    </div>
  </div>
</template>