<script>
  import CtaButton from "./CtaButton.svelte";
  import HamburgerMenu from "./HamburgerMenu.svelte";
</script>

<nav class="flex w-full px-8 lg:p-0 lg:justify-center sticky mt-[85vh] lg:mt-[75vh]">
  <div
    class="hidden lg:flex items-center justify-between 2xl:max-w-2/5 p-4 bg-white/10 rounded-full gap-x-4 backdrop-blur-md shadow-lg"
  >
    <ul class="flex font-tusker font-semibold text-2xl gap-x-4">
      <li><a href="#services">Servicios</a></li>
      <li><a href="#process">Proceso</a></li>
      <li><a href="#projects">Proyectos</a></li>
      <li><a href="#about">Nosotros</a></li>
    </ul>
    <CtaButton href="#contact" color="secondary" />
  </div>
  <div class="lg:hidden">
    <HamburgerMenu />
  </div>
</nav>
