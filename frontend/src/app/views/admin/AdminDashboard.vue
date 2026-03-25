<script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import type { User } from '@/types/user';
  import { getUsers } from '@/services/userService';

  const users = ref<User[]>([]);

  const tam = ref(0)
  const STORAGE_KEY = 'events'

  const loadUsers = async () => {
    users.value = await getUsers();
    totEvent();
  }
  onMounted(loadUsers)

  const totEvent = ()=> {
    const data = localStorage.getItem(STORAGE_KEY)
    tam.value = JSON.parse(data || '[]').length;
    console.log(tam)
  }

</script>

<template>

  <section class="h-screen flex flex-col gap-4 p-10">
    <div class="flex flex-col md:flex-row  justify-center gap-4 p-10">
    
      <div class="group bg-(--bg) text-white border border-white/20 hover:border-(--primary) hover:drop-shadow-xl hover:drop-shadow-amber-300/40 hover:-translate-y-3 ease-in-out duration-200 py-10 p-6 rounded-2xl shadow-md w-full max-w-md flex flex-col items-start gap-5 ">
        <i class="ri-user-community-fill text-3xl group-hover:text-(--primary)"></i>
        <h1 class="text-2xl font-bold mb-4 text-center">
          Usuários Cadastrados
        </h1>
        <p class="text-xl" v-if="users.length === 0">Sem Users</p>
        <p class="text-xl" v-else>{{ users.length }} Usuarios</p>
      </div>

      <div class="group bg-(--bg) text-white border border-white/20 hover:border-(--primary) hover:drop-shadow-xl hover:drop-shadow-amber-300/40 hover:-translate-y-3 ease-in-out duration-200 py-10 p-6 rounded-2xl shadow-md w-full max-w-md flex flex-col items-start gap-5 ">
        <i class="ri-calendar-event-line text-3xl group-hover:text-(--primary)"></i>
        <h1 class="text-2xl font-bold mb-4 text-center">
          Eventos
        </h1>
        <p class="text-xl" v-if="tam === 0">Sem Eventos</p>
        <p class="text-xl" v-else>{{ tam }} Eventos</p>
      </div>

      <div class="group bg-(--bg) text-white border border-white/20 hover:border-(--primary) hover:drop-shadow-xl hover:drop-shadow-amber-300/40 hover:-translate-y-3 ease-in-out duration-200 py-10 p-6 rounded-2xl shadow-md w-full max-w-md flex flex-col items-start gap-5 ">
        <i class="ri-meteor-line text-3xl group-hover:text-(--primary)"></i>
        <h1 class="text-2xl font-bold mb-4 text-center">
          Treinadores
        </h1>
        <p>Musculação: Artur Frasc.</p>
      </div>

    </div>
  </section>
</template>