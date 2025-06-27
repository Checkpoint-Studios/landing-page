<script lang="ts">
  import CtaButton from "./CtaButton.svelte";
  import HamburgerMenu from "./HamburgerMenu.svelte";
</script>

<nav class="flex w-full px-8 xl:p-0 xl:justify-center">
  <div
    class="hidden xl:flex items-center justify-between 2xl:max-w-2/5 p-4 bg-primary-700/50 rounded-full gap-x-4 backdrop-blur-lg shadow-lg border-4 border-main-secondary"
  >
    <ul class="flex font-tusker font-semibold text-lg gap-x-2">
      <li><a href="#home">Inicio</a></li>
      <li><a href="#services">Servicios</a></li>
      <li><a href="#process">Proceso</a></li>
      <li><a href="#projects">Proyectos</a></li>
      <li><a href="#about">Nosotros</a></li>
    </ul>
    <CtaButton href="#contact" color="secondary" />
  </div>
  <div class="xl:hidden">
    <HamburgerMenu />
  </div>
</nav>
