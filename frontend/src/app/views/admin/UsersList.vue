<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getUsers, deleteUser } from '@/services/userService'
import type { User } from '@/types/user'
import UserModal from '@/shared/components/admin/UserModal.vue'

const users = ref<User[]>([])
const showModal = ref(false) // Modal para criar/editar usuário
const selectedUser = ref<User | null>(null)
const loading = ref(false);
const err = ref('');

// 🔹 Carregar todos os usuários
const loadUsers = async () => {
  err.value = ''
  loading.value = true;
  try {
    users.value = await getUsers();
  } catch (e) {
    err.value = "Erro: " + e;
    console.log(e)
  } finally {
    loading.value = false;
  }
}

// 🔹 Rodar ao montar
onMounted(loadUsers)

// 🔹 Deletar usuário
const handleDelete = async (id: number) => {
  if (!confirm('Tem certeza que quer excluir este usuário?')) return
  await deleteUser(id)
  loadUsers() // recarrega a lista
}

// 🔹 Abrir modal para criar
const openCreate = () => {
  selectedUser.value = null
  showModal.value = true
}

// 🔹 Abrir modal para editar
const openEdit = (user: User) => {
  selectedUser.value = user
  showModal.value = true
}
</script>

<template>
  <div class="p-6">
    <div class="flex justify-between mb-4">
      <h1 class="text-2xl font-bold">Usuários</h1>
      <button @click="openCreate" class="bg-green-600 text-white px-3 py-1 rounded">
        Novo
      </button>
    </div>

    <!-- DESKTOP TABLE -->
    <div class="hidden md:block overflow-auto max-h-125 min-h-[78vh] border border-(--primary) rounded-lg">
      <table class="min-w-175 w-full border-collapse">

        <thead class="bg-(--primary) sticky top-0 z-10">
          <tr>
            <th class="p-2 border">Nome</th>
            <th class="p-2 border">Email</th>
            <th class="p-2 border">Telefone</th>
            <th class="p-2 border">Role</th>
            <th class="p-2 border">Ações</th>
          </tr>
        </thead>

        <tbody class="text-white relative">
          <tr v-if="loading">
          <td colspan="4" class="py-10">
          <div class="flex flex-col items-center gap-3">

                <div class="w-8 h-8 border-4 border-white/20 border-t-yellow-400 rounded-full animate-spin"></div>

                <span class="text-white text-sm">Carregando usuários...</span>

              </div>
            </td>
          </tr>
          <tr v-for="user in users" :key="user.id" class="hover:bg-amber-50/30">
            <td class="p-2 border">{{ user.username }}</td>
            <td class="p-2 border truncate max-w-50">{{ user.email }}</td>
            <td class="p-2 border">{{ user.phone }}</td>
            <td class="p-2 border">{{ user.role }}</td>
            <td class="p-2 border flex gap-2">
              <button @click="openEdit(user)" class="bg-blue-600 px-2 py-1 rounded w-full">
                Editar
              </button>
              <button @click="handleDelete(user.id)" class="bg-red-600 px-2 py-1 rounded w-full">
                Excluir
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- MOBILE CARDS -->
    <div class="md:hidden flex flex-col gap-4">
      <div
        v-for="user in users"
        :key="user.id"
        class="bg-white/10 border border-white/20 rounded-xl p-4 text-white shadow"
      >
        <p><span class="font-bold">Nome:</span> {{ user.username }}</p>
        <p class="truncate"><span class="font-bold">Email:</span> {{ user.email }}</p>
        <p><span class="font-bold">Telefone:</span> {{ user.phone }}</p>

        <!-- ROLE COM COR -->
        <p>
          <span class="font-bold">Role:</span>
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

        <!-- AÇÕES -->
        <div class="flex gap-2 mt-3">
          <button @click="openEdit(user)" class="bg-blue-600 px-3 py-1 rounded w-full">
            Editar
          </button>
          <button @click="handleDelete(user.id)" class="bg-red-600 px-3 py-1 rounded w-full">
            Excluir
          </button>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <UserModal
      v-if="showModal"
      :user="selectedUser"
      @close="showModal = false"
      @saved="loadUsers"
    />
  </div>
</template>