<script lang="ts" setup>
import { ref } from 'vue'
import { createUser } from '@/services/userService'
import BaseButton from '@/shared/components/BaseButton.vue'

const loading = ref(false)

const form = ref({
  name: '',
  email: '',
  phone: '',
  password: '',
  role: '',
})

const submitForm = async () => {
  if (!form.value.name || !form.value.email || !form.value.phone || !form.value.password){
    alert('Prencha os campos obrigatórios!')
    return
  }

  try{
    loading.value = true
    
    await createUser({
      username: form.value.name,
      email: form.value.email,
      phone: form.value.phone,
      password: form.value.password,
      role: 'user'
    })

    alert('Usuário criado com sucesso!');
  } catch (err) {
    alert('Erro ao cadastrar');
    console.log('Erro', err);
  }finally {
    loading.value = false;
  }
}
</script>

<template>
  <section class="flex flex-col min-h-screen items-center justify-center bg-[url(../../public/homem.jpg)] bg-center bg-cover bg-linear-to-br from-gray-900 to-gray-800">
    <div
      class=" max-w-6xl w-[90%] py-40 px-10 grid md:grid-cols-2 gap-6"
    >
      <!-- INFO -->
      <div class="text-white flex flex-col justify-center space-y-4">
        <h1 class="text-4xl font-bold flex flex-col gap-3 text-(--primary) pb-5">
          Cadastre-se e Faça Login 
          <div class="w-full h-0.5 bg-(--primary)"></div>
        </h1>

        <p>Entre e faça login para ficar a par das nossas novidades, selecionar os seus planos, e treinar com os melhores personais treiners do pais.</p>

        <ul class="ml-5 space-y-2">
          <li type="disc">Ver os melhores planos</li>
          <li type="disc">Econtrar os melhores ginásios perto de si</li>
          <li type="disc">Treinar com os melhores treinadores</li>
          <li type="disc">Ter acesso a muitos benefícios</li>
          <li type="disc">E muito mais</li>
        </ul>

      </div>

      <!-- FORM -->
      <div
        class="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20 shadow-xl hover:border-(--primary)"
      >
        <h2 class="text-2xl font-bold text-white mb-4">Cadastro</h2>

        <form @submit.prevent="submitForm" class="space-y-4">
          <!-- Nome -->
          <div>
            <label class="text-white text-sm" for="name">Nome *</label>
            <input
              v-model="form.name"
              type="text"
              class="input-style"
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
              class="input-style"
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
              class="input-style"
              placeholder="+244..."
              id="phone"
            />
          </div>

          <div>
            <label class="text-white text-sm" for="phone">Senha</label>
            <input
              v-model="form.password"
              type="password"
              class="input-style"
              id="password"
            />
          </div>

          <!-- Botão -->
          <BaseButton :onClick="submitForm" :loading="loading">
            Enviar Cadastro
          </BaseButton>
        </form>
      </div>
    </div>
  </section>
</template>
