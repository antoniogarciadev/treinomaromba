<template>
  <!-- HEADER -->
  <header class="fixed top-0 z-50 w-full bg-black/35 backdrop-blur-md text-white flex items-center justify-center">
    <div class="mx-auto flex h-16 w-[90%] max-w-6xl items-center justify-between">
      <RouterLink to="/" class="text-2xl font-bold">Treinos Marombas
      </RouterLink>

      <nav class="hidden items-center gap-8 lg:flex">
        <RouterLink to="/" class="hover:text-(--primary) transition-colors">Home</RouterLink>
        <RouterLink to="/about" class="hover:text-(--primary) transition-colors">About</RouterLink>
        <RouterLink to="/login" class="hover:text-(--primary) transition-colors">Entrar</RouterLink>
        <RouterLink to="/singup" class="transition-colors border hover:bg-(--primary) border-(--primary) text-white py-2 px-4 rounded-lg">Cadastrar</RouterLink>
      </nav>

      <button
        class="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/30 text-white hover:bg-white/20"
        @click="toggleMenu"
        aria-label="Toggle menu"
      >
        <i v-if="!isOpen" class="ri-menu-fill"></i>
        <i v-else class="ri-close-fill"></i>
      </button>
    </div>
  </header>

  <!-- 🔥 OVERLAY FORA DO HEADER -->
  <transition name="fade-slide">
    <div
      v-if="isOpen"
      class="w-64 h-full fixed right-0 inset-0 z-40 bg-black/35 backdrop-blur-md lg:hidden"
      @click.self="toggleMenu"
    >
      <nav class="absolute top-14 h-full w-64  p-6 flex flex-col gap-5">
        <RouterLink to="/" @click="toggleMenu" class="link transition-colors">
          Home
        </RouterLink>
        <RouterLink to="/about" @click="toggleMenu" class="link transition-colors">
          About
        </RouterLink>
        <RouterLink to="/login" @click="toggleMenu" class="link transition-colors">
          Entrar
        </RouterLink>
        <RouterLink to="/singup" @click="toggleMenu" class="transition-colors border hover:bg-(--primary) border-(--primary) text-white text-center py-2 px-4 rounded-lg">
          Cadastrar
        </RouterLink>
      </nav>
    </div>
  </transition>
</template>

<script lang="ts" setup>
  import { RouterLink } from 'vue-router'
  import { ref } from 'vue'

  const isOpen = ref(false)

  function toggleMenu() {
    isOpen.value = !isOpen.value
  }
</script>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.26s ease;
}
.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateX(10px);
}
</style>
