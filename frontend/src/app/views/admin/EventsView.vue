<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Event {
  id: number
  title: string
  description: string
  dateStart: string
  dateEnd: string
}

const events = ref<Event[]>([])

const form = ref<Event>({
  id: 0,
  title: '',
  description: '',
  dateStart: '',
  dateEnd: ''
})

const isEditing = ref(false)

// 🔹 LocalStorage key
const STORAGE_KEY = 'events'

// 🔹 Carregar eventos
const loadEvents = () => {
  const data = localStorage.getItem(STORAGE_KEY)
  events.value = data ? JSON.parse(data) : [
    {
        id: 1,
        title: 'Aula de Musculação 💪',
        description: 'Treino intensivo com foco em hipertrofia.',
        dateStart: '2026-03-30',
        dateEnd: '2026-04-01'
    },
    {
        id: 2,
        title: 'Cardio 🏃',
        description: 'Queima de gordura',
        dateStart: '2026-03-30',
        dateEnd: '2026-04-10',
  }
  ]
  saveEvents();
}

// 🔹 Salvar no localStorage
const saveEvents = () => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(events.value))
}

// 🔹 Criar ou editar
const handleSubmit = () => {
  if (!form.value.title || !form.value.dateStart) {
    alert('Preencha os campos obrigatórios!')
    return
  }

  if (isEditing.value) {
    // editar
    const index = events.value.findIndex(e => e.id === form.value.id)
    if (index !== -1) {
      events.value[index] = { ...form.value }
    }
  } else {
    // criar
    events.value.push({
      ...form.value,
      id: Date.now()
    })
  }

  saveEvents()
  resetForm()
  closeModal()
}

// 🔹 Editar
const editEvent = (event: Event) => {
  form.value = { ...event }
  isEditing.value = true
  openModal()
}

// 🔹 Apagar
const deleteEvent = (id: number) => {
  events.value = events.value.filter(e => e.id !== id)
  saveEvents()
}

// 🔹 Reset
const resetForm = () => {
  form.value = {
    id: 0,
    title: '',
    description: '',
    dateStart: '',
    dateEnd: ''
  }
  isEditing.value = false
}

onMounted(loadEvents)

const handleCancel = () => {
  resetForm()
  closeModal()
}

const isOpen = ref(false);

const openModal = () => {
  isOpen.value = true;
}
const closeModal = () => {
  isOpen.value = false;
}
</script>

<template>
  <section class="p-10 text-white flex flex-col  gap-10">

    <div class="bg-(--bg) p-6 space-y-4 rounded-xl max-w-xl w-full flex flex-col md:flex-row justify-between items-left md:items-centerborder border-white/20">
      <div>
        <h1 class="text-3xl font-bold mb-2">Gerenciar Eventos</h1>
        <p class="text-gray-300">Crie, edite ou apague eventos para os usuários.</p>
      </div>
      <button
        @click="openModal"
        class="bg-yellow-300 hover:bg-(--p-hover) text-black px-4 h-12 rounded font-bold">
          Criar Evento
      </button>
    </div>

    <!-- FORM -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 scale-90"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-90"
    >
      <div
        v-if="isOpen"
        class="fixed inset-0 flex items-center justify-center"
      >

        <!-- BACKDROP -->
        <div
          class="absolute inset-0 bg-black/60 backdrop-blur-sm"
          @click="closeModal"
        ></div>

        <!-- MODAL -->
        <div
          class="relative bg-(--bg) p-6 rounded-2xl w-[90%] max-w-xl border border-white/20 shadow-2xl z-10"
        >
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-2xl font-bold">
              {{ isEditing ? 'Editar Evento' : 'Criar Evento' }}
            </h2>

            <button @click="closeModal">
              <i class="ri-close-fill text-3xl hover:text-red-400"></i>
            </button>
          </div>

          <div class="flex flex-col gap-3">
            <input v-model="form.title" placeholder="Título" class="input-style" />

            <textarea
              v-model="form.description"
              placeholder="Descrição"
              class="input-style h-24 resize-none"
            />

            <input v-model="form.dateStart" type="date" class="input-style" />
            <input v-model="form.dateEnd" type="date" class="input-style" />

            <div class="flex gap-2 mt-2">
              <button
                @click="handleSubmit"
                class="bg-yellow-300 text-black px-4 py-2 rounded font-bold hover:bg-(--p-hover)"
              >
                {{ isEditing ? 'Atualizar' : 'Criar' }}
              </button>

              <button
                v-if="isEditing"
                @click="handleCancel"
                class="bg-gray-500 px-4 py-2 rounded"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <!-- LISTA -->
    <div class="grid gap-6 max-w-xl w-full">
      <div
        v-for="event in events"
        :key="event.id"
        class="bg-(--bg) p-5 rounded-xl border border-white/20 hover:border-(--primary) transition"
      >
        <h3 class="text-xl font-bold">{{ event.title }}</h3>
        <p class="mt-2">{{ event.description }}</p>
        <p class="text-sm text-gray-300">{{ event.dateStart }}</p>
        <p class="text-sm text-gray-300">{{ event.dateEnd }}</p>

        <div class="flex gap-2 mt-4">
          <button
            @click="editEvent(event)"
            class="bg-blue-500 px-3 py-1 rounded"
          >
            Editar
          </button>

          <button
            @click="deleteEvent(event.id)"
            class="bg-red-500 px-3 py-1 rounded"
          >
            Apagar
          </button>
        </div>
      </div>
    </div>

  </section>
</template>