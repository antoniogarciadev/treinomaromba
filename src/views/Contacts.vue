<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  phone: '',
  plan: '',
  message: '',
})

const submitForm = () => {
  if (!form.value.name || !form.value.email) {
    alert('Preencha os campos obrigatórios!')
    return
  }

  console.log(form.value)
  alert('Cadastro enviado com sucesso!')
}
</script>

<template>
  <section class="flex flex-col items-center justify-center">
    <div
      class="w-full py-40 px-10 grid md:grid-cols-2 gap-6 bg-[url(../../public/homem.jpg)] bg-center bg-cover bg-linear-to-br from-gray-900 to-gray-800 p-6"
    >
      <!-- INFO -->
      <div class="text-white flex flex-col justify-center">
        <h1 class="text-4xl font-bold mb-4 flex flex-col gap-3 text-yellow-300">Fale Conosco 💪 <div class="w-full h-0.5 bg-yellow-300"></div></h1>
        <p class="text-gray-300 mb-6">
          Entre em contacto ou faça seu cadastro para treinar no melhor ginásio.
        </p>

        <div class="space-y-4">
          <p class="flex items-center gap-2"><i class="ri-map-pin-line"></i> Luanda, Angola</p>
          <p class="flex items-center gap-2"><i class="ri-phone-line"></i> +244 900 000 000</p>
          <p class="flex items-center gap-2">
            <i class="ri-mail-line"></i> .geral.treinomaromba@gmail.com
          </p>
          
        </div>
      </div>

      <!-- FORM -->
      <div
        class="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20 shadow-xl hover:border-yellow-300"
      >
        <h2 class="text-2xl font-bold text-white mb-4">Cadastro</h2>

        <form @submit.prevent="submitForm" class="space-y-4">
          <!-- Nome -->
          <div>
            <label class="text-white text-sm" for="name">Nome *</label>
            <input
              v-model="form.name"
              type="text"
              class="w-full mt-1 p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none border border-white/10 hover:border-yellow-300 focus:border-yellow-300 focus:border"
              placeholder="Seu nome"
              id="name"
            />
          </div>

          <!-- Email -->
          <div>
            <label class="text-white text-sm" for="email">Email *</label>
            <input
              v-model="form.email"
              type="email"
              class="w-full mt-1 p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none border border-white/10 hover:border-yellow-300 focus:border-yellow-300 focus:border"
              placeholder="seu@email.com"
              id="email"
            />
          </div>

          <!-- Telefone -->
          <div>
            <label class="text-white text-sm" for="phone">Telefone</label>
            <input
              v-model="form.phone"
              type="text"
              class="w-full mt-1 p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none border border-white/10 hover:border-yellow-300 focus:border-yellow-300 focus:border"
              placeholder="+244..."
              id="phone"
            />
          </div>

          <!-- Plano -->
          <div>
            <label class="text-white text-sm" for="plan">Plano</label>
            <select
              v-model="form.plan"
              class="w-full mt-1 p-3 rounded-lg bg-white/20 text-white outline-none border border-white/10 hover:border-yellow-300 focus:border-yellow-300 focus:border"
              id="plan"
            >
              <option value="" class="text-black">Selecione</option>
              <option value="mensal" class="text-black">Mensal</option>
              <option value="trimestral" class="text-black">Trimestral</option>
              <option value="anual" class="text-black">Anual</option>
            </select>
          </div>

          <!-- Mensagem -->
          <div>
            <label class="text-white text-sm" for="message">Mensagem</label>
            <textarea
              v-model="form.message"
              class="w-full mt-1 p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none border border-white/10 hover:border-yellow-300 focus:border-yellow-300 focus:border"
              rows="3"
              placeholder="Opcional..."
              id="message"
            ></textarea>
          </div>

          <!-- Botão -->
          <button
            class="w-full bg-yellow-300 hover:bg-yellow-400 text-white font-bold py-3 rounded-lg transition"
          >
            Enviar Cadastro
          </button>
        </form>
      </div>
    </div>
  </section>
</template>
