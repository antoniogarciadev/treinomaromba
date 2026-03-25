<script setup lang="ts">
  import { ref, onMounted } from 'vue';

interface Event {
  id: number
  title: string
  description: string
  dateStart: string
  dateEnd: string
}

    const events = ref<Event[]>([]);

    const STORAGE_KEY: string = 'events';

    const loadEvents = () => {
      const data = localStorage.getItem(STORAGE_KEY);

      if (data) {
        events.value = JSON.parse(data);
        console.log(events.value);
      } else {
        events.value = [
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
  },
        ]
        localStorage.setItem(STORAGE_KEY, JSON.stringify(events.value));
      }
      console.log(events.value);
    }

    onMounted(loadEvents);
</script>

<template>

  <section class="h-screen flex flex-col  items-center gap-4 p-10">

    <div class="w-full self-start rounded-2xl">
      <div class="border border-white">
          <h2 class="p-2 text-2xl text-white flex items-center gap-4">
            <i class="ri-calendar-event-line"></i>
            <span class="font-bold">Eventos</span>
          </h2>
      </div>

      <div v-if="events.length > 0" class="border border-white text-white">
        <div v-for="event in events" :key="event.id" class="border hover:bg-amber-50/30 flex flex-col gap-1">
            <p class="p-2"> Nome do Evento: {{ event.title }}</p>
            <p class="p-2"> Nome do Evento: {{ event.description }}</p>
            <p class="p-2">Data inicio: {{ event.dateStart }}</p>
            <p class="p-2">Data termino: {{ event.dateEnd }}</p>
        </div>
      </div>

      <div v-else class="border border-white text-white">
        <div>
          <div class="py-5 p-2 flex items-center gap-4 text-(--primary)">
            <i class="ri-cloud-off-line text-2xl"></i> 
            <span class="font-bold ">
              Ups! parece que não há eventos</span>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>