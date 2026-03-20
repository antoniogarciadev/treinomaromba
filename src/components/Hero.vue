<template>
  <div class="w-full h-screen relative">
    <swiper
      :modules="modules"
      :slides-per-view="1"
      :space-between="0"
      :loop="true"
      :autoplay="{
        delay: 3000,
        disableOnInteraction: false,
      }"
      :navigation="{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }"
      class="h-full"
    >
      <swiper-slide class="h-full flex items-center justify-center">
        <section
          class="bg-[url(../../public/bg_alteres_cinza.png)] bg-center bg-cover w-full h-screen flex items-center justify-center"
        >
          <h1
            class="floating-title font-bold text-4xl text-center text-yellow-300 text-shadow-lg px-10 py-20 rounded-2xl"
          >
            TREINE NO SEU TEMPO.
          </h1>
        </section>
      </swiper-slide>

      <swiper-slide class="h-full flex items-center justify-center">
        <section
          class="bg-[url(../../public/3d-gym-equipment.png)] bg-center bg-cover w-full h-screen flex items-center justify-center"
        >
          <h1
            class="floating-title font-bold text-4xl text-center text-white text-shadow-lg px-10 py-20 rounded-2xl"
          >
            SUPERE OS SEUS LIMITES.
          </h1>
        </section>
      </swiper-slide>

      <swiper-slide class="h-full flex items-center justify-center">
        <section
          class="bg-[url(../../public/2149307765.jpg)] bg-center bg-cover w-full h-screen flex items-center justify-center"
        >
          <h1
            class="floating-title font-bold text-4xl text-center text-white text-shadow-lg px-10 py-20 rounded-2xl"
          >
            RESULTADOS REAIS COMEÇAM AQUI.
          </h1>
        </section>
      </swiper-slide>
    </swiper>

    <div
      class="swiper-button-prev !w-10 !h-10 !text-yellow-300 hover:!text-white hover:!bg-yellow-300 !bg-black/30 backdrop-blur-md rounded-full p-2"
    ></div>
    <div
      class="swiper-button-next !w-10 !h-10 !text-yellow-300 hover:!text-white hover:!bg-yellow-300 !bg-black/30 backdrop-blur-md rounded-full p-2"
    ></div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const modules = [Autoplay, Navigation]

    // Funções de log se precisares debugar
    const onSwiper = (swiper) => {
      console.log(swiper)
    }
    const onSlideChange = () => {
      console.log('slide change')
    }

    return {
      modules,
      onSwiper,
      onSlideChange,
    }
  },
}
</script>

<style scoped>
/* Animação suave para evitar o efeito de "colar" do JS */
@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
}

.floating-title {
  display: inline-block;
  animation: float 3s ease-in-out infinite;
  will-change: transform; /* Melhora a fluidez usando a GPU */
}

/* Garante que os botões originais do Swiper apareçam sobre o slide */
:deep(.swiper-button-next):after,
:deep(.swiper-button-prev):after {
  font-size: 1.2rem;
  font-weight: bold;
}
</style>