<template>
  <footer class="text-gray-300 px-4 py-8 flex flex-col items-center">
    <!-- Container -->
    <div class="max-w-6xl w-[90%] mx-auto border-t-2 border-(--primary) pt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

      <!-- Brand -->
      <div>
        <h2 class="font-bold text-3xl mb-3">Treino Maromba</h2>
        <p class="text-gray-400">
          Transforme esforço em resultados.
        </p>
      </div>

      <!-- Links -->
      <div>
        <h3 class="mb-3 text-lg font-semibold">Links rápidos</h3>
        <ul class="space-y-2">
          <li><a href="/" class="link transition">Home</a></li>
          <li><a href="/about" class="link transition">Sobre</a></li>
          <li><a href="/login" class="link transition">Entrar</a></li>
          <li><a href="/singup" class="link transition">Cadastrar</a></li>
        </ul>
      </div>

      <!-- Contact -->
      <div>
        <h3 class="mb-3 text-lg font-semibold">Contato</h3>
        <div class="space-y-2 text-gray-400">
          <p class="flex items-center gap-2"><i class="ri-map-pin-line"></i> Maianga, Luanda, Angola</p>
          <p class="flex items-center gap-2"><i class="ri-phone-line"></i> +244 900 000 000</p>
          <p class="flex items-center gap-2">
            <i class="ri-mail-line"></i> geral.treinomaromba@gmail.com
          </p>
          
        </div>
      </div>

      <!-- Social -->
      <div>
        <h3 class="mb-3 text-lg font-semibold">Siga-nos</h3>
        <ul class="space-y-2">
          <li><a href="#" class="hover:text-(--primary) transition">Twitter</a></li>
          <li><a href="#" class="hover:text-(--primary) transition">Facebook</a></li>
          <li><a href="#" class="hover:text-(--primary) transition">LinkedIn</a></li>
          <li><a href="#" class="hover:text-(--primary) transition">Instagram</a></li>
        </ul>
      </div>

    </div>

    <!-- Bottom -->
    <div class="max-w-6xl w-[90%] mx-auto mt-6 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
      © 2026 Treino Maromba. Todos os direitos reservados.
    </div>

  </footer>
</template>

<script lang="ts" setup></script>