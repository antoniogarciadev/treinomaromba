<template>
  <header class="fixed top-0 left-0 z-50 w-full bg-black/35 backdrop-blur-md text-white">
    <div class="mx-auto flex h-16 w-[90%] max-w-6xl items-center justify-between">
      <RouterLink to="/" class="text-2xl font-bold">Treinos Marombas</RouterLink>

      <nav class="hidden items-center gap-8 lg:flex">
        <RouterLink class="hover:text-yellow-300 transition-colors" to="/">Home</RouterLink>
        <RouterLink class="hover:text-yellow-300 transition-colors" to="/about">About</RouterLink>
        <RouterLink class="hover:text-yellow-300 transition-colors" to="/contact"
          >Contact</RouterLink
        >
      </nav>

      <button
        class="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/30 text-white hover:bg-white/20"
        @click="toggleMenu"
        :aria-expanded="isOpen.toString()"
        aria-label="Toggle menu"
      >
        <span class="sr-only">Open navigation menu</span>

        <i v-if="!isOpen" class="ri-menu-fill text-lg"></i>
        <i v-else class="ri-close-fill text-lg"></i>
      </button>
    </div>

    <transition name="fade-slide">
      <div v-if="isOpen" :class=" isOpen ? 'fade-slide-enter-active': 'fade-slide-leave-active'" class="relative inset-0 z-40 top-0 lg:hidden transition-all duration-100" @click.self="toggleMenu">
        <nav class="flex flex-col gap-5 h-full w-24 p-6">
          <RouterLink @click.native="toggleMenu" class="text-lg hover:text-yellow-300" to="/"
            >Home</RouterLink
          >
          <RouterLink @click.native="toggleMenu" class="text-lg hover:text-yellow-300" to="/about"
            >About</RouterLink
          >
          <RouterLink @click.native="toggleMenu" class="text-lg hover:text-yellow-300" to="/contact"
            >Contact</RouterLink
          >
        </nav>
      </div>
    </transition>
  </header>
</template>

<script setup>
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
