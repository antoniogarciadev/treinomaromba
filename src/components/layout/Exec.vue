<template>
  <footer class="site-footer">
    <div class="footer-container border-t border-yellow-300 py-10">
      <div class="footer-brand">
        <h2 class="font-bold text-3xl">Treino Maromba</h2>
        <p>Construindo interfaces modernas e responsivas com facilidade.</p>
      </div>

      <div class="footer-links">
        <h3>Links rápidos</h3>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Sobre</a></li>
          <li><a href="#">Contatos</a></li>
          <li><a href="#">Blog</a></li>
        </ul>
      </div>

      <div class="footer-contact">
        <h3>Contato</h3>
        <p>email@exemplo.com</p>
        <p>+55 (11) 99999-9999</p>
        <p>Rua Exemplo, 100 • São Paulo</p>
      </div>

      <div class="footer-social">
        <h3>Siga-nos</h3>
        <ul>
          <li><a href="#">Twitter</a></li>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">LinkedIn</a></li>
          <li><a href="#">Instagram</a></li>
        </ul>
      </div>
    </div>

    <div class="footer-bottom">
      <span>© 2026 Projeto Vue. Todos os direitos reservados.</span>
    </div>
  </footer>
</template>

<script setup></script>

<style scoped>
.site-footer {
  color: #e5e7eb;
  padding: 2rem 1rem 1rem;
  font-family:
    Inter,
    system-ui,
    -apple-system,
    Segoe UI,
    Roboto,
    Helvetica,
    Arial,
    sans-serif;
}

.footer-container {
  width: min(1150px, 100%);
  margin: 0 auto;
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr;
}

.footer-brand h2 {
  margin: 0 0 0.75rem;
  font-size: 1.3rem;
}

.footer-brand p {
  margin: 0;
  color: #cbd5e1;
}

.footer-links h3,
.footer-contact h3,
.footer-social h3 {
  margin-bottom: 0.75rem;
  font-size: 1.05rem;
}

.footer-links ul,
.footer-contact ul,
.footer-social ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li,
.footer-social li {
  margin-bottom: 0.55rem;
}

.footer-links a,
.footer-social a {
  color: #d1d5db;
  text-decoration: none;
  transition: color 0.2s ease;
}

.footer-links a:hover,
.footer-social a:hover {
  color: #fff;
}

.footer-contact p {
  margin: 0 0 0.45rem;
  color: #cbd5e1;
}

.footer-bottom {
  margin-top: 1.5rem;
  text-align: center;
  border-top: 1px solid #334155;
  padding-top: 0.75rem;
  font-size: 0.9rem;
  color: #94a3b8;
}

@media (min-width: 768px) {
  .footer-container {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 1024px) {
  .footer-container {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .site-footer {
    padding: 3rem 1rem 1.2rem;
  }
}
</style>
