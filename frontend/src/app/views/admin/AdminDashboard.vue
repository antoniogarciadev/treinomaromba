<script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import type { User } from '@/types/user';
  import { getUsers } from '@/services/userService';
  import CardDashboard from '@/shared/components/CardDashboard.vue';

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

  <section class=" flex flex-col gap-4 py-20">
    <div class="flex flex-col md:flex-row  justify-center gap-4">

      <CardDashboard>
        <i class="ri-user-community-fill text-3xl group-hover:text-(--primary)"></i>
        <h1 class="text-2xl font-bold mb-4 text-center">
          Usuários Cadastrados
        </h1>
        <p class="text-xl" v-if="users.length === 0">Sem Users</p>
        <p class="text-xl" v-else>{{ users.length }} Usuarios</p>
      </CardDashboard>

      <CardDashboard>
        <i class="ri-calendar-event-line text-3xl group-hover:text-(--primary)"></i>
        <h1 class="text-2xl font-bold mb-4 text-center">
          Eventos
        </h1>
        <p class="text-xl" v-if="tam === 0">Sem Eventos</p>
        <p class="text-xl" v-else>{{ tam }} Eventos</p>
      </CardDashboard>

      <CardDashboard>
        <i class="ri-meteor-line text-3xl group-hover:text-(--primary)"></i>
        <h1 class="text-2xl font-bold mb-4 text-center">
          Treinadores
        </h1>
        <p>Musculação: Artur Frasc.</p>
      </CardDashboard>

    </div>
  </section>
</template>
