<script setup lang="ts">
  import UsersLayout from '../UsersLayout.vue';
</script>

<template>
  <UsersLayout>
    <h2 class="text-xl mb-6">User</h2>
    <router-link to="/user" class="flex gap-2 link"><i class="ri-home-9-fill"></i>Inicio</router-link>
    <router-link to="/user/events" class="flex gap-2 link"><i class="ri-calendar-line"></i>Eventos</router-link>
    <!-- <router-link to="/user/plans" class="flex gap-2 link"><i class="ri-stack-line"></i>Planos</router-link> -->
    <!-- <router-link to="/user/personal" class="flex gap-2 link"><i class="ri-open-arm-fill"></i>Treinadores</router-link> -->
    <router-link to="/user/profile" class="flex gap-2 link"><i class="ri-user-line"></i>Perfil</router-link>
  </UsersLayout>
</template>