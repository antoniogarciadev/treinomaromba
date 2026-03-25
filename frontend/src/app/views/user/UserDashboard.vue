<script setup lang="ts"></script>

<template>

  <section class="h-screen flex flex-col gap-4 p-10">
    <div class="flex flex-col md:flex-row  justify-center gap-4 p-10">
    
      <div class="group bg-(--bg) text-white border hover:border-(--primary) hover:drop-shadow-xl hover:drop-shadow-amber-300/40 hover:-translate-y-3 ease-in-out duration-200 py-10 p-6 rounded-2xl shadow-md w-full max-w-md flex flex-col items-start gap-5 ">
        <i class="ri-ball-pen-line text-3xl group-hover:text-(--primary)"></i>
        <h1 class="text-2xl font-bold mb-4 text-center">
          Planos Assinados
        </h1>
        <p>Nenhum plano assinado</p>
      </div>

      <div class="group bg-(--bg) text-white border hover:border-(--primary) hover:drop-shadow-xl hover:drop-shadow-amber-300/40 hover:-translate-y-3 ease-in-out duration-200 py-10 p-6 rounded-2xl shadow-md w-full max-w-md flex flex-col items-start gap-5 ">
        <i class="ri-calendar-event-line text-3xl group-hover:text-(--primary)"></i>
        <h1 class="text-2xl font-bold mb-4 text-center">
          Eventos
        </h1>
        <p>Sem Eventos</p>
      </div>

      <div class="group bg-(--bg) text-white border hover:border-(--primary) hover:drop-shadow-xl hover:drop-shadow-amber-300/40 hover:-translate-y-3 ease-in-out duration-200 py-10 p-6 rounded-2xl shadow-md w-full max-w-md flex flex-col items-start gap-5 ">
        <i class="ri-meteor-line text-3xl group-hover:text-(--primary)"></i>
        <h1 class="text-2xl font-bold mb-4 text-center">
          Treinadores
        </h1>
        <p>Musculação: Artur Frasc.</p>
      </div>

    </div>
  </section>
</template>