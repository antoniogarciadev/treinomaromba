<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useAuthStore } from '@/stores/authStore'
import BaseButton from '@/shared/components/BaseButton.vue'

const auth = useAuthStore()

// form
const form = ref({
  name: '',
  email: '',
  phone: '',
  password: ''
})

const loading = ref(false)
const message = ref('')

const isOpen = ref(false);

const showModal = () => {
  isOpen.value = !isOpen.value;
}

// 🔥 carregar dados do usuário logado
onMounted(() => {
  if (auth.user) {
    form.value.name = auth.user.username
    form.value.email = auth.user.email
    form.value.phone = auth.user.phone
    form.value.password = auth.user.password
  }
})

// 🔥 salvar alterações
const save = async () => {
  message.value = ''

  if (!form.value.name || !form.value.email) {
    message.value = 'Preenche os campos obrigatórios'
    return
  }

  loading.value = true

  try {
    await auth.updateProfile({
      username: form.value.name,
      email: form.value.email,
      phone: form.value.phone,
      password: form.value.password
    })

    message.value = 'Perfil atualizado com sucesso!'
  } catch (e) {
    message.value = 'Erro ao atualizar perfil'
    console.log("error: ", e)
  } finally {
    loading.value = false
  }
  showModal()
}
</script>

<template>
  <div class="relative min-h-screen flex justify-center p-10">
    
    <div class="w-full flex flex-col md:flex-row  justify-center gap-4 p-10">
      <div class="text-white p-6 rounded-2xl shadow-md w-full max-w-lg h-100 border border-(--primary) bg-white/10 backdrop-blur-lg space-y-10 flex flex-col justify-center">
        <i class="ri-user-line text-4xl self-center"></i>
        <h1 class="text-2xl font-bold">
          Meu Perfil
        </h1>
        <div class="flex flex-col gap-3">
      
          <p>Nome: {{ form.name }}</p>
          <p>Email: {{ form.email }}</p>
          <p>Telefone: {{ form.phone? form.phone : "Não Registrado" }}</p>
        </div>
        <BaseButton :onClick="showModal">
          Editar Perfil
        </BaseButton>
      </div>
    </div>

    <!-- Formulario -->
    <div v-if="isOpen" class="absolute inset-0 bg-black/60 flex items-center justify-center">

      <div class="w-full max-w-md bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20 shadow-xl hover:border-(--primary)">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-2xl font-bold text-white mb-4">
            Meu Perfil
          </h2>
          <button @click="showModal" class="text-(--primary) hover:text-red-500">
            <i class="ri-close-fill text-2xl "></i>
          </button>
        </div>
        <p v-if="message" class="mb-3 text-center text-sm text-(--primary)">
          {{ message }}
        </p>
        <form class="flex flex-col gap-3">
      
          <div>
              <label class="text-white text-sm" for="name">Nome *</label>
              <input
                v-model="form.name"
                type="text"
                class="w-full mt-1 p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none border border-white/10 hover:border-(--primary) focus:border-(--primary) focus:border"
                placeholder="Nome"
                id="name"
              />
            </div>
             <!-- Email -->
            <div>
              <label class="text-white text-sm" for="email">Email *</label>
              <input
                v-model="form.email"
                type="email"
                class="w-full mt-1 p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none border border-white/10 hover:border-(--primary) focus:border-(--primary) focus:border"
                placeholder="Email"
                id="email"
              />
            </div>
      
            <!-- Telefone -->
            <div>
              <label class="text-white text-sm" for="phone">Telefone</label>
              <input
                v-model="form.phone"
                type="text"
                class="w-full mt-1 p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none border border-white/10 hover:border-(--primary) focus:border-(--primary) focus:border"
                placeholder="Telefone"
                id="phone"
              />
            </div>
            <div>
              <label class="text-white text-sm" for="phone">Senha</label>
              <input
                v-model="form.password"
                type="password"
                class="w-full mt-1 p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none border border-white/10 hover:border-(--primary) focus:border-(--primary) focus:border"
                id="password"
              />
            </div>
        </form>
        <BaseButton :onclick="save" :loading="loading" class="mt-4">
          {{ loading ? 'Salvando...' : 'Salvar Alterações' }}
        </BaseButton>
      </div>
    </div>

  </div>
</template>