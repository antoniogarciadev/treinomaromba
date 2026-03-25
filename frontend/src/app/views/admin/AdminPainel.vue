<script setup lang="ts">
  import UsersPainel from '../UsersLayout.vue';
</script>

<template> 
    <UsersPainel>
      <h2 class="text-xl mb-6">Admin</h2>
      <router-link to="/admin" class="flex gap-2 link"><i class="ri-home-9-fill"></i>Inicio</router-link>
      <router-link to="/admin/users" class="flex gap-2 link"><i class="ri-user-community-fill"></i>Usuarios</router-link>
      <router-link to="/admin/events" class="flex gap-2 link"><i class="ri-calendar-line"></i>Eventos</router-link>
      <router-link to="/admin/profile" class="flex gap-2 link"><i class="ri-user-line"></i>Perfil</router-link>
    </UsersPainel>
</template>