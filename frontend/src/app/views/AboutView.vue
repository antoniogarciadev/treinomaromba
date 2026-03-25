<script lang="ts" setup>
</script>

<template>
  <main class="w-full flex flex-col items-center">
    <!-- HERO -->
    <section class="h-[60vh] w-full bg-[url('/istockphoto-1050417186-612x612.jpg')] bg-cover bg-center flex items-center justify-center relative">
    <div class="absolute inset-0 bg-black/60"></div>
      <div class="relative text-center px-4">
        <h1 class="text-4xl md:text-5xl font-bold mb-4 text-white">Sobre Nós</h1>
        <p class="text-gray-300 max-w-xl mx-auto">
          Transformamos disciplina em resultados.
        </p>
      </div>
    </section>
    
    <div class=" text-white max-w-6xl w-[90%]">
      
      <!-- SOBRE -->
      <section class="py-16 mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div class="flex flex-col gap-10" >
          <div >
            <h2 class="text-3xl font-bold mb-4 flex flex-col gap-2">Quem Somos<div class="w-full h-0.5 bg-yellow-300"></div></h2>
            <p class="text-gray-300 mb-4">
              Somos um ginásio focado em saúde, performance e bem-estar.
              Oferecemos treinos personalizados e ambiente motivador para todos os níveis.
            </p>
            <p class="text-gray-400">
              Nosso objetivo é ajudar você a alcançar seus resultados com consistência e disciplina.
            </p>
          </div>
          <!-- Mapa -->
          <div>
            <div>
              <h2 class="text-3xl font-bold mb-4 flex gap-1 items-center">
               <div class="w-0.5 h-8 bg-yellow-300"></div> Nosso Local 📍</h2>
            <p class="text-gray-300 mb-4">
              Venha nos visitar em Luanda, Maianga. Estamos prontos para recebê-lo no melhor ginásio!
            </p>
            </div>
            <div
              class="w-full h-80 rounded-2xl overflow-hidden shadow-xl border border-white/20 hover:border-yellow-300 hover:border-3"
            >
              <iframe
                class="w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.927799823987!2d13.232193!3d-8.836635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a5225fbd4c1b4c3%3A0x123456789abcdef0!2sMaianga%2C%20Luanda%2C%20Angola!5e0!3m2!1sen!2sao!4v1697044800000!5m2!1sen!2sao"
                style="border: 0"
                allowfullscreen="true"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        <div class="rounded-2xl overflow-hidden">
          <img src="/weight-lifting-concept-with-dumbbell-high-angle.png" alt="Gym" class="w-full h-full object-cover">
        </div>
      </section>
      <!-- VALORES -->
      <section class="py-16 px-6 ">
        <div class="max-w-6xl mx-auto text-center border-t border-yellow-300 pt-10">
    
          <h2 class="text-3xl font-bold mb-10">Nossos Valores</h2>
          <div class="grid md:grid-cols-3 gap-6">
    
            <div class="bg-white/5 p-6 rounded-xl backdrop-blur-lg">
              <i class="ri-fire-line text-3xl mb-3 text-blue-400"></i>
              <h3 class="font-bold text-lg mb-2">Disciplina</h3>
              <p class="text-gray-400">Consistência é o segredo do sucesso.</p>
            </div>
            <div class="bg-white/5 p-6 rounded-xl backdrop-blur-lg">
              <i class="ri-heart-pulse-line text-3xl mb-3 text-red-400"></i>
              <h3 class="font-bold text-lg mb-2">Saúde</h3>
              <p class="text-gray-400">Cuidamos do corpo e da mente.</p>
            </div>
            <div class="bg-white/5 p-6 rounded-xl backdrop-blur-lg">
              <i class="ri-team-line text-3xl mb-3 text-green-400"></i>
              <h3 class="font-bold text-lg mb-2">Comunidade</h3>
              <p class="text-gray-400">Treinar juntos é melhor.</p>
            </div>
          </div>
        </div>
      </section>
      <!-- CTA -->
      <section class="py-16 text-center px-6">
        <h2 class="text-3xl font-bold mb-4">Pronto para começar?</h2>
        <p class="text-gray-400 mb-6">Junte-se a nós e transforme seu corpo.</p>
        <router-link
          to="/contact"
          class="bg-yellow-300 hover:bg-yellow-400 px-6 py-3 rounded-lg font-bold transition">
          Fazer Cadastro
        </router-link>
      </section>
    </div>
  </main>
</template>