<template>
  <section class="grid place-content-center gap-10 w-[90%] py-20 text-white md:px-10">
    <section>
      <article class="flex flex-col justify-between gap-10">
        <h1 class="text-3xl font-bold text-left">
          SOMOS UMA ACADEMIA DE ALTA QUALIDADE, DEDICADA À SAÚDE E BEM-ESTAR ACESSÍVEIS.
        </h1>

        <p class="text-justify">
          A Treino Marombas é uma academia para você frequentar do seu jeito, e fazer o seu melhor.
          Ao associar-se, você terá acesso a uma programação digital e presencial na academia para
          ajudá-lo a atingir seus objetivos de condicionamento físico. Veja abaixo todos os serviços
          oferecidos pela academia.
        </p>
      </article>
    </section>

    <div
      class="flex flex-col md:flex-row items-center justify-center gap-10 py-15 border-y border-yellow-300"
    >
      <img
        class="w-[98%] md:w-100 rounded-lg hover-img"
        src="/gettyimages-925361386-612x612.jpg"
        alt=""
        srcset=""
      />

      <div class="grid grid-cols-2 gap-8 place-content-between content-center place-items-center">
        <img class="w-50 h-70 rounded-lg hover-img" src="/gettyimages-2234492606-612x612.jpg" alt="" srcset="" />
        <img
          class="w-50 h-70 rounded-lg hover-img"
          src="/strong-enough-carry-such-heavy-weights.jpg"
          alt=""
          srcset=""
        />
      </div>
    </div>

    <section class="flex flex-col lg:flex-row items-center justify-between gap-10 py-20">
      <div class="flex flex-col justify-between gap-10">
        <h1 class="text-3xl font-bold text-left flex gap-1 items-center"><div class="w-0.5 h-8 bg-yellow-300"></div> COMODIDADES</h1>
        <p class="text-justify max-w-190">
          Na Klipsan Fitness, sempre oferecemos novas comodidades para atender às necessidades dos
          nossos clientes. Você gostaria de adicionar algo à nossa lista? Envie uma sugestão.
        </p>

        <div
          class="md:w-150 flex gap-10 items-center justify-between self-start text-sm md:text-lg"
        >
          <ul>
            <li><i class="ri-check-line text-yellow-300 text-[20px]"></i> Instalações modernas</li>
            <li><i class="ri-check-line text-yellow-300 text-[20px]"></i> Aulas premium</li>
            <li><i class="ri-check-line text-yellow-300 text-[20px]"></i> Personal trainers</li>
            <li><i class="ri-check-line text-yellow-300 text-[20px]"></i> Parede de escalada</li>
            <li><i class="ri-check-line text-yellow-300 text-[20px]"></i> Ringue de boxe</li>
          </ul>
          <ul>
            <li><i class="ri-check-line text-yellow-300 text-[20px]"></i> Sucos</li>
            <li><i class="ri-check-line text-yellow-300 text-[20px]"></i> Nutrição pessoal</li>
            <li>
              <i class="ri-check-line text-yellow-300 text-[20px]"></i> Passes mensais para
              convidados
            </li>
            <li><i class="ri-check-line text-yellow-300 text-[20px]"></i> Quadras de basquete</li>
            <li><i class="ri-check-line text-yellow-300 text-[20px]"></i> Armários</li>
          </ul>
        </div>
      </div>

      <div class="rounded-2xl overflow-hidden">
        <img src="/maquina de correr.jpg" alt="Gym" class="w-150 h-100 object-cover" />
      </div>
    </section>

    <div class="grid md:grid-cols-2 palec gap-10 items-center justify-between">
      <div class="flex flex-col justify-between gap-10">
        <h1 class="text-3xl font-bold text-left ">HORÁRIOS DE FUNCIONAMENTO</h1>
        <p class="text-justify flex items-center gap-2">
          <i class="ri-time-line text-yellow-300 text-2xl"></i>
          Segunda a sexta-feira: 6h às 22h.
        </p>
        <p class="text-justify flex items-center gap-2">
          <i class="ri-time-line text-yellow-300 text-2xl"></i>
          Sábado: 8h às 20h.
        </p>
        <p class="text-justify flex items-center gap-2">
          <i class="ri-time-line text-yellow-300 text-2xl"></i>
          Domingo: 10h às 18h.
        </p>
      </div>
      <div class="flex flex-col justify-between gap-10">
        <h2 class="text-3xl font-bold text-left">AGENDAR UMA VISITA</h2>
        <p>
          Faça um teste gratuito de 30 minutos em qualquer um dos nossos estabelecimentos para
          decidir se a Klipsan é a academia certa para você. Você poderá experimentar os
          equipamentos, observar as aulas e receber respostas diretas para todas as suas perguntas.
        </p>

        <div>
          <router-link
            to="/contact"
            class="bg-yellow-300 hover:bg-yellow-400 px-6 py-3 rounded-lg font-bold transition"
          >
            Fazer Cadastro
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hover-img {
  border: 2px solid #ffffff;
  /* border: 2px solid #fcd34d; */
  transition:
    transform 0.28s ease,
    box-shadow 0.28s ease,
    border-color 0.28s ease;
  box-shadow: 0 0 0 rgba(252, 211, 77, 0);
}

.hover-img:hover {
  transform: scale(0.96);
  border-color: #f59e0b;
  box-shadow:
    0 4px 19px 2px rgba(252, 211, 77, 0.7),
    inset 0 0 14px rgba(252, 211, 77, 0.45);
  animation: bulb-glow 1.25s ease-in-out infinite alternate;
}
</style>


<script>
  import { RouterLink } from 'vue-router'
</script>