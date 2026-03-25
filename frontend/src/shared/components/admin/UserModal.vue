<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import { createUser, updateUser } from '@/services/userService'
import type { User } from '@/types/user'

// Props
const props = defineProps<{
  user: User | null
}>()

// Emits
const emit = defineEmits<{
  (e: 'close'): void
  (e: 'saved'): void
}>()

// Estado do form
const form = ref({
  name: '',
  email: '',
  phone: '',
  password: '',
  role: 'user' as 'admin' | 'moderator' | 'user'
})

// Loading
const loading = ref(false)

// Detectar modo
const isEdit = computed(() => !!props.user)

// Preencher form ao editar
watch(
  () => props.user,
  (val) => {
    if (val) {
      form.value = {
        name: val.username,
        email: val.email,
        phone: val.phone,
        password: val.password,
        role: val.role?? 'user'
      }
    } else {
      form.value = {
        name: '',
        email: '',
        phone: '',
        password: '',
        role: 'user'
      }
    }
  },
  { immediate: true }
)

// Validação simples
const isValid = computed(() => {
  return (
    form.value.name &&
    form.value.email &&
    form.value.phone &&
    form.value.password &&
    form.value.role
  )
})

// Salvar
const save = async () => {
  if (!isValid.value) {
    alert('Preenche todos os campos')
    return
  }

  loading.value = true

  try {
    if (isEdit.value && props.user) {
      await updateUser(props.user.id, form.value)
    } else {
      await createUser(form.value)
    }

    emit('saved')
    emit('close')
  } catch (e) {
    console.error(e)
    alert('Erro ao salvar')
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <Teleport to="body">
    <div class="fixed inset-0 z-50 flex items-center justify-center">
      
      <!-- Overlay -->
      <div 
        class="absolute inset-0 bg-black/60"
        @click="$emit('close')"
      ></div>

      <!-- Modal -->
      <form class="relative w-full max-w-md p-6 z-10 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-xl hover:border-(--primary) text-white">
        
        <!-- Header -->
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-xl font-semibold">
            {{ isEdit ? 'Editar Usuário' : 'Novo Usuário' }}
          </h2>
          <button @click="$emit('close')" class="text-(--primary) hover:text-red-500">
            <i class="ri-close-fill text-3xl "></i>
          </button>
        </div>

        <!-- Form -->
        <div class="flex flex-col gap-3">
          
          <input
            v-model="form.name"
            placeholder="Nome"
            class="w-full mt-1 p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none border border-white/10 hover:border-(--primary) focus:border-(--primary) focus:border"

          />

          <input
            v-model="form.email"
            placeholder="Email"
            class="w-full mt-1 p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none border border-white/10 hover:border-(--primary) focus:border-(--primary) focus:border"
          />

          <input
            v-model="form.phone"
            placeholder="Telefone"
            class="w-full mt-1 p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none border border-white/10 hover:border-(--primary) focus:border-(--primary) focus:border"
          />

          <input
            v-model="form.password"
            type="password"
            placeholder="Senha"
            class="w-full mt-1 p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none border border-white/10 hover:border-(--primary) focus:border-(--primary) focus:border"
          />

          <select v-model="form.role" class="w-full mt-1 p-3 rounded-lg bg-white/20 text-white outline-none border border-white/10 hover:border-yellow-300 focus:border-yellow-300 focus:border">
            <option value="user" class="text-black">User</option>
            <option value="admin" class="text-black">Admin</option>
          </select>

        </div>

        <!-- Actions -->
        <div class="flex justify-end gap-2 mt-6">
          <button
            @click="$emit('close')"
            class="px-4 py-2 border rounded"
          >
            Cancelar
          </button>

          <button
            @click="save"
            :disabled="loading"
            class="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
          >
            {{ loading ? 'Salvando...' : 'Salvar' }}
          </button>
        </div>

      </form>
    </div>
  </Teleport>
</template>





<!-- 
<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import { createUser, updateUser } from '@/services/userService'
import type { User } from '@/types/user'

// Props
const props = defineProps<{
  user: User | null
}>()

// Emits
const emit = defineEmits<{
  (e: 'close'): void
  (e: 'saved'): void
}>()

// Estado do form
const form = ref({
  username: '',
  email: '',
  phone: '',
  password: '',
  role: 'user' as 'admin' | 'moderator' | 'user'
})

// Loading
const loading = ref(false)

// Detectar modo
const isEdit = computed(() => !!props.user)

// Preencher form ao editar
watch(
  () => props.user,
  (val) => {
    if (val) {
      form.value = {
        username: val.username,
        email: val.email,
        phone: val.phone,
        password: val.password,
        role: val.role
      }
    } else {
      form.value = {
        username: '',
        email: '',
        phone: '',
        password: '',
        role: 'user'
      }
    }
  },
  { immediate: true }
)

// Validação simples
const isValid = computed(() => {
  return (
    form.value.username &&
    form.value.email &&
    form.value.phone &&
    form.value.password &&
    form.value.role
  )
})

// Salvar
const save = async () => {
  if (!isValid.value) {
    alert('Preenche todos os campos')
    return
  }

  loading.value = true

  try {
    if (isEdit.value && props.user) {
      await updateUser(props.user.id, form.value)
    } else {
      await createUser(form.value)
    }

    emit('saved')
    emit('close')
  } catch (e) {
    console.error(e)
    alert('Erro ao salvar')
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <Teleport to="body">
    <div class="fixed inset-0 z-50 flex items-center justify-center">
      
      <div 
        class="absolute inset-0 bg-black/60"
        @click="$emit('close')"
      ></div>

      <form class="relative w-full max-w-md p-6 z-10 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-xl hover:border-(--primary) text-white">
        
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-xl font-semibold">
            {{ isEdit ? 'Editar Usuário' : 'Novo Usuário' }}
          </h2>
          <button @click="$emit('close')" class="text-(--primary) hover:text-red-500">
            <i class="ri-close-fill text-3xl "></i>
          </button>
        </div>

        <div class="flex flex-col gap-3">
          
          <input
            v-model="form.username"
            placeholder="Nome"
            class="w-full mt-1 p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none border border-white/10 hover:border-(--primary) focus:border-(--primary) focus:border"

          />

          <input
            v-model="form.email"
            placeholder="Email"
            class="w-full mt-1 p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none border border-white/10 hover:border-(--primary) focus:border-(--primary) focus:border"
          />

          <input
            v-model="form.phone"
            placeholder="Telefone"
            class="w-full mt-1 p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none border border-white/10 hover:border-(--primary) focus:border-(--primary) focus:border"
          />

          <input
            v-model="form.password"
            type="password"
            placeholder="Senha"
            class="w-full mt-1 p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none border border-white/10 hover:border-(--primary) focus:border-(--primary) focus:border"
          />

          <select v-model="form.role" class="w-full mt-1 p-3 rounded-lg bg-white/20 text-white outline-none border border-white/10 hover:border-yellow-300 focus:border-yellow-300 focus:border">
            <option value="user" class="text-black">User</option>
            <option value="admin" class="text-black">Admin</option>
          </select>

        </div>

        <div class="flex justify-end gap-2 mt-6">
          <button
            @click="$emit('close')"
            class="px-4 py-2 border rounded"
          >
            Cancelar
          </button>

          <button
            @click="save"
            :disabled="loading"
            class="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
          >
            {{ loading ? 'Salvando...' : 'Salvar' }}
          </button>
        </div>

      </form>
    </div>
  </Teleport>
</template> -->